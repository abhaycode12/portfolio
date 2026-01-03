
import React, { useState, useEffect } from 'react';
import { HeroData } from '../types';

const Hero: React.FC<{ data: HeroData }> = ({ data }) => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        const tick = () => {
            const fullText = data.roles[roleIndex];
            const updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(2000); // Pause at end
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setRoleIndex((prevIndex) => (prevIndex + 1) % data.roles.length);
                setDelta(500);
            } else {
                 setDelta(isDeleting ? 100 : 200 - Math.random() * 100);
            }
        };

        const ticker = setTimeout(tick, delta);
        return () => clearTimeout(ticker);
    }, [text, delta, isDeleting, roleIndex, data.roles]);

    return (
        <section id="hero" className="min-h-[90vh] flex items-center justify-center animate-fade-in-up py-16">
            <div className="grid lg:grid-cols-2 items-center gap-12 w-full">
                <div className="order-2 lg:order-1">
                    <span className="text-lg font-semibold text-gray-400 tracking-widest uppercase">Expert Web Solutions</span>
                    <h1 className="text-5xl md:text-7xl font-bold my-4 text-white">
                        Hi, I’m <span className="text-gradient">{data.name}</span>
                    </h1>
                    <div className="text-3xl md:text-5xl font-bold h-16 md:h-20">
                        <span className="text-white">a </span>
                        <span className="text-gradient border-r-4 border-[var(--gradient-start)] pr-1">
                            {text}
                        </span>
                    </div>
                    <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl">
                        {data.description}
                    </p>
                    <div className="mt-8">
                        <a 
                            href={data.resumeUrl} 
                            download="Abhay_Kumar_Gupta_Resume.pdf"
                            className="button-primary text-white font-bold py-3 px-8 rounded-lg inline-block animate-fade-in-up"
                            style={{ animationDelay: '500ms'}}
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
                 <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-72 h-[400px] lg:w-96 lg:h-[550px] group">
                       {/* Background Glow */}
                       <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 to-sky-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                       
                        {/* The Image Container */}
                        <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[6px] border-slate-800 transition-all duration-700 group-hover:scale-[1.03]">
                             <img 
                                src={data.image} 
                                alt={data.name}
                                className="w-full h-full object-cover transition-all duration-700"
                                onError={(e) => {
                                    console.error("Failed to load image at:", data.image);
                                    (e.target as HTMLImageElement).src = 'https://raw.githubusercontent.com/abhaycode12/portfolio/main/image/abha.jpeg';
                                }}
                            />
                            {/* Subtle Depth Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
                        </div>
                        
                        {/* Decorative floating accent */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-500 to-sky-500 rounded-2xl -z-10 animate-pulse opacity-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

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
                    <span className="text-lg font-semibold text-gray-400 tracking-widest">WELCOME TO MY WORLD</span>
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
                </div>
                 <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                       <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full blur-xl opacity-50"></div>
                        <img 
                            src={data.image} 
                            alt={data.name} 
                            className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-slate-800"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
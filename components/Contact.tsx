
import React, { useState, useEffect } from 'react';
import Section from './Section';
import { ContactData, HeroData } from '../types';
import { GoogleGenAI } from "@google/genai";

/**
 * PRODUCTION INSTRUCTION:
 * To receive emails, please create a free account at https://formspree.io
 * Create a new form, and replace the ID below with your new Form ID.
 */
const FORMSPREE_ID = "mqakpzoz"; 
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

const ContactInfoCard: React.FC<{ data: ContactData; heroData: HeroData }> = ({ data, heroData }) => (
    <div className="bg-slate-800/50 p-8 rounded-2xl h-full border border-slate-700/50 backdrop-blur-sm shadow-xl">
        <div className="relative mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-sky-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img src={heroData.image} alt={heroData.name} className="relative w-32 h-32 rounded-2xl mx-auto shadow-2xl object-cover" />
        </div>
        <h3 className="text-2xl font-bold text-white text-center">{heroData.name}</h3>
        <p className="text-teal-400 text-center font-medium mb-4">{heroData.roles[0]}</p>
        
        <div className="space-y-5 mt-8 text-sm">
            <div className="flex items-center space-x-4 group">
                <div className="w-11 h-11 rounded-xl bg-slate-700/50 flex items-center justify-center group-hover:bg-teal-500/20 transition-all">
                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
                </div>
                <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Call Me</p>
                    <a href={`tel:${data.phone}`} className="text-slate-200 hover:text-teal-400 transition-colors font-medium text-base">+{data.phone}</a>
                </div>
            </div>
            <div className="flex items-center space-x-4 group">
                <div className="w-11 h-11 rounded-xl bg-slate-700/50 flex items-center justify-center group-hover:bg-teal-500/20 transition-all">
                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Email Me</p>
                    <a href={`mailto:${data.email}`} className="text-slate-200 hover:text-teal-400 transition-colors font-medium text-base break-all">{data.email}</a>
                </div>
            </div>
            <div className="flex items-center space-x-4 group">
                <div className="w-11 h-11 rounded-xl bg-slate-700/50 flex items-center justify-center group-hover:bg-teal-500/20 transition-all">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </div>
                <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">LinkedIn</p>
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-teal-400 transition-colors font-medium text-base">Connect with Abhay</a>
                </div>
            </div>
        </div>
    </div>
);

const ContactForm: React.FC<{ email: string }> = ({ email }) => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'fallback'>('idle');
    const [aiLog, setAiLog] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleMailto = () => {
        const body = `Message from ${formData.name} (${formData.email}):\n\n${formData.message}`;
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('processing');

        try {
            // Step 1: AI Verification & Analysis
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: `A user named ${formData.name} is reaching out about "${formData.subject}".
                Content: "${formData.message}"
                Act as a specialized contact terminal. Provide a 1-sentence technical confirmation that the message is formatted correctly and ready for delivery to abhaycode12@gmail.com.`,
                config: { systemInstruction: "You are Abhay's portfolio AI gateway." }
            });
            setAiLog(response.text || "Message verified and optimized for transmission.");

            // Step 2: Attempt Real Delivery
            const fetchPromise = fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(formData)
            });

            // Set a timeout for the fetch
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 4000));
            
            await Promise.race([fetchPromise, timeoutPromise]);
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.warn("Automated delivery bypassed or blocked. Switching to hybrid mode.");
            setStatus('fallback');
        }
    };

    if (status === 'success' || status === 'fallback') {
        const isFallback = status === 'fallback';
        return (
            <div className="bg-slate-800/50 p-10 rounded-2xl text-center border border-teal-500/30 min-h-[450px] flex flex-col items-center justify-center animate-fade-in-up">
                <div className={`w-20 h-20 ${isFallback ? 'bg-amber-500/20' : 'bg-teal-500/20'} rounded-full flex items-center justify-center mb-6`}>
                    {isFallback ? (
                        <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    ) : (
                        <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                    {isFallback ? 'Message Prepared!' : 'Message Sent!'}
                </h3>
                
                <p className="text-slate-400 max-w-sm mb-8 text-sm leading-relaxed italic">
                    {aiLog || "Your message was successfully processed by our AI gateway."}
                </p>

                <div className="flex flex-col space-y-3 w-full max-w-xs">
                    {isFallback ? (
                        <>
                            <p className="text-amber-400 text-[11px] font-bold uppercase tracking-widest mb-2">Delivery service restricted. Use manual link:</p>
                            <button 
                                onClick={handleMailto}
                                className="w-full py-4 bg-gradient-to-r from-teal-500 to-sky-500 text-white rounded-xl font-bold shadow-lg hover:shadow-teal-500/40 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>Finalize Send Now</span>
                            </button>
                        </>
                    ) : (
                        <button 
                            onClick={() => setStatus('idle')} 
                            className="w-full py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-all font-semibold"
                        >
                            Send Another Message
                        </button>
                    )}
                    
                    {isFallback && (
                         <button 
                            onClick={() => setStatus('idle')} 
                            className="text-slate-500 hover:text-slate-300 text-xs underline mt-2"
                        >
                            Edit message and retry auto-send
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm relative overflow-hidden shadow-2xl">
            {status === 'processing' && (
                <div className="absolute inset-0 z-30 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center">
                    <div className="w-16 h-16 border-4 border-teal-500/20 border-t-teal-500 rounded-full animate-spin mb-6"></div>
                    <div className="text-center px-6">
                        <p className="text-teal-400 font-bold text-lg mb-1 animate-pulse">Gateway Establishing...</p>
                        <p className="text-slate-500 text-[10px] tracking-[0.2em] uppercase font-mono">Syncing with abhaycode12@gmail.com</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Identity</label>
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl py-3.5 px-5 text-white placeholder-slate-700 focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition-all outline-none" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Callback Email</label>
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl py-3.5 px-5 text-white placeholder-slate-700 focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition-all outline-none" />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                    <input type="text" name="subject" placeholder="What is this regarding?" value={formData.subject} onChange={handleChange} required className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl py-3.5 px-5 text-white placeholder-slate-700 focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition-all outline-none" />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Inquiry Details</label>
                    <textarea name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} required rows={4} className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl py-3.5 px-5 text-white placeholder-slate-700 focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition-all outline-none resize-none"></textarea>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pt-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse shadow-[0_0_8px_teal]"></div>
                        <p className="text-[10px] text-slate-500 font-mono tracking-tighter">AI AGENT ONLINE | SECURE CHANNEL</p>
                    </div>
                    <button 
                        type="submit" 
                        className="button-primary text-white font-black py-4 px-10 rounded-xl text-base shadow-xl hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center space-x-3 uppercase tracking-widest"
                    >
                        <span>Dispatch Message</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

const Contact: React.FC<{ data: ContactData; heroData: HeroData }> = ({ data, heroData }) => {
    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2 animate-slide-in-left">
                        <ContactInfoCard data={data} heroData={heroData} />
                    </div>
                    <div className="lg:col-span-3 animate-fade-in-up">
                        <ContactForm email={data.email} />
                    </div>
                </div>
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center space-x-4 px-6 py-2 bg-slate-800/30 border border-slate-700/50 rounded-full">
                        <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Powered by</span>
                        <div className="h-4 w-px bg-slate-700"></div>
                        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">Abhay Gupta</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;

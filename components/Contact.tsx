import React, { useState } from 'react';
import Section from './Section';
import { ContactData, HeroData } from '../types';

const ContactInfoCard: React.FC<{ data: ContactData; heroData: HeroData }> = ({ data, heroData }) => (
    <div className="bg-black/20 p-8 rounded-lg h-full">
        <img src={heroData.image} alt={heroData.name} className="w-32 h-32 rounded-lg mx-auto shadow-md mb-4" />
        <h3 className="text-2xl font-bold text-white text-center">{heroData.name}</h3>
        <p className="text-[var(--text-secondary)] text-center">{heroData.roles[0]}</p>
        <p className="text-[var(--text-secondary)] my-4 text-center text-sm">
            I'm available for freelance work. Connect with me via phone or email.
        </p>
        <div className="border-t border-[var(--border-color)] my-4"></div>
        <div className="space-y-2 text-sm">
            <p><strong className="text-white">Phone:</strong> <a href={`tel:${data.phone}`} className="text-[var(--text-secondary)] hover:text-white">{data.phone}</a></p>
            <p><strong className="text-white">Email:</strong> <a href={`mailto:${data.email}`} className="text-[var(--text-secondary)] hover:text-white">{data.email}</a></p>
            <p><strong className="text-white">LinkedIn:</strong> <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-white">/in/abhay-kumar-gupta-webdev/</a></p>
        </div>
    </div>
);

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };
    
    const inputStyles = "w-full bg-black/20 border border-[var(--border-color)] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[var(--gradient-start)] transition-colors";

    return (
        <div className="bg-black/20 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className={inputStyles} />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className={inputStyles} />
                </div>
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className={inputStyles} />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5} className={inputStyles}></textarea>
                <button type="submit" className="w-full button-primary text-white font-bold py-3 px-6 rounded-lg">
                    Send Message
                </button>
            </form>
        </div>
    );
};

const Contact: React.FC<{ data: ContactData; heroData: HeroData }> = ({ data, heroData }) => {
    return (
        <Section id="contact" title="Get In Touch">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-fade-in-up">
                <div className="lg:col-span-2">
                    <ContactInfoCard data={data} heroData={heroData} />
                </div>
                <div className="lg:col-span-3">
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
};

export default Contact;

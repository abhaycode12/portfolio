import React, { useState, useEffect } from 'react';

// Import data
import {
    heroData,
    aboutData,
    experienceData,
    projectsData,
    educationData,
    contactData,
    skillsData
} from './data';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Resume from './components/Resume';

const App: React.FC = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed selection:bg-teal-300 selection:text-teal-900">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Sidebar data={contactData} />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Hero data={heroData} />
                <About data={aboutData} />
                <Resume 
                    education={educationData} 
                    experience={experienceData} 
                    skills={skillsData} 
                />
                <Projects data={projectsData} />
                <Contact data={contactData} heroData={heroData} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
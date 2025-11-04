import React from 'react';
import Section from './Section';
import { AboutData, ServiceItem } from '../types';

interface AboutProps {
    data: AboutData;
}

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => (
    <div className="bg-[var(--card-color)] p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-xl font-bold text-gradient mb-3">{service.title}</h3>
        <p className="text-[var(--text-secondary)]">{service.description}</p>
    </div>
);

const About: React.FC<AboutProps> = ({ data }) => {
    return (
        <Section id="about" title="About Me">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed animate-fade-in-up">
                    {data.profile}
                </p>
            </div>
            <div className="mt-20">
                <h3 className="text-3xl font-bold text-center mb-12 text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>What I Do</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.services.map((service, index) => (
                        <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${400 + index * 150}ms`}}>
                             <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
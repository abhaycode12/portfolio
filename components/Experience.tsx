import React from 'react';
import Section from './Section';
import { ExperienceItem } from '../types';

interface ExperienceProps {
    data: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
    return (
        <Section id="experience" title="Work Experience">
            <div className="relative border-l-2 border-teal-500 dark:border-teal-400 pl-8 space-y-12">
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className="relative opacity-0 animate-slide-in-left"
                        style={{ animationDelay: `${index * 200}ms` }}
                    >
                        <div className="absolute -left-[42px] top-1 w-4 h-4 bg-white dark:bg-slate-900 border-2 border-teal-500 dark:border-teal-400 rounded-full"></div>
                        <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">{item.period}</p>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-1">{item.role}</h3>
                        <p className="text-md text-slate-600 dark:text-slate-400">{item.company}</p>
                        <p className="mt-2 text-base leading-relaxed">{item.description}</p>
                        <ul className="mt-3 list-disc list-inside space-y-1">
                            {item.tasks.map((task, i) => (
                                <li key={i}>{task}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
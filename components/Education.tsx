import React from 'react';
import Section from './Section';
import { EducationItem } from '../types';

interface EducationProps {
    data: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ data }) => {
    return (
        <Section id="education" title="Education">
            <div className="space-y-8">
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md opacity-0 animate-fade-in-up"
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        <div className="flex justify-between items-baseline">
                           <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{item.degree}</h3>
                           <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">{item.period}</p>
                        </div>
                        <p className="text-md text-slate-600 dark:text-slate-400 mt-1">{item.institution}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
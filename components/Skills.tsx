import React from 'react';
import Section from './Section';
import { SkillItem } from '../types';

interface SkillBarProps {
    skill: SkillItem;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => (
    <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
            <div className="flex items-center">
                {skill.icon && <skill.icon className="w-5 h-5 mr-2 text-slate-500 dark:text-slate-400" />}
                <span className="text-base font-medium text-slate-700 dark:text-white">{skill.name}</span>
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-white">{skill.level}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
            <div
                className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
            ></div>
        </div>
    </div>
);

interface SkillsProps {
    data: SkillItem[];
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
    return (
        <Section id="skills" title="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                {data.map((skill, index) => (
                    <div
                        key={index}
                        className="opacity-0 animate-fade-in-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <SkillBar skill={skill} />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
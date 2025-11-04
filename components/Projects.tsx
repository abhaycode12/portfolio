import React from 'react';
import Section from './Section';
import { ProjectItem } from '../types';

interface ProjectsProps {
    data: ProjectItem[];
}

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
        {project.image && (
            <div className="overflow-hidden h-48">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
        )}
        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-100 mb-2">{project.name}</h3>
            <p className="text-sm font-semibold text-teal-400 mb-3">{project.technology}</p>
            <p className="text-slate-400 text-sm mb-4">{project.role}</p>
            <ul className="text-slate-400 text-sm list-disc list-inside space-y-1">
                {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
        </div>
    </div>
);


const Projects: React.FC<ProjectsProps> = ({ data }) => {
    return (
        <Section id="projects" title="My Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((project, index) => (
                    <div 
                        key={index} 
                        className="opacity-0 animate-fade-in-up" 
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;

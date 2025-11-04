import React from 'react';

export interface HeroData {
    name: string;
    roles: string[];
    description: string;
    image: string;
    resumeUrl: string;
}

export interface ServiceItem {
    title: string;
    description: string;
}

export interface AboutData {
    profile: string;
    services: ServiceItem[];
}

export interface ExperienceItem {
    period: string;
    role: string;
    company: string;
    description: string;
    tasks: string[];
    logo?: string;
}

export interface SkillItem {
    name: string;
    level: number;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ProjectItem {
    name: string;
    technology: string;
    role: string;
    details: string[];
    image?: string;
}

export interface EducationItem {
    period: string;
    degree: string;
    institution: string;
    logo?: string;
}

export interface ContactData {
    phone: string;
    email: string;
    linkedin: string;
}
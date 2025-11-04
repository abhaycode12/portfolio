
import React from 'react';
import { LinkedInIcon, MailIcon } from './icons/ContactIcons';
import { ContactData } from '../types';

interface SidebarProps {
    data: ContactData;
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {

    const socialLinks = [
        { href: data.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
        { href: `mailto:${data.email}`, icon: MailIcon, label: "Email" },
    ];

    return (
        <div className="hidden lg:flex flex-col fixed left-8 bottom-0 items-center z-10">
            <ul className="flex flex-col items-center space-y-4">
                {socialLinks.map((link, index) => (
                    <li key={index}>
                        <a 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={link.label}
                            className="group block"
                        >
                            <link.icon className="w-6 h-6 text-slate-400 group-hover:text-teal-400 transition-colors duration-200 transform group-hover:-translate-y-1" />
                        </a>
                    </li>
                ))}
            </ul>
            <div className="w-px h-24 bg-slate-600 mt-6"></div>
        </div>
    );
};

export default Sidebar;

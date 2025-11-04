import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 80; // Approximate height of the sticky header + some margin
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        if (onClick) {
            onClick(); // This is used to close the mobile menu
        }
    };
    
    return (
        <a href={href} onClick={handleNavClick} className="block md:inline-block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-200">
            {children}
        </a>
    );
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#resume', label: 'Resume' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className="bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold text-teal-600 dark:text-teal-500">
                           Abhay Kumar Gupta
                        </a>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-2">
                        {navItems.map(item => <NavLink key={item.href} href={item.href}>{item.label}</NavLink>)}
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                    <div className="md:hidden flex items-center">
                         <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b border-slate-200 dark:border-slate-800">
                         {navItems.map(item => <NavLink key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</NavLink>)}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
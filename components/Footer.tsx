import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-center py-8 mt-12 border-t border-[var(--border-color)]">
            <p className="text-sm text-[var(--text-secondary)]">
                &copy; {currentYear} Abhay Kumar Gupta. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;

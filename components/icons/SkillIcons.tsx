import React from 'react';

// Generic Icon Props
type IconProps = React.SVGProps<SVGSVGElement>;

export const PhpIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M78.5 70.364c0 10.908-10.22 19.748-22.826 19.748-12.607 0-22.826-8.84-22.826-19.748 0-10.91 10.219-19.748 22.826-19.748 12.606 0 22.826 8.838 22.826 19.748z" fill="#777BB4"/>
        <text x="40" y="80" fontFamily="Arial, sans-serif" fontSize="30" fill="white" fontWeight="bold">PHP</text>
    </svg>
);

export const WordPressIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.91 14.12l-2.09-6.25-3.83 6.02-1.92-2.95-3.07 4.95c-1.9-1.29-3.1-3.45-3.1-5.89 0-3.97 3.23-7.2 7.2-7.2s7.2 3.23 7.2 7.2c0 1.5-.47 2.89-1.28 4.05zM5.31 9.95l1.89 5.86 2.09-6.32-2.12-.03c-.9 0-1.7.4-2.26 1.07-.37-.5-.4-1.18-.4-1.58z"/>
    </svg>
);

export const HtmlIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M1.135 2.223l1.72 19.554 8.145 2.223 8.145-2.223 1.72-19.554-19.73 0zm16.931 8.85l-6.578 1.802-6.551-1.802.164-1.859 12.799 0 .166-1.859-12.467 0 .332-3.718 11.637 0 .166-1.859-13.86 0 .616 6.942 6.845 1.884 6.818-1.884.42-4.717h-3.418l-.139 1.564-3.261.002-.001-.002-3.261-.002-.277-3.128h10.662l-.332 3.718z" fillRule="nonzero" fill="#E44D26"/></svg>
);

export const CssIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M1.135 2.223l1.72 19.554 8.145 2.223 8.145-2.223 1.72-19.554-19.73 0zm16.931 8.85l-.332 3.718-6.578 1.802-6.551-1.802.164-1.859h3.26l3.127.854.001.001 3.127-.855.222-2.484-12.799 0 .166-1.859 12.467 0-.164-1.859-11.637 0 .166-1.859h11.969l-.332 3.718z" fillRule="nonzero" fill="#1572B6"/></svg>
);

export const JavaScriptIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="#F0DB4F" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.22 14.88h-2.44v-5.18c0-.62.03-1.4.08-2.32l.06-.9H9.4v8.4h-2.1v-9.3h3.58l.22.68c.28-.48.6-.84 1.04-1.08s.96-.36 1.54-.36c.64 0 1.2.1 1.68.32s.88.54 1.2.96.56 1 .72 1.68.24 1.44.24 2.28v5.12h-2.12V11.1c0-.6-.02-1.14-.06-1.62s-.1-.9-.18-1.26-.2-.66-.36-.9-.38-.42-.64-.54-.6-.18-1-.18c-.46 0-.86.1-1.2.32s-.6.54-.78.96-.3.92-.36 1.5v7.32z"/>
    </svg>
);

export const JQueryIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="#0769AD" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 3h16v2H4zm0 3h2v12H4zm3 0h2v12H7zm3 0h2v12h-2zm3 0h2v12h-2zm3 0h2v12h-2zm3 0h2v12h-2zm-3 15h-10v2h10z" />
    </svg>
);

export const MySqlIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.08V18H9.5v-2.09c-1.8-.6-3-2.31-3-4.41 0-2.5 2.01-4.5 4.5-4.5s4.5 2 4.5 4.5c0 2.1-1.2 3.81-3 4.41V14.5c1.1-.35 2-1.34 2-2.5 0-1.38-1.12-2.5-2.5-2.5S8.5 10.62 8.5 12c0 1.16.9 2.15 2 2.5v1.58z" fill="#00758F" />
        <path d="M11 7.09V9.5c-1.1-.35-2-1.34-2-2.5 0-.17.03-.33.05-.5.58-.9 1.59-1.5 2.75-1.5.3 0 .58.05.85.13-1-.2-2.11.15-2.85.96z" fill="#F29111" />
    </svg>
);

export const BootstrapIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="#7952B3" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5.18 13.36h-3.64v-1.72h1.56c1.33 0 1.95-.57 1.95-1.52 0-.87-.53-1.36-1.52-1.44v-.04c.83-.12 1.34-.61 1.34-1.4 0-.8-.58-1.36-1.68-1.36H8.18v7.48H6.5v-9h4.14c1.47 0 2.45.74 2.45 2.1 0 1.05-.63 1.72-1.56 1.96v.04c1.2.16 1.96.93 1.96 2.24 0 1.5-.98 2.4-2.73 2.4z"/>
    </svg>
);

export const CakePhpIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="#D33C43" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-3.12-.3-5.5-2.81-5.5-5.93 0-2.62 1.7-4.85 4-5.65v1.62c-1.38.72-2.4 2.06-2.4 3.63 0 2.21 1.79 4 4 4v2.33zm6.5-5.93c0 3.12-2.38 5.63-5.5 5.93V10c2.21 0 4-1.79 4-4 0-1.57-1.02-2.91-2.4-3.63v-1.62c2.3.8 4 3.03 4 5.65z"/>
    </svg>
);

export const LaravelIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="#F05340" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22.9 8.2l-1.3-4.8L18.1 2H5.9l-3.5 1.4-1.1 4.8.7 4.4L.3 19.5l3.5 2.1L6 22h12l2.2-.4 3.5-2.1-.8-4.7.9-4.3zM12 4.1l1.5 5.2h-3L12 4.1zm-3 5.2h1.5l-1.5 5.2L7.5 12h1.5zm3 0h3l-1.5 5.2L12 14.5v-5.2zm3 0h1.5l-1.5 5.2-1.5-5.2h1.5zM7.5 4.1H9l-1.5 5.2H6l1.5-5.2zm6 0h1.5l1.5 5.2h-1.5L15 4.1h-1.5zm-3 15.8l-1.5-5.2h3l-1.5 5.2zm-3 0l1.5-5.2H6l-1.5 5.2h3zm6 0l1.5-5.2h-3l1.5 5.2z"/>
    </svg>
);

export const CodeIgniterIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="#DD4814" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.13 15.9c-.31.11-.63.16-.95.16-1.2 0-2.17-.79-2.17-2.22v-5.4h-1.6v-1.8h1.6v-2.34c0-1.29.62-2.44 2.3-2.44h1.7v1.8h-1.1c-.48 0-.7.24-.7.68v2.3h1.8l-.16 1.8h-1.64v5.4c0 .54.17.84.58.84.28 0 .54-.08.78-.2l.2 1.54z"/>
    </svg>
);

export const ApiIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
    </svg>
);

export const WooCommerceIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="#96588A" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M21.9 6.9l-2.4-4.1c-.5-.8-1.5-1.1-2.3-.6l-6.1 3.5-6.1-3.5c-.8-.5-1.8-.2-2.3.6L.1 6.9c-.5.8-.2 1.8.6 2.3l8.2 4.7v7.2c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-7.2l8.2-4.7c.8-.5 1.1-1.5.6-2.3zm-10.3 5.9L3.4 7.6l1.2-2 6 3.5 6-3.5 1.2 2-8.2 5.2z"/>
    </svg>
);

export const PerformanceIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-6-3.5c.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2c0-.66.54-1.2 1.2-1.2zm12 0c.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2c0-.66.54-1.2 1.2-1.2zM12 6.5c-1.93 0-3.5 1.57-3.5 3.5 0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2c0-.61.49-1.1 1.1-1.1s1.1.49 1.1 1.1c0 .66.54 1.2 1.2 1.2s1.2-.54 1.2-1.2c0-1.93-1.57-3.5-3.5-3.5z"/>
    </svg>
);

export const SecurityIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    </svg>
);

export const ResponsiveIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
    </svg>
);

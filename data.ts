
import {
    HeroData,
    AboutData,
    ExperienceItem,
    ProjectItem,
    EducationItem,
    ContactData,
    SkillItem
} from './types';
import { 
    PhpIcon, 
    WordPressIcon, 
    HtmlIcon, 
    CssIcon, 
    JavaScriptIcon, 
    JQueryIcon, 
    MySqlIcon, 
    BootstrapIcon, 
    CakePhpIcon, 
    ApiIcon, 
    PerformanceIcon, 
    SecurityIcon, 
    CodeIgniterIcon, 
    LaravelIcon,
    WooCommerceIcon,
    ResponsiveIcon
} from './components/icons/SkillIcons';

export const heroData: HeroData = {
    name: 'Abhay Kumar Gupta',
    roles: ['Web Developer', 'WordPress Expert', 'Problem Solver'],
    description: "I am a dedicated and skilled web developer, bringing a wealth of knowledge and experience in web design and development. With a passion for creating responsive, easy-to-use applications and a knack for problem-solving, I'm a quick learner ready for the next challenge.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000',
    resumeUrl: '/Abhay_Kumar_Gupta_Resume.pdf' // Link to the resume PDF
};

export const aboutData: AboutData = {
    profile: "My Name is ABHAY KUMAR GUPTA. I am a dedicated and skilled web developer, bringing a wealth of knowledge and experience of web design and development. With a passion for creating responsive and easy to use, problem solver, Quick learner experiences.",
    services: [
        {
            title: 'PHP & WordPress Development',
            description: 'Specializing in custom WordPress themes, plugins, and full-stack PHP applications using frameworks like CakePHP and CodeIgniter.'
        },
        {
            title: 'Frontend Development',
            description: 'Creating responsive user interfaces with HTML, CSS, JavaScript, and jQuery to deliver seamless user experiences.'
        },
        {
            title: 'API & eCommerce Integration',
            description: 'Experienced in REST API and Woo Commerce integration to connect and extend web application functionalities.'
        }
    ]
};

export const experienceData: ExperienceItem[] = [
    {
        period: 'October 2023 - February 2024',
        role: 'Web Developer',
        company: 'Sparqfly Aviation Pvt Ltd, Noida',
        description: 'Contributed to various web projects utilizing HTML, CSS, JavaScript, jQuery, WordPress, PHP, and the CodeIgniter Framework.',
        tasks: [
            'Executed website performance optimization strategies.',
            'Integrated REST APIs to enhance functionality.',
            'Diagnosed and resolved issues to ensure site stability.',
            'Implemented new features based on project requirements.'
        ]
    },
    {
        period: 'October 2021 - September 2023',
        role: 'Web Developer',
        company: 'MrigSightMedia, Noida',
        description: 'Worked on a multitude of projects involving HTML, CSS, JavaScript, jQuery, WordPress, and PHP.',
        tasks: [
            'Improved website performance and speed.',
            'Managed REST API and Woo Commerce integrations.',
            'Actively participated in problem-solving and debugging.',
            'Developed and included features in websites as per requirement.'
        ]
    }
];

export const projectsData: ProjectItem[] = [
    {
        name: 'Cleo Travel',
        technology: 'WordPress, MySQL, WP Bakery',
        role: 'Travel Website (E-commerce Style)',
        details: [
            'Maintained and updated travel packages.',
            'Ensured customers could securely buy travel packages.',
            'Managed client requirements and feedback.'
        ],
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
        name: 'GlobalTravelPlanners',
        technology: 'WordPress, MySQL, WP Bakery',
        role: 'Travel Website (E-commerce Style)',
        details: [
            'Maintained travel package information.',
            'Provided a secure platform for travel package purchases.',
            'Offered a point of contact for customer queries.',
            'Developed an admin panel for website maintenance.'
        ],
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
        name: 'Vortex',
        technology: 'WordPress, MySQL',
        role: 'E-commerce Website',
        details: [
            'Managed customer orders and developed a product rental option.',
            'Added new products and managed billing processes.',
            'Oversaw bulk orders with quality checks and optimized website performance.',
            'Debugged the website and resolved errors.'
        ],
        image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
        name: 'Plot CRM (CMS)',
        technology: 'HTML, PHP, Bootstrap, MySQL',
        role: 'Manage plots data & content OR Generate report',
        details: [
            'Developed new features as per requirements.',
            'Managed website content and plots data.',
            'Handled plot booking, management, and data display.',
            'Managed data through the MySQL database and resolved CMS errors.'
        ],
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
    },
    {
        name: 'Makeup Que',
        technology: 'HTML, PHP, Bootstrap, Laravel 9',
        role: 'Appointment Booking CMS',
        details: [
            'Developed features for booking makeup appointments.',
            'Managed orders and bookings with specific time slots.',
            'Enabled website to handle various makeup products.',
            'Provided an admin panel to maintain website products and orders.'
        ],
        image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    },
    {
        name: 'AMECEE',
        technology: 'HTML, PHP, Bootstrap, CodeIgniter',
        role: 'Student registration & admit card generation',
        details: [
            'Developed new features as per the requirement.',
            'Managed content and student data.',
            'Handled registration, data management, and display.',
            'Managed data through MySQL database and debugged CMS errors.'
        ],
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
];

export const educationData: EducationItem[] = [
    {
        period: '2016 - 2019',
        degree: 'BCA (Bachelor of Computer Applications)',
        institution: 'K.C.M.T, Bareilly (affiliated to M.J.P.Rohilkhand University)'
    },
    {
        period: '2016',
        degree: '12th Grade',
        institution: 'K. S. Inter College, Gola (Kheri)'
    },
    {
        period: '2014',
        degree: '10th Grade',
        institution: 'L.B.S. Inter College, Mailani (Kheri)'
    }
];

export const skillsData: SkillItem[] = [
    { name: 'PHP', level: 95, icon: PhpIcon },
    { name: 'WordPress', level: 95, icon: WordPressIcon },
    { name: 'HTML5', level: 98, icon: HtmlIcon },
    { name: 'CSS3', level: 98, icon: CssIcon },
    { name: 'JavaScript', level: 90, icon: JavaScriptIcon },
    { name: 'jQuery', level: 90, icon: JQueryIcon },
    { name: 'MySQL', level: 85, icon: MySqlIcon },
    { name: 'Bootstrap', level: 80, icon: BootstrapIcon },
    { name: 'CakePHP', level: 80, icon: CakePhpIcon },
    { name: 'Laravel', level: 75, icon: LaravelIcon },
    { name: 'CodeIgniter', level: 75, icon: CodeIgniterIcon },
    { name: 'REST API', level: 90, icon: ApiIcon },
    { name: 'WooCommerce', level: 85, icon: WooCommerceIcon },
    { name: 'Performance Optimization', level: 85, icon: PerformanceIcon },
    { name: 'WordPress Security', level: 80, icon: SecurityIcon },
    { name: 'Responsive Design', level: 98, icon: ResponsiveIcon },
];

export const contactData: ContactData = {
    phone: '7351658446',
    email: 'abhaycode12@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abhay-kumar-gupta-webdev/' // Assuming a URL, resume had icon only
};

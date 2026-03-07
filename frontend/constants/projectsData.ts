export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
    role: string;
    tools: string[];
    techStack: string[];
    images: string[];
    category: "Mobile App" | "Web App";
    links: {
        android?: string;
        ios?: string;
        github?: string;
        web?: string;
    };
}

export const projects: Project[] = [
    {
        id: "invoice-me",
        title: "Invoice Me",
        category: "Mobile App",
        description: "A professional application to generate Invoices and Estimates in PDF format using React Native.",
        fullDescription: "A professional application to generate Invoices and Estimates in PDF format using React Native for Cross Platform (Android & IOS) for small-scale shop/beginners/middle cap entrepreneurs and freelancers to create, manage and track their billing and Invoice.",
        features: [
            "Generate Invoices and Estimates Professionally.",
            "Option to Chose different Templates.",
            "Add Clients and Items.",
            "Add, Edit and Delete Invoices and Estimates.",
            "Local Notifications.",
            "Automatic Calculations of Totals and Taxes.",
            "View History of Invoices and Estimates.",
            "Download and Share Invoices and Estimates PDF Via Emails and WhatsApp.",
            "Apply Advance Filters For Invoices and Estimates.",
            "Records and Manage Expenses Manually or automatically by scanning receipts.",
            "User Freindly UI.",
            "Cross Platform (Android and IOS)."
        ],
        role: "Lead Developer",
        tools: ["React Native", "Redux", "Node.js", "PDF Custom Generator", "Local Notifications", "Advanced Filters"],
        techStack: ["React Native", "JavaScript", "Redux", "Context API"],
        images: [
            "/assets/images/mobileapp/invoiceme/1.png",
            "/assets/images/mobileapp/invoiceme/2.png",
            "/assets/images/mobileapp/invoiceme/3.png",
            "/assets/images/mobileapp/invoiceme/4.png",
            "/assets/images/mobileapp/invoiceme/5.png"
        ],
        links: {
            android: "https://play.google.com/store/apps/details?id=com.invoice.me&hl=es_419"
        }
    },
    {
        id: "baby-care",
        title: "Baby Care App",
        category: "Mobile App",
        description: "Track and monitor your baby's health and developmental milestones effortlessly.",
        fullDescription: "Created a user-friendly baby app using React Native in a team empowering parents to effortlessly track and monitor their baby's health and developmental milestones. Implemented intuitive features for easy navigation and data input, fostering a seamless parenting experience. Designed with care to provide invaluable support to parents on their child's journey to growth and well-being.",
        features: [
            "Track health metrics",
            "Monitor developmental milestones",
            "Intuitive navigation",
            "Data input for growth tracking",
            "Parental support features"
        ],
        role: "Full Stack Developer",
        tools: ["React Native", "Firebase", "State Management"],
        techStack: ["React Native", "Firebase", "JavaScript"],
        images: ["/assets/images/mobileapp/baby/home.jpeg"],
        links: {
            android: "https://play.google.com/store/apps/details?id=com.baby_care"
        }
    },
    {
        id: "plumm",
        title: "Plumm",
        category: "Mobile App",
        description: "Workplace mental health platform giving employees access to always-on support.",
        fullDescription: "Plumm's workplace mental health platform gives employees access to always-on support from self-care soundscapes and meditations through to video coaching and therapy.",
        features: [
            "Self-care soundscapes",
            "Meditations",
            "Video coaching",
            "Therapy access",
            "Always-on support"
        ],
        role: "React Native Developer",
        tools: ["React Native", "Video Streaming", "Authentication"],
        techStack: ["React Native", "Node.js", "Express.js"],
        images: ["/assets/images/mobileapp/plumm/home.jpeg"],
        links: {
            ios: "https://apps.apple.com/in/app/plumm/id1604618955",
            android: "https://play.google.com/store/apps/details?id=com.plumm"
        }
    },
    {
        id: "women-safety",
        title: "Women Safety App",
        category: "Mobile App",
        description: "Empowers women to enhance their personal safety and security with emergency features.",
        fullDescription: "I've created a women's safety app that empowers Women to enhance their personal safety and security. With the ability to add emergency contact numbers, edit them as needed, and initiate calls or send text messages in times of distress, this app is a reliable companion for everyday safety and critical emergencies. It offers peace of mind and quick access to help when it's needed most.",
        features: [
            "Add/Edit emergency contacts",
            "One-tap emergency calls",
            "Instant SOS text messages",
            "Real-time location sharing",
            "Safety tips and resources"
        ],
        role: "Lead Developer",
        tools: ["React Native", "SMS Integration", "GPS Services"],
        techStack: ["React Native", "JavaScript", "Native Modules"],
        images: [
            "/assets/images/mobileapp/womensafety/1.jpeg",
            "/assets/images/mobileapp/womensafety/2.jpeg",
            "/assets/images/mobileapp/womensafety/3.jpeg"
        ],
        links: {
            github: "https://github.com/hussnaincheema/Women-Safety-App-React-Native"
        }
    },
    {
        id: "admin-dashboard",
        title: "Admin Dashboard",
        category: "Web App",
        description: "Fully responsive dashboard using React JS and Tailwind CSS for streamlined management.",
        fullDescription: "This Admin Dashboard is a fully responsive dashboard using React JS and Tailwind CSS, crafted to streamline management processes. The dashboard features an intuitive overview page, along with dedicated sections for product details, user lists, sales, orders, analytics, and settings. Each page is designed to provide clear data insights and enable efficient navigation. Built with a mobile-first approach, the dashboard adapts seamlessly across all device sizes, ensuring easy access and usability for admins on the go.",
        features: [
            "Overview dashboard",
            "Product management",
            "User lists",
            "Sales analytics",
            "Order tracking",
            "Settings and profile",
            "Fully responsive"
        ],
        role: "Full Stack Developer",
        tools: ["React.js", "Tailwind CSS", "Recharts", "Lucide Icons"],
        techStack: ["React JS", "Tailwind CSS", "JavaScript"],
        images: [
            "/assets/images/webapp/dashboard/1.jpeg",
            "/assets/images/webapp/dashboard/2.jpeg",
            "/assets/images/webapp/dashboard/3.jpeg",
            "/assets/images/webapp/dashboard/4.jpeg",
            "/assets/images/webapp/dashboard/5.jpeg",
            "/assets/images/webapp/dashboard/6.jpeg",
            "/assets/images/webapp/dashboard/7.jpeg"
        ],
        links: {
            github: "https://github.com/hussnaincheema/Admin-Dashboard-Reactjs-Tailwind"
        }
    },
    {
        id: "ecommerce-app",
        title: "E-commerce App",
        category: "Web App",
        description: "Modern, fully responsive web application with Redux state management.",
        fullDescription: "This E-commerce App is a modern, fully responsive web application designed to provide users with a streamlined online shopping experience. Built with the latest web technologies, including Redux for state management, it features a clean and intuitive interface, allowing users to browse, search, and order products seamlessly. The app incorporates a simple user flow for adding items to the cart, specifying delivery details, and confirming orders, with Redux ensuring efficient management of application-wide states such as cart data and user information.",
        features: [
            "Product browsing and search",
            "Cart management",
            "Delivery details flow",
            "Order confirmation",
            "User authentication",
            "State management with Redux"
        ],
        role: "Full Stack Developer",
        tools: ["React.js", "Redux", "Tailwind CSS", "Axios"],
        techStack: ["React.js", "Redux", "Tailwind CSS", "JavaScript"],
        images: [
            "/assets/images/webapp/eshop/1.jpeg",
            "/assets/images/webapp/eshop/2.jpeg",
            "/assets/images/webapp/eshop/3.jpeg",
            "/assets/images/webapp/eshop/4.jpeg"
        ],
        links: {
            github: "https://github.com/hussnaincheema/Ecommerce-App-Reactjs-Tailwind"
        }
    }
];

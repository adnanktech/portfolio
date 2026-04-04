//src/config/site.ts

export const siteConfig = {
    //Basic Identity
    name: "Adnan Khan",
    username: "adnank",
    description: "Fullstack Developer specializing in react and Next js",
    url: "https://adnanktech.com",
    ogImage: "https://adnanktech.com",// Used for social media previews, save image in public folder

    // Navigation Links (Used in Header & Footer)
    navItems:[
        {label: "Blogs", href: "/"},
        {label: "Projects", href: "#projects"},
        {label: "Home", href: "#experience"},
        {label: "About", href: "#contact"},
        {label: "Contact", href: "#contact"},
    ],

    // Social Media LInks
    links: {
        github: "https://github.com/adnanktech",
        twitter: "https://twitter.com/adnanktech",
        linkedin: "https://linkedin.com/adnanktech"
    },

    //SEO & Metadata
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Typescript",
        "Portfolio",
        "Software Engineer",
    ],
} as const; //to make the configuration immutable

export type SiteConfig = typeof siteConfig;
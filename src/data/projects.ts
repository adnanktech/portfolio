import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: "Portfolio Theme",
        description: "A reusable Next.js portfolio for developers",
        image: "/projects/portfolio.png",//image should be in public folder
        link: "https://adnanktech.com/project",
        github: "https://github.com/adnanktech",//optional
        tech: ["Next.js", "Tailwind", "TypeScript"]
    },
    // copy-paste this block to add more
];
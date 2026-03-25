//src/types/index.ts

export interface Project {
    title: string
    description: string
    image: string
    link: string
    github?: string
    tech: string[]
}


export interface Experience {
    company: string
    role: string
    duration: string
    description: string[]
}
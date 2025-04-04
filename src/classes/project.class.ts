import { githubPortfolio, SocialLink } from "./social-link.class";

export class Project {
    name: string;
    description: string;
    image: string;
    technologies: Array<string>;
    links: Array<SocialLink>;

    constructor(name: string, description: string, image: string, technologies: Array<string>, links: Array<SocialLink>) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.technologies = technologies;
        this.links = links;
    }
}

export const portfolioProject: Project = {
    name: 'portfolio',
    description: 'Personal portfolio built with Angular. It is designed to present my professional experience, personal projects, and contact details in a modern and interactive way. The portfolio provides potential employers and collaborators with an overview of my skills and accomplishments.',
    image: "/assets/media/imgs/portfolio.png",
    technologies: ['Angular 19.2.4', 'Animate On Scroll Library (AOS)'],
    links: [githubPortfolio]
};
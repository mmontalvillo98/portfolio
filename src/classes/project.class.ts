import { SocialLink } from "./social-link.class";

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
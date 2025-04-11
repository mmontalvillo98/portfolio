import { SocialLink } from "./social-link.class";

export class Project {
    name: string;
    description: string;
    images: Array<string>;
    technologies: Array<string>;
    links: Array<SocialLink>;

    constructor(name: string, description: string, images: Array<string>, technologies: Array<string>, links: Array<SocialLink>) {
        this.name = name;
        this.description = description;
        this.images = images;
        this.technologies = technologies;
        this.links = links;
    }
}
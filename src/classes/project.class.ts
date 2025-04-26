import { Link } from "./link.class";

export class Project {
    name: string;
    description: string;
    images: Array<Link>;
    technologies: Array<string>;
    links: Array<Link>;

    constructor(name: string, description: string, images: Array<Link>, technologies: Array<string>, links: Array<Link>) {
        this.name = name;
        this.description = description;
        this.images = images;
        this.technologies = technologies;
        this.links = links;
    }
}
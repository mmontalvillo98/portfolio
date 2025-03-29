export class Project {
    name: string;
    description: string;
    technologies: Array<string>;

    constructor(name: string, description: string, technologies: Array<string>) {
        this.name = name;
        this.description = description;
        this.technologies = technologies;
    }
}
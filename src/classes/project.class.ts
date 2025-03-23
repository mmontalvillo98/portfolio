export class Project {
    name: string;
    description: string;
    technologies: string[];

    constructor(name: string, description: string, technologies: string[]) {
        this.name = name;
        this.description = description;
        this.technologies = technologies;
    }
}
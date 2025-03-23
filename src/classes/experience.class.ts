import { Project } from "./project.class";

export class Experience {
    company: string;
    position: string;
    projects: Project[];
    startDate: string;
    endDate?: string;

    constructor(company: string, position: string, projects: Project[], startDate: string, endDate?: string) {
        this.company = company;
        this.position = position;
        this.projects = projects;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
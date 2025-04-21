import { Company } from "./company.class";

export class Experience {
    company: Company;
    position: string;
    description: string;
    startDate: Date;
    endDate: Date;
    technologies: Array<string>;

    constructor(company: Company, position: string, description: string, startDate: Date, endDate: Date, technologies: Array<string>) {
        this.company = company;
        this.position = position;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.technologies = technologies;
    }
}
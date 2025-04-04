import { Company, getronics } from "./company.class";

export class Experience {
    company: Company;
    position: string;
    startDate: Date;
    endDate: Date;
    technologies: Array<string>;

    constructor(company: Company, position: string, startDate: Date, endDate: Date, technologies: Array<string>) {
        this.company = company;
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
        this.technologies = technologies;
    }
}

export const getronicsExperience: Experience = {
    company: getronics,
    position: 'software developer',
    startDate: new Date("2022-03-19"),
    endDate: new Date(),
    technologies: ['SpringBoot', 'SpringBatch', 'OpenApi', 'Angular', 'OracleSQL']
};
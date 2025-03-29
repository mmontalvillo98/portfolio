export class Experience {
    company: string;
    position: string;
    startDate: Date;
    endDate: Date;
    technologies: Array<string>;

    constructor(company: string, position: string, startDate: Date, endDate: Date, technologies: Array<string>) {
        this.company = company;
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
        this.technologies = technologies;
    }
}
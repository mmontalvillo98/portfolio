import { Experience } from "../classes/experience.class";
import { Portfolio } from "../classes/portfolio.class";
import { Project } from "../classes/project.class";
import { User } from "../classes/user.class";

const user: User = {
    name: 'Mario',
    firstName: 'Montalvillo',
    email: 'm.montalvillo98@gmail.com',
    roles: ['Software Developer'],
    socialLinks: [
        { name: 'github', url: 'https://github.com/mmontalvillo98' },
        { name: 'linkedin', url: 'https://es.linkedin.com/in/mario-montalvillo-herrezuelo-505b6b242' }
    ]
};

const getronicsExperience: Experience = {
    company: 'getronics',
    position: 'software developer',
    startDate: new Date("2022-03-19"),
    endDate: new Date(),
    technologies: ['SpringBoot', 'SpringBatch', 'OpenApi', 'Angular', 'OracleSQL']
};

const experience: Array<Experience> = [getronicsExperience];

const portfolioProject: Project = {
    name: 'portfolio',
    description: '',
    technologies: ['Angular 19.2.4', 'Animate On Scroll Library (AOS)']
};

const projects: Array<Project> = [portfolioProject];

const portfolio: Portfolio = { user, experience, projects };

export const environment = { portfolio };
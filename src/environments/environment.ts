import { Experience } from "../classes/experience.class";
import { Portfolio } from "../classes/portfolio.class";
import { Project } from "../classes/project.class";
import { User } from "../classes/user.class";

const user: User = {
    name: 'Mario',
    firstName: 'Montalvillo',
    email: 'm.montalvillo98@gmail.com'
};

const stilusProject: Project = {
    name: 'stilus',
    description: '',
    technologies: ['SpringBoot', 'Angular', 'OracleSQL']
};

const intershipExperience: Experience = {
    company: 'getronics',
    position: 'intern',
    projects: [stilusProject],
    startDate: '19/03/2023',
    endDate: '19/11/2023'
};

const getronicsExperience: Experience = {
    company: 'getronics',
    position: 'software developer',
    projects: [stilusProject],
    startDate: '19/09/2023'
};

const experience: Experience[] = [intershipExperience, getronicsExperience];

const portfolioProject: Project = {
    name: 'portfolio',
    description: '',
    technologies: ['Angular 19.2.4', 'Animate On Scroll Library (AOS)']
};

const projects: Project[] = [portfolioProject];

const portfolio: Portfolio = { user, experience, projects };

export const environment = { portfolio };
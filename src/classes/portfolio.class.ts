import { Experience } from "./experience.class";
import { Project } from "./project.class";
import { User } from "./user.class";

export class Portfolio {
    user: User;
    experience: Experience[];
    projects: Project[];

    constructor(user: User, experience: Experience[], projects: Project[]) {
        this.user = user;
        this.experience = experience;
        this.projects = projects;
    }
}
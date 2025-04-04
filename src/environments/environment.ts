import { Experience, getronicsExperience } from "../classes/experience.class";
import { portfolioProject, Project } from "../classes/project.class";
import { user } from "../classes/user.class";

const experience: Array<Experience> = [getronicsExperience];

const projects: Array<Project> = [portfolioProject];

export const environment = { user, experience, projects };
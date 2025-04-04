import { Experience, getronicsExperience } from "../classes/experience.class";
import { portfolio, Project } from "../classes/project.class";
import { user } from "../classes/user.class";

const experience: Array<Experience> = [getronicsExperience];

const projects: Array<Project> = [portfolio];

export const environment = { user, experience, projects };
import { Component } from '@angular/core';
import { Project } from '../../../classes/project.class';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
    selector: 'app-project-section',
    templateUrl: 'project-section.component.html',
    styleUrl: 'project-section.component.scss',
    standalone: true,
    imports: [CommonModule, ProjectCardComponent]
})

export class ProjectSectionComponent {
    projects: Array<Project> = environment.projects;
}
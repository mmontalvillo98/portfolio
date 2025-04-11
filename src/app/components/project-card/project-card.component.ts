import { Component, Input } from '@angular/core';
import { Project } from '../../../classes/project.class';
import { CommonModule } from '@angular/common';
import { TechnologyListComponent } from '../technology-list/technology-list.component';
import { LinkListComponent } from "../link-list/link-list.component";
import { ProjectGalleryComponent } from "../project-gallery/project-gallery.component";

@Component({
    selector: 'app-project-card',
    templateUrl: 'project-card.component.html',
    styleUrl: 'project-card.component.scss',
    standalone: true,
    imports: [CommonModule, TechnologyListComponent, LinkListComponent, ProjectGalleryComponent]
})

export class ProjectCardComponent {
    @Input() project!: Project;
}
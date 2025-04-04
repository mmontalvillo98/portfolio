import { Component, Input } from '@angular/core';
import { Project } from '../../../classes/project.class';
import { CommonModule } from '@angular/common';
import { TechnologyListComponent } from '../technology-list/technology-list.component';
import { SocialLink } from '../../../classes/social-link.class';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-project-card',
    templateUrl: 'project-card.component.html',
    styleUrl: 'project-card.component.scss',
    standalone: true,
    imports: [CommonModule, TechnologyListComponent]
})

export class ProjectCardComponent {
    github?: SocialLink = environment.portfolio.user.socialLinks.find(link => link.name === 'github');
    @Input() project!: Project;
}
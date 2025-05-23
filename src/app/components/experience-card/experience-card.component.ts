import { Component, Input } from '@angular/core';
import { Experience } from '../../../classes/experience.class';
import { CommonModule } from '@angular/common';
import { TechnologyListComponent } from '../technology-list/technology-list.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-experience-card',
    templateUrl: 'experience-card.component.html',
    styleUrl: 'experience-card.component.scss',
    standalone: true,
    imports: [CommonModule, TechnologyListComponent, TranslateModule]
})

export class ExperienceCardComponent {
    @Input() experience!: Experience;
}
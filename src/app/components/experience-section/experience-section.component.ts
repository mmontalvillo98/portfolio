import { Component } from '@angular/core';
import { Experience } from '../../../classes/experience.class';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from "../experience-card/experience-card.component";

@Component({
    selector: 'app-experience-section',
    templateUrl: 'experience-section.component.html',
    styleUrl: 'experience-section.component.scss',
    standalone: true,
    imports: [CommonModule, ExperienceCardComponent]
})

export class ExperienceSectionComponent {
    experience: Array<Experience> = environment.experience;

    separatedExperience(i: number): boolean {
        return this.experience.length <= i + 1 || this.experience[i].startDate.getTime() !== this.experience[i + 1].endDate?.getTime();
    }

}
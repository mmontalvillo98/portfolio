import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-technology-list',
    templateUrl: 'technology-list.component.html',
    styleUrl: 'technology-list.component.scss',
    standalone: true,
    imports: [CommonModule]
})

export class TechnologyListComponent {
    @Input() technologies: Array<string> = [];
}
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
    selector: 'app-technology-list',
    templateUrl: 'technology-list.component.html',
    styleUrl: 'technology-list.component.scss',
    standalone: true,
    imports: [CommonModule, MatChipsModule]
})

export class TechnologyListComponent {
    @Input() technologies: Array<string> = [];
}
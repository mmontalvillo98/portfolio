import { Component, Input } from '@angular/core';
import { Link } from '../../../classes/link.class';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-link-list',
    templateUrl: 'link-list.component.html',
    styleUrl: 'link-list.component.scss',
    standalone: true,
    imports: [CommonModule]
})

export class LinkListComponent {
    @Input() links: Array<Link> = [];
}
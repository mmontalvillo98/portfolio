import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    standalone: true,
    imports: [CommonModule]
})

export class HeaderComponent {
    name: string = environment.user.name;
    firstName: string = environment.user.firstName;
    roles: Array<string> = environment.user.roles;

    constructor(private viewportScroller: ViewportScroller) { }

    scrollToFragment(fragment: string): void {
        this.viewportScroller.scrollToAnchor(fragment);
    }
}
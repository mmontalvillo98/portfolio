import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    standalone: true
})

export class HeaderComponent {
    constructor(private viewportScroller: ViewportScroller) { }

    scrollToFragment(fragment: string): void {
        this.viewportScroller.scrollToAnchor(fragment);
    }
}
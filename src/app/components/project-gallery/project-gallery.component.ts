import { Component, Input } from '@angular/core';
import { Project } from '../../../classes/project.class';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
    selector: 'app-project-gallery',
    templateUrl: 'project-gallery.component.html',
    styleUrl: 'project-gallery.component.scss',
    standalone: true,
    imports: [MatButtonModule, MatGridListModule, MatIconModule]
})

export class ProjectGalleryComponent {
    images: string[] = [];
    @Input() set project(project: Project) {
        this.images = [...project.images];
    }
    isSmallScreen: boolean = true;

    constructor(private breakpointObserver: BreakpointObserver) { }

    ngOnInit(): void {
        this.breakpointObserver
            .observe(['(max-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                this.isSmallScreen = state.matches;
            });
    }

    moveRight() {
        const ultima = this.images.pop();
        if (ultima) {
            this.images.unshift(ultima);
        }
    }

    moveLeft() {
        const primera = this.images.shift();
        if (primera) {
            this.images.push(primera);
        }
    }

    get cols(): 3 | 4 {
        return this.isSmallScreen ? 4 : 3;
    }

}
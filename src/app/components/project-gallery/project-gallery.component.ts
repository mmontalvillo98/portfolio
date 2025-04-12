import { Component, Input } from '@angular/core';
import { Project } from '../../../classes/project.class';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
    selector: 'app-project-gallery',
    templateUrl: 'project-gallery.component.html',
    styleUrl: 'project-gallery.component.scss',
    standalone: true,
    imports: [MatButtonModule, MatDialogModule, MatGridListModule, MatIconModule]
})

export class ProjectGalleryComponent {
    images: string[] = [];
    @Input() set project(project: Project) {
        this.images = [...project.images];
    }
    isSmallScreen: boolean = true;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.breakpointObserver
            .observe(['(max-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                this.isSmallScreen = state.matches;
            });
    }

    moveRight() {
        const first = this.images.shift();
        if (first) {
            this.images.push(first);
        }
    }

    moveLeft() {
        const last = this.images.pop();
        if (last) {
            this.images.unshift(last);
        }
    }

    openImage(imgIndex: number) {
        // Create duplicate of the images starting with the selected one
        let images = [];
        for(let i = 0; i < this.images.length; i++) {
            if (imgIndex > this.images.length - 1) {
                imgIndex = 0;
            }
            images.push(this.images[imgIndex++]);
        }
        // Open the dialog with the images
        this.dialog.open(ImageDialogComponent, {
            data: { images },
        });
    }

    get cols(): 3 | 4 {
        return this.isSmallScreen ? 4 : 3;
    }

}
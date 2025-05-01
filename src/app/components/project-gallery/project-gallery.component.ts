import { Component, Input } from '@angular/core';
import { Project } from '../../../classes/project.class';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { Link } from '../../../classes/link.class';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-project-gallery',
    templateUrl: 'project-gallery.component.html',
    styleUrl: 'project-gallery.component.scss',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatGridListModule, MatIconModule, TranslateModule]
})

export class ProjectGalleryComponent {
    isSmallScreen: boolean = true;
    images: Array<Link> = [];
    projectName: string = '';

    @Input() set project(project: Project) {
        this.projectName = project.name;
        this.images = [...project.images];
    }

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

    next() {
        const first = this.images.shift();
        if (first) {
            this.images.push(first);
        }
    }

    previous() {
        const last = this.images.pop();
        if (last) {
            this.images.unshift(last);
        }
    }

    first(index: number) {
        return index === 0;
    }

    tileSize(index: number) {
        return this.first(index) ? this.images.length - 1 : 1;
    }

    openImage(imgIndex: number) {
        // Create duplicate of the images starting with the selected one
        let images = [];
        for (let i = 0; i < this.images.length; i++) {
            if (imgIndex > this.images.length - 1) {
                imgIndex = 0;
            }
            images.push(this.images[imgIndex++]);
        }
        // Open the dialog with the images
        this.dialog.open(ImageDialogComponent, {
            data: { title: this.projectName, images },
        });
    }

    get cols(): number {
        return this.isSmallScreen ? this.images.length : this.images.length - 1;
    }

}
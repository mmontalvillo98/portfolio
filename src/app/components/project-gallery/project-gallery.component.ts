import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../classes/project.class';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { Image } from '../../../classes/image.class';

@Component({
    selector: 'app-project-gallery',
    templateUrl: 'project-gallery.component.html',
    styleUrl: 'project-gallery.component.scss',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatGridListModule, MatIconModule, TranslateModule]
})

export class ProjectGalleryComponent implements OnInit, AfterViewInit {
    isSmallScreen: boolean = true;
    images: Array<Image> = [];
    projectName: string = '';

    @Input() set project(project: Project) {
        this.projectName = project.name;
        this.images = [...project.images];
    }

    constructor(
        private breakpointObserver: BreakpointObserver,
    ) { }

    ngOnInit(): void {
        this.breakpointObserver
            .observe(['(max-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                this.isSmallScreen = state.matches;
            });
    }

    ngAfterViewInit(): void {
        const lightbox = new PhotoSwipeLightbox({
            gallery: `#${this.projectName}`,
            children: 'a', // Elements within gallery (slides)
            pswpModule: () => import('photoswipe') // setup PhotoSwipe Core dynamic import

        });
        lightbox.init();
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

    get cols(): number {
        return this.isSmallScreen ? this.images.length : this.images.length - 1;
    }

}
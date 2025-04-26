import { CommonModule } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { Link } from '../../../classes/link.class';

@Component({
    templateUrl: 'image-dialog.component.html',
    styleUrl: './image-dialog.component.scss',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatGridListModule, MatIconModule, TranslateModule]
})

export class ImageDialogComponent {
    readonly dialogRef = inject(MatDialogRef<ImageDialogComponent>);
    readonly data = inject<{ title: string, images: Array<Link> }>(MAT_DIALOG_DATA);
    readonly images = model(this.data.images);

    close(): void {
        this.dialogRef.close(this.images());
    }

    next() {
        const first = this.images().shift();
        if (first) {
            this.images().push(first);
        }
    }

    previous() {
        const last = this.images().pop();
        if (last) {
            this.images().unshift(last);
        }
    }

    show(index: number) {
        for (let i = 0; i < index; i++) {
            this.next();
        }
    }

}
import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
    templateUrl: 'image-dialog.component.html',
    styleUrl: './image-dialog.component.scss',
    standalone: true,
    imports: [MatButtonModule, MatDialogModule, MatIconModule]
})

export class ImageDialogComponent {
    readonly dialogRef = inject(MatDialogRef<ImageDialogComponent>);
    readonly data = inject<{ images: Array<string> }>(MAT_DIALOG_DATA);
    readonly images = model(this.data.images);

    close(): void {
        this.dialogRef.close(this.images());
    }

    moveRight() {
        const last = this.images().pop();
        if (last) {
            this.images().unshift(last);
        }
    }

    moveLeft() {
        const first = this.images().shift();
        if (first) {
            this.images().push(first);
        }
    }

}
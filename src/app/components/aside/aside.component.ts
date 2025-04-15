import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-aside',
    templateUrl: 'aside.component.html',
    styleUrl: 'aside.component.scss',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule, TranslateModule],
})

export class AsideComponent {
    languages: Array<string> = ['en', 'es'];
    selectedLanguage: string = 'en';

    constructor(private translate: TranslateService) {
        this.languages = this.translate.getLangs();
        this.selectedLanguage = this.translate.currentLang || 'en';
    }

    onLanguageSelected(language: string) {
        this.translate.use(language);
    }
}
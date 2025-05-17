import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
// @ts-ignore
import AOS from 'aos';
import { FooterComponent } from "./components/footer/footer.component";
import { AsideComponent } from './components/aside/aside.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ProjectSectionComponent } from "./components/project-section/project-section.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [TranslateModule, HeaderComponent, AsideComponent, FooterComponent, ExperienceSectionComponent, ProjectSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    if (this.translate.getBrowserLang() === 'es') {
      this.translate.use('es');
    }
  }

  ngOnInit() {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
  }
}
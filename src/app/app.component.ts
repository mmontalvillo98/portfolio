import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
// @ts-ignore
import AOS from 'aos';
import { FooterComponent } from "./components/footer/footer.component";
import { AsideComponent } from './components/aside/aside.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AsideComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
  }
}
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrl: 'footer.component.scss',
    standalone: true
})

export class FooterComponent {
    email: string = environment.portfolio.user.email;
}
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SocialLink } from '../../../classes/social-link.class';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrl: 'footer.component.scss',
    standalone: true,
    imports: [CommonModule]
})

export class FooterComponent {
    email: string = environment.portfolio.user.email;
    socialLinks: Array<SocialLink> = environment.portfolio.user.socialLinks;
}
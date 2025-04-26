import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Link } from '../../../classes/link.class';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from "../link-list/link-list.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrl: 'footer.component.scss',
    standalone: true,
    imports: [CommonModule, LinkListComponent, TranslateModule]
})

export class FooterComponent {
    email: string = environment.user.email;
    links: Array<Link> = environment.user.socialLinks;
}
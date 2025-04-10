import { SocialLink } from "./social-link.class";

export class User {
    name: string;
    firstName: string;
    email: string;
    roles: Array<string>;
    socialLinks: Array<SocialLink>;
    
    constructor(name: string, firstName: string, email: string, roles: Array<string>, socialLinks: Array<SocialLink>) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.roles = roles;
        this.socialLinks = socialLinks;
    }
}
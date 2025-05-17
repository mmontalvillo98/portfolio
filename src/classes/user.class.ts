import { Link } from "./link.class";

export class User {
    name: string;
    firstName: string;
    email: string;
    roles: Array<string>;
    socialLinks: Array<Link>;
    
    constructor(name: string, firstName: string, email: string, roles: Array<string>, socialLinks: Array<Link>) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.roles = roles;
        this.socialLinks = socialLinks;
    }
}
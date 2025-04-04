export class Company {
    name: string;
    logo: string;
    url: string;

    constructor(name: string, logo: string, url: string) {
        this.name = name;
        this.logo = logo;
        this.url = url;
    }

}

export const getronics: Company = {
    name: 'getronics',
    logo: '/assets/media/imgs/getronics.jpeg',
    url: 'https://www.getronics.com'
};
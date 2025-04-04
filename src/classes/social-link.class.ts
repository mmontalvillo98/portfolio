export class SocialLink {
    name: string;
    url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}

export const github: SocialLink = { name: 'github', url: 'https://github.com/mmontalvillo98' };
export const githubPortfolio: SocialLink = { name: 'github', url: 'https://github.com/mmontalvillo98/portfolio' };
export const linkedin: SocialLink = { name: 'linkedin', url: 'https://es.linkedin.com/in/mario-montalvillo-herrezuelo-505b6b242' };
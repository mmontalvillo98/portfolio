export const environment = {
    user: {
        name: 'Mario',
        firstName: 'Montalvillo',
        email: 'm.montalvillo98@gmail.com',
        roles: ['Software Developer'],
        socialLinks: [
            { name: 'github', url: 'https://github.com/mmontalvillo98' },
            { name: 'linkedin', url: 'https://es.linkedin.com/in/mario-montalvillo-herrezuelo-505b6b242' }
        ]
    },
    experience: [
        {
            company: {
                name: 'getronics',
                logo: '/assets/media/imgs/getronics.jpeg',
                url: 'https://www.getronics.com'
            },
            position: 'software developer',
            startDate: new Date("2022-03-19"),
            endDate: new Date(),
            technologies: ['SpringBoot', 'SpringBatch', 'OpenApi', 'Angular', 'OracleSQL']
        }
    ],
    projects: [
        {
            name: 'portfolio',
            description: 'Personal portfolio built with Angular. It is designed to present my professional experience, personal projects, and contact details in a modern and interactive way. The portfolio provides potential employers and collaborators with an overview of my skills and accomplishments.',
            images: [
                "/assets/media/imgs/portfolio00.png",
                "/assets/media/imgs/portfolio01.png",
                "/assets/media/imgs/portfolio00.png",
                "/assets/media/imgs/portfolio00.png"
            ],
            technologies: ['Angular 19.2.4', 'Animate On Scroll Library (AOS)'],
            links: [
                { name: 'github', url: 'https://github.com/mmontalvillo98/portfolio' }
            ]
        }
    ]
};
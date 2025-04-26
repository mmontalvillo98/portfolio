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
            position: 'Full Stack Developer',
            description: 'e-s-getronics-experience',
            startDate: new Date("2022-03-19"),
            endDate: new Date(),
            technologies: ['Angular', 'Angular Material', 'Jasper Report', 'Java Microservicios', 'Maven', 'OpenAPI', 'OpenAPI Generator', 'Oracle SQL', 'Spring Batch', 'Spring Boot', 'Swagger']
        }
    ],
    projects: [
        {
            name: 'portfolio',
            description: 'p-s-portfolio',
            images: [
                { name: "p-s-image00", url: "/assets/media/imgs/portfolio00.png" },
                { name: "p-s-image01", url: "/assets/media/imgs/portfolio01.png" },
                { name: "p-s-image02", url: "/assets/media/imgs/portfolio02.png" },
                { name: "p-s-image03", url: "/assets/media/imgs/portfolio03.png" },
            ],
            technologies: ['Angular', 'Angular Material', 'Animate On Scroll Library (AOS)', 'Render'],
            links: [
                { name: 'github', url: 'https://github.com/mmontalvillo98/portfolio' }
            ]
        }
    ]
};
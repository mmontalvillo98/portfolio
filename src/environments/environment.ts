export const environment = {
    user: {
        name: 'Mario',
        firstName: 'Montalvillo',
        email: 'm.montalvillo98@gmail.com',
        roles: ['Software Developer'],
        socialLinks: [
            { name: 'fab fa-github', url: 'https://github.com/mmontalvillo98' },
            { name: 'fab fa-linkedin', url: 'https://es.linkedin.com/in/mario-montalvillo-herrezuelo-505b6b242' }
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
                { name: "p-s-portfolio-img-00", url: "/assets/media/imgs/portfolio00.png" },
                { name: "p-s-portfolio-img-01", url: "/assets/media/imgs/portfolio01.png" },
                { name: "p-s-portfolio-img-02", url: "/assets/media/imgs/portfolio02.png" },
                { name: "p-s-portfolio-img-03", url: "/assets/media/imgs/portfolio03.png" },
            ],
            technologies: ['Angular', 'Angular Material', 'Animate On Scroll Library (AOS)', 'Fort Awesome', 'Render'],
            links: [
                { name: 'fab fa-github', url: 'https://github.com/mmontalvillo98/portfolio' }
            ]
        },
        {
            name: 'dayctionary',
            description: 'p-s-dayctionary',
            images: [
                { name: "p-s-dayctionary-img-00", url: "/assets/media/imgs/dayctionary00.png" },
                { name: "p-s-dayctionary-img-01", url: "/assets/media/imgs/dayctionary01.png" },
                { name: "p-s-dayctionary-img-02", url: "/assets/media/imgs/dayctionary02.png" },
                { name: "p-s-dayctionary-img-03", url: "/assets/media/imgs/dayctionary03.png" },
            ],
            technologies: ['Angular', 'Angular Material', 'AnimationsCSS', 'Compodoc', 'JWT', 'Mailo', 'MongoDB', 'Spring Boot', 'SweetAlert2', 'Thymeleaf'],
            links: [
                { name: 'fa fa-file', url: '/assets/media/documents/dayctionary.pdf' }
            ]
        }
    ]
};
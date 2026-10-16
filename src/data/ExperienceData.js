
import Atiyyah1 from '../assets/experience_images/Atiyyah 1.png'
import RoyzImage1 from '../assets/project_images/Royz Rental 1.png'
import SimplySENImage1 from '../assets/project_images/SEN Tuition 1.png'
import VirtualE from '../assets/experience_images/virtuale_sem_logo.jpeg'
// Current Threepipe Reply site logo: https://threepipereply.com/
import ThreepipeReplyLogo from '../assets/experience_images/threepipe-reply-official.svg'
// Official Waracle site mark: https://waracle.com/safari-pinned-tab.svg?v=221122
import WaracleMark from '../assets/experience_images/waracle-official-mark.svg'

export const ExperienceData = [
    {
        company: 'Waracle',
        position: 'Software Engineer',
        technologies: 'React Native, TypeScript, Expo, accessibility and performance',
        link: 'https://waracle.com/',
        startMonth: '2026',
        endMonth: 'CURRENT',
        logoSrc: WaracleMark,
        bulletPoints: [
            'Helped a financial technology client complete its Alpha1 mobile milestone, delivering React Native features across navigation, account management and News. Worked from design and API contracts through implementation, review and device validation.',
            'Built reusable and accessible mobile foundations that support consistent experiences across screens. Five shared UI capabilities were merged for Alpha1, including navigation, form controls and empty states.',
            'Improved the reliability of core journeys by handling offline and authentication failures, strengthening profile updates, and raising integration risks with backend engineers during development.',
            'Measured and improved News feed performance. In controlled Android tests with a 240-article feed, median sampled peak memory was 27% lower during scrolling and 15% lower during pagination; also reduced unnecessary renders and overlapping requests.',
            'Contributed to engineering quality beyond assigned features through detailed peer reviews and a shared pull-request guide approved by eight colleagues.'
        ],
        media: []
    },
    {
        company: 'VirtualE',
        position: 'Frontend Developer',
        technologies: 'React JS, Tailwind CSS, MongoDB',
        link: 'https://www.linkedin.com/company/virtuale-sem/',
        startMonth: 'NOV 2023',
        endMonth: 'CURRENT',
        logoSrc: VirtualE,
        bulletPoints: [
            'Led the front-end development of a full admin onboarding system in one week, collaborating with backend engineers and owning the interface architecture. Built state management, editable and sortable tables, forms and API integration, giving non-technical staff a way to manage company records and accelerating customer onboarding by several weeks.',
            'Designed and integrated a notification system and Pomodoro timer with the backend team, creating timely feedback and productivity tools. Project reporting recorded a 24% increase in user engagement following these features.',
            'Worked with product colleagues to turn user research and business requirements into intuitive features, keeping product decisions aligned with what customers needed.',
            'Modernised and refactored legacy React code while integrating new features into the existing platform. Improved maintainability and scalability through reusable components and performance tuning; earlier project reporting recorded a 30% improvement in load times.'
        ],
        media: [
        ]
    },
    {
        company: 'Freelance',
        position: 'Developer',
        technologies: 'Multiple',
        link: '',
        startMonth: 'OCT 2022',
        endMonth: 'NOV 2023',
        logoSrc: 'https://cdn.dribbble.com/userupload/22808646/file/original-cd940b45bbed325d172547e4181e59b2.jpg',
        bulletPoints: [
            'Delivered client projects across car rental, education platforms, mobile applications and ecommerce, taking them from initial planning and design through deployment and post-launch support.',
            'Built responsive, accessible and user-friendly interfaces across devices, with attention to speed, search visibility and a consistent experience.',
            'Applied modular, component-based architecture and maintainable coding practices to keep projects scalable. Integrated third-party services and APIs including OAuth and Clerk authentication, relational and NoSQL databases, and analytics tools.',
            'Completed a Wix-to-Shopify store migration within two weeks while preserving existing orders and service continuity.',
            'Examples of this client work include Simply SEN, Royz Rental and Atiyyah; several have more detail in the projects section below.'
        ],
        buttonLinks: [
            {
                title: 'Simply SEN',
                link: 'https://www.simplysentuition.co.uk/'
            },
            {
                title: 'Royz Rental',
                link: 'https://www.royzrental.com/'
            },
            {
                title: 'Atiyyah',
                link: 'https://www.atiyyah.co.uk/'
            },

        ],
        media: [
            {
                type: 'image',
                src: RoyzImage1,
                link: 'https://www.royzrental.com/',
                description: 'Royz Rental Website'
            },
            {
                type: 'image',
                src: SimplySENImage1,
                // link: 'https://www.simplysen.co.uk/',
                description: 'Simply SEN Website'
            },
            {
                type: 'image',
                src: Atiyyah1,
                link: 'https://www.atiyyah.co.uk/',
                description: 'Atiyyah Website'
            },
            // {
            //     type: 'image',
            //     src: LearnfinityImage1,
            //     link: 'https://www.learnfinity.co.uk/',
            //     description: 'Learnfinity Website'
            // },
        ]
    },

    {
        company: 'Threepipe Reply',
        position: 'Developer',
        technologies: 'Python, Pandas, MySQL, React JS',
        link: 'https://threepipereply.com/',
        startMonth: 'OCT 2021',
        endMonth: 'NOV 2022',
        logoSrc: ThreepipeReplyLogo,
        bulletPoints: [
            'Built an Alteryx, Python and SQL automation using source APIs to validate SEO data, cutting recurring manual checks from hours to minutes. Earlier team reporting estimated a 60% productivity improvement, and the approach supported automation work with other internal teams.',
            'Used Python and Pandas to collect, transform and analyse marketing data. Built a reporting tool that identified advertising units and trends, consolidating data from TikTok, Snapchat and Facebook into a central spreadsheet.'
        ],
        media: [
        ]
    },
]

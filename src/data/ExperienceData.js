
import Atiyyah1 from '../assets/experience_images/Atiyyah 1.png'
import RoyzImage1 from '../assets/project_images/Royz Rental 1.png'
import SimplySENImage1 from '../assets/project_images/SEN Tuition 1.png'
import VirtualE from '../assets/experience_images/virtuale_sem_logo.jpeg'
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
            'Owned front-end delivery across onboarding, notifications and productivity features for an early-stage platform, working with backend and product colleagues from requirements through release.',
            'Built an admin onboarding system that enabled non-technical staff to manage company records and accelerated customer onboarding by several weeks.',
            'Modernised legacy React code and improved loading performance. Earlier project reporting recorded a 30% load-time improvement and a 24% engagement increase following new features.'
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
            'Delivered web and mobile products for clients in car rental, education and retail, taking work from discovery and design through deployment and ongoing support.',
            'Built responsive interfaces and integrated services for authentication, data and analytics, with attention to accessibility, search visibility and maintainable code.',
            'Completed a Wix-to-Shopify store migration within two weeks while preserving existing orders and service continuity.'
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
        logoSrc: 'https://media.licdn.com/dms/image/C4E0BAQH-cJHNTuBj_g/company-logo_200_200/0/1630645848269/threepipe_logo?e=2147483647&v=beta&t=CguO2xvyHPTxNAi6hwVW4sduS4P8ZHMXL6CDWLzywtE',
        bulletPoints: [
            'Automated data validation for the SEO team with Python, SQL, Alteryx and source APIs, reducing recurring manual checks from hours to minutes. Earlier team reporting estimated a 60% productivity improvement.',
            'Consolidated marketing data from multiple platforms into clearer analysis and reporting tools, while supporting automation work across other teams.'
        ],
        media: [
        ]
    },
]

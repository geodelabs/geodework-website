interface ILink {
  title: string
  url?: string
  hasComma?: boolean
}

export type TCountry =
  | 'Argentina'
  | 'Colombia'
  | 'Denmark'
  | 'Greece'
  | 'Honduras'
  | 'India'
  | 'Japan'
  | 'Malaysia'
  | 'Mexico'
  | 'Poland'
  | 'Romania'
  | 'Serbia'
  | 'Slovakia'
  | 'Taiwan'
  | 'Thailand'
  | 'Ukraine'
  | 'USA';

export interface IGrant {
  project: ILink
  description: string
  links: ILink[]
  country: TCountry
}

export const lastUpdated = "2025-05-20"

export const grantsData: IGrant[] = [
  {
    project: {
      title: "Crecimiento 2025 Season 4",
    },
    description:
      "2025 Ethereum ecosystem developments initiative including hackathons, bootcamps and more in Buenos Aires, Argentina.",
    links: [
      {
        title: "Crecimiento",
        url: "https://x.com/crecimientoar",
      },
    ],
    country: "Argentina",
  },
  {
    project: {
      title: "ETHWarsaw 2025 Growth",
    },
    description:
      "March 2025 - Feb 2026 ecosystem development initiatives including conferences, hackathons, monthly meetups, knowledge sharing sessions, blockchain bootcamps and some other smaller initiatives in Warsaw, Poland.",
    links: [
      {
        title: "ETHWarsaw",
        url: "https://ethwarsaw.dev",
      },
    ],
    country: "Poland",
  },
  {
    project: {
      title: "PhishQuest: Interactive Web3 Anti-Phishing Training Platform",
      url: "https://phish-quest.vercel.app/",
    },
    description:
      "A security education initiative aiming to enhance users' ability to recognize and defend against phishing attacks by simulating real-world Web3 phishing scenarios and providing hands-on learning experiences.",
    links: [
      {
        title: "DeFiHackLabs",
        url: "https://defihacklabs.io",
      },
    ],
    country: "Taiwan",
  },
  {
    project: {
      title: "The Playground for Decentralizerians - Centrum Node",
    },
    description:
      "To run an Ethereum node at the Centrum coworking space in Shibuya, Tokyo, where many Japanese Ethereum communities usually gather here.",
    links: [
      {
        title: "Centrum",
        url: "https://centrum.studio",
      },
    ],
    country: "Japan",
  },
  {
    project: {
      title: "IIIT Hyderabad Ethereum Education Explorations v2",
    },
    description:
      "April 2025 - March 2026 yearly educational explorations: to continue the Ethereum course and guide two PhDs and a research associate on Ethereum-related research at IIIT-Hyderabad.",
    links: [
      {
        title: "Ankit Gangwal",
        url: "https://ciaoankit.github.io/",
        hasComma: true,
      },
      {
        title: "Assistant Professor at",
      },
      {
        title: "IIIT Hyderabad",
        url: "https://iiit.ac.in",
        hasComma: true,
      },
      {
        title: "India",
      },
    ],
    country: "India",
  },
  {
    project: {
      title: "Ethereum Tegucigalpa 2025",
    },
    description:
      "2025 Ethereum ecosystem developments initiative including a series of community building activities in Honduras.",
    links: [
      {
        title: "Ethereum Tegucigalpa",
        url: "https://x.com/ethereumTGU_",
      },
    ],
    country: "Honduras",
  },
  {
    project: {
      title:
        "5-Day National Workshop and Bootcamp on Cyber Security and Blockchain",
      url: "https://nwbcsb2025.iiit.ac.in/",
    },
    description:
      "A five day Ethereum bootcamp including expert-talks, networking sessions, as well as hands-on/bootcamp on Ethereum at IIIT Hyderabad from 1-5 March, 2025.",
    links: [
      {
        title: "IIIT Hyderabad",
        url: "https://www.iiit.ac.in/",
        hasComma: true,
      },
      {
        title: "India",
      },
    ],
    country: "India",
  },
  {
    project: {
      title: "Ethereum Argentina Cordoba Edition 2025",
      url: "https://ethereumargentina.org/",
    },
    description:
      "A two-day conference + workshops (2025/4/12 - 4/13) at Blas Pascal University, Córdoba, Argentina.",
    links: [
      {
        title: "Ethereum Argentina",
        url: "https://x.com/EtherArgentina",
      },
    ],
    country: "Argentina",
  },
  {
    project: {
      title: "Kyiv Ethereum Community 2025",
    },
    description:
      "2025 yearly support for the Kyiv Ethereum Community, which is focused on fostering Ethereum development and adoption in Kyiv. It serves as a hub for developers, builders, and enthusiasts who want to engage with Ethereum through educational events, hands-on hacking, and networking.",
    links: [
      {
        title: "EthKyiv",
        url: "https://x.com/ethkyiv_ua",
      },
    ],
    country: "Ukraine",
  },
  {
    project: {
      title: "Bratislava 2025",
    },
    description:
      "ETHBratislava 25 - Hackathon & Conference, Meetups, Community calls to grow CEE Ethereum ecosystem.",
    links: [
      {
        title: "Ethereum Bratislava",
        url: "https://ethbratislava.com/",
      },
    ],
    country: "Slovakia",
  },
  {
    project: {
      title: "Latincrypt 2025",
      url: "https://ciencias.medellin.unal.edu.co/eventos/latincrypt/",
    },
    description:
      "A week-long cryptography-focused event, including the Latincrypt conference, educational events at ASCRYPTO and CatioCrypt in Medellín, Colombia.",
    links: [
      {
        title: "Latincrypt",
        url: "https://www.espe.edu.ec/latincrypt/",
      },
    ],
    country: "Colombia",
  },
  {
    project: {
      title: "Web3 Development Internship Program",
    },
    description:
      "Web3 Development Internship Program is focused on Ethereum ecosystem development in Ukraine. The program will bridge the gap between technical education and industry needs by connecting students with practical development opportunities.",
    links: [
      {
        title: "Web3 Institute (W3I)",
        url: "https://w3i.network",
      },
    ],
    country: "Ukraine",
  },
  {
    project: {
      title: "EthCluj 24-25",
    },
    description:
      "Dec 2024-Dec 2025 yearly grant that includes support of the community leaders and activities in Cluj-Napoca, Romania.",
    links: [
      {
        title: "ETHCluj",
        url: "https://x.com/ETHCluj",
      },
    ],
    country: "Romania",
  },
  {
    project: {
      title: "StackTooDeep Hackathon - 2025 Edition",
      url: "https://stacktoodeep-v2.devfolio.co/overview",
    },
    description:
      "StackTooDeep is the inaugural ethereum focused hackathon conducted by Blockchain Society IIT Roorkee, India.",
    links: [
      {
        title: "Blockchain Society IIT Roorkee",
        url: "https://blocsoc.iitr.ac.in/",
      },
    ],
    country: "India",
  },
  {
    project: {
      title: "The House of Ether 2025",
      url: "https://thehouseofether.gr/",
    },
    description:
      "A community education initiative with a duration of 12 months, aimed at engaging university students, researchers and academics aged 25-35 as well as the general public in topics of Ethereum, in North-eastern Greece.",
    links: [
      {
        title: "Bluechain",
        url: "https://bluechain.tech/",
      },
    ],
    country: "Greece",
  },
  {
    project: {
      title: "Uzumakit",
      url: "https://x.com/uzumakihouse1",
    },
    description:
      "An annual Ethereum research house in Tokyo, Japan, including 12 monthly meetups in 2025.",
    links: [
      {
        title: "Titania Research",
        url: "https://x.com/titaniaresearch",
      },
    ],
    country: "Japan",
  },
  {
    project: {
      title: "Onchain bootcamp 2025",
      url: "https://www.facebook.com/people/Onchain-Bootcamp/61576231011833/",
    },
    description:
      "Onchain bootcamp 2025 is a 10-Day(16 - 27 June) Structured Program, which is taking place at Chulalongkorn University providing with comprehensive Ethereum-based curriculum, hands-on workshops and support for career pipeline.",
    links: [
      {
        title: "CUBS (Chulalongkorn University Blockchain Society)",
        url: "https://chulablockchain.com/",
      },
    ],
    country: "Thailand",
  },
  {
    project: {
      title: "Agentic Ethereum Hackathon 2025",
      url: "https://reskilll.com/hack/agentic",
    },
    description:
      "Agentic Ethereum Hackathon is a 30-hour hackathon which will gather over 150-200 passionate developers from Delhi NCR or Bangalore, aiming to catalyze the creation of AI-driven autonomous agents and smart contracts on Ethereum, fostering innovation at the intersection of blockchain and artificial intelligence.",
    links: [
      {
        title: "Reskilll",
        url: "https://reskilll.com/",
      },
    ],
    country: "India",
  },
  {
    project: {
      title: "ETHKL 2025",
    },
    description: "ETHKL 2025 development and self-sustainability exploration v3.",
    links: [
      {
        title: "ETHKL",
        url: "https://ethkl.org/",
      },
    ],
    country: "Malaysia",
  },
  {
    project: {
      title: "DAOstar Research Fellowship",
      url: "https://daostar.org/research",
    },
    description:
      "The DAOstar Research Fellowship Program funds research fellows in 2025 to produce actionable research on DAO governance, labor practices, contributor retention, and compensation structures with outputs including: public research reports, blog posts, and presentations at conferences.",
    links: [
      {
        title: "Metagov",
        url: "https://metagov.org/",
      },
    ],
    country: "USA",
  },
  {
    project: {
      title: "ETH Belgrade 2025",
      url: "https://ethbelgrade.rs/",
    },
    description:
      "ETH Belgrade(June 3–5) featuring both a conference and a hackathon, will be focused on topics of  Ethereum, ZK, DeFi, and Web3 security.",
    links: [
      {
        title: "ETH Belgrade",
        url: "https://x.com/ethbelgrade",
      },
    ],
    country: "Serbia",
  },
  {
    project: {
      title: "Web3SSH:2.0",
      url: "https://web3ssh.dev/",
    },
    description:
      "Web3SSH 2.0 is a 7-day summer blockchain/Ethereum focused offline camp, which consists of a Summer School program and a Hackathon, taking place at IIIT Sri City, India, from 29 June to 6th July, 2025.",
    links: [
      {
        title: "IIIT Sri City, India",
        url: "https://www.iiits.ac.in/",
      },
    ],
    country: "India",
  },
  {
    project: {
      title: "Ethereum Mexico Org 2025",
    },
    description:
      "Ethereum Mexico Org 2025 is focused on growing the Ethereum ecosystem in Mexico through education and community-driven programs.",
    links: [
      {
        title: "Ethereum Mexico",
        url: "https://www.ethmexico.org/",
      },
    ],
    country: "Mexico",
  },
  {
    project: {
      title: "Copenhagen Ethereum Meetup 10 Years Anniversary",
    },
    description:
      "This meetup(held on 7/14/2025) is non-technical and will be a reflection on what happened for Ethereum ecosystem in the past 10 years and where they see the space is heading in the next 10 years.",
    links: [
      {
        title: "Copenhagen Ethereum Meetup",
        url: "https://www.meetup.com/copenhagen-ethereum-meetup/",
      },
    ],
    country: "Denmark",
  },
  {
    project: {
      title: "ETHCluj 2025: Ethereum for Everyone",
      url: "https://www.ethcluj.org/",
    },
    description:
      "ETHCluj is hosting a 3-day conference from June 26-28, 2025 at Technical University of Cluj-Napoca, Romania.\n\nThis conference will feature 3 stages including workshop, sessions and hands-on workshops, with topics across six main tracks, including Dev Onboarding, Ethereum Roadmap, DeFi, AI, Regulation, and Adoption.",
    links: [
      {
        title: "ETHCluj",
        url: "https://x.com/ETHCluj",
      },
    ],
    country: "Romania",
  }
]

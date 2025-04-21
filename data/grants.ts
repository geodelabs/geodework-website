interface ILink {
  title: string
  url?: string
  hasComma?: boolean
}

export interface IGrant {
  project: ILink
  description: string
  links: ILink[]
  country: string
}

export const lastUpdated = "2025-04-21"

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
]

---
title: "Brazil Ethereum Ecosystem Overview"
publishedTime: 2025-10-01 12:00:00 Z-00:00
---

## Has Brazil invented the future of money? 🇧🇷 💸

![Brazil Ethereum Ecosystem](https://pvvrtckedmrkyzfxubkk.supabase.co/storage/v1/object/public/geode-images/cover-images/Brazil-Ethereum-Ecosystem-Cover.png)

Special thanks to Rob Junior, Thiago Rocha, Romina Sejas, Cristiano Silva, Luciana and João Kury for the feedback and the review.

## **TL;DR**

- From early pioneers like Alex Van de Sande to Brazil’s Central Bank experimenting with Drex, Brazil’s Ethereum journey is a story of experimentation, setbacks, and breakthroughs.
- Brazil ranks among the [top 5 countries globally for crypto adoption](https://www.chainalysis.com/blog/2025-global-crypto-adoption-index/), driven by strong fintech infrastructure like PIX (Brazil's instant payment system), widespread stablecoin use, growing retail and institutional participation, and clear regulations. Its vibrant developer communities support a dynamic ecosystem focused on payment infra and DeFi, while sectors like RWA tokenization remain emerging.
- PIX solved instant payments in Brazil, but Ethereum is solving global programmable payments and assets.
- Though the highly anticipated Drex (Digital Brazilian Real) V1 has pivoted away from blockchain, its exploratory phase served as an essential institutional 'boot camp,' giving Ethereum legitimacy and deepening technical expertise within Brazil's major financial firms.

## 1. Policy Landscape

- Brazil's regulatory environment is characterized by an overall **positive view and strong interest** in crypto from federal authorities, making it one of the most robust legal frameworks in Latin America.
- Legal Status: Crypto is not legal tender but is recognized as an asset class. It provides legal certainty for major financial firms to tokenize assets, trade, and custody in a clear jurisdictional domain.
- New Tax System (Provisional Measure 1303): Brazil is moving to a flat 17.5% tax rate on all capital gains from crypto transactions, effective 2026.
- Primary Regulator: The Brazilian Central Bank (BCB) is designated as the primary regulator for Virtual Asset Service Providers (VASPs).
- Compliance: Businesses dealing in crypto must comply with stringent Anti-Money Laundering (AML) and Know-Your-Customer (KYC) rules, with reporting requirements to the Financial Intelligence Unit.

## 2. Local Roots: The Historical Foundation of the Brazilian Ethereum Ecosystem

The sustained strength of the Brazilian ecosystem is built on a deep history of both technical contributions and early institutional engagement, establishing the necessary technical foundation for the current RWA boom. Key milestones include:

- Early Contributor (2014): [Alex Van de Sande](https://x.com/avsa), a crucial Brazilian figure who joined the Ethereum Foundation before the network launched in 2014. His team led the design of the first Ethereum wallet (Mist) and engineered fundamental standards, including the ERC-20 token standard and the Ethereum Name Service (ENS).
- OriginalMy (2015): One of Brazil's pioneering blockchain startups, initially built an [on-chain property registry](https://www.eddieoz.com/inatba-member-interview-with-edilson-osorio-ceo-and-founder-of-originalmy-blockchain/) to replace expensive notaries. The venture has since evolved into an e-Governance framework that provides tools to reduce bureaucracy and increase transparency across multiple sectors.
- EthereumSP Meetups (2015–2018): A grassroots developer community organized by local builders in São Paulo, serving as an early hub for Ethereum discussions and experimentation. Victor Taelin, later known for his AI and programming language work, was an active participant while collaborating with the Ethereum Foundation.
- [Brazilian Development Bank (BNDES)](https://www.bndes.gov.br/SiteBNDES/bndes/bndes_en/conteudos/noticia/BNDES-launches-public-consultation-in-search-of-blockchain-components-for-BNDESToken/) (2019): At Devcon 5 in Osaka, [presented a token project](https://www.youtube.com/watch?v=3V1dVhcS8bs) for better tracking of investment funds and combating corruption.
- [Pods Finance](https://projetos.pods.finance) (2020): Originating at ETHDenver, Pods built the first live implementation of on-chain options based on the Opyn whitepaper. After running two DeFi protocols with millions in TVL, they later pivoted to a B2B API, helping wallets and fintechs launch DeFi features.
- [Picnic](https://usepicnic.com/en) (2023): A DeFi consumer app that has become [one of the world's largest implementations](https://archive.devcon.org/devcon-7/bringing-web2-users-onchain-picnics-case-study/?tab=YouTube) of ERC-4337.
- RWAs: Brazil has become a global leader in **tokenized private credit** ([top 5 by volume](https://www.mercadobitcoin.com.br/consensus#:~:text=Connect%20with%20the%20Crypto%20%26%20RWA,traded%20volume%2C%20with%20zero%20default)), with Mercado Bitcoin driving this sector.
- In 2025, Brazil ranks top 5 worldwide in crypto adoption, with an estimated 16+ million Brazilians having owned cryptocurrency. Stablecoin and DeFi usage are widespread. ([Chainalysis](https://www.chainalysis.com/blog/2025-global-crypto-adoption-index/)).

## 3. Ethereum, PIX, and DREX (Digital Brazilian Real)

### **tl;dr**

- Ethereum: offers the highest decentralization and programmability but has variable fees and slower finality
- [PIX](<https://en.wikipedia.org/wiki/Pix_(payment_system)>): provides instant, 24/7, free payments but is centrally controlled by Brazil's central bank
- [DREX](https://www.bcb.gov.br/en/financialstability/digital_brazilian_real): combines central bank control with programmable features, was in pilot phase using Hyperledger Besu and now V1 will not use blockchain at all
  ![DREX Features](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/729e3b33-1bb6-4111-a09d-c4a31e41352b/brazil_1.png)

### **PIX**

Launched in November 2020, PIX is Brazil’s instant payment system, and one of the largest in the world, second only to India’s UPI. It has become a global benchmark for adoption. Before PIX, bank transfers were limited to business hours (8 a.m. to 5 p.m.), and transfers between different banks often could not be processed on weekends. Today, PIX regularly handles record volumes, such as 237 million transactions in a single day, moving BRL 136 billion (~USD 30 billion). It is a public infrastructure layer owned and operated by the Central Bank of Brazil.

![Graph of the number of transactions between launch (November 2020) and 2023 by Banco central](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/33e8fcd9-023c-44e4-afe1-72de1fb0bad5/brazil_2.png)

_Graph of the [number of transactions](https://www.bcb.gov.br/content/estabilidadefinanceira/pix/relatorio_de_gestao_pix/relatorio_gestao_pix_2023.pdf) between launch (November 2020) and 2023 by Banco central_

But what’s missing? Why do we still need programmable blockchains?

The main limitation of PIX is that it only solves payments. Broader financial markets, the trading of stocks, bonds, funds, property, and other assets, continue to operate under restricted schedules (5 a.m. to 8 p.m.), and often require multiple intermediaries. This makes settlement slow and costly.

Blockchains, however, allow both “money” (tokens) and “assets” (also represented as tokens) to exist and interact in the same programmable environment.

### **Drex**

Drex was designed as Brazil’s attempt to merge programmability and composability into a state-backed blockchain system. It aimed to be slightly more decentralized than the current model, running on Hyperledger Besu with validator nodes operated by entities such as the Central Bank, the national mint, and other financial institutions.

The Central Bank of Brazil has been researching blockchain since at least 2017, as shown in their technical paper following Ethereum closely: [Distributed Ledger Technical Research in Central Bank of Brazil](https://www.bcb.gov.br/content/publicacoes/outras_pub_alfa/Distributed_ledger_technical_research_in_Central_Bank_of_Brazil.pdf).

### **The Drex Pilot**

The first pilot phase tested issuance, transfer, and redemption of tokenized deposits, as well as interoperability experiments between platforms. Participants, including banks, fintechs, and other players, simulated use cases like payments, asset settlement, and smart contract integration. This phase was exploratory, focused on mapping technical requirements, cybersecurity risks, and potential regulatory adjustments.

The **main challenge** was finding a way to make the blockchain programmable with **privacy**. Pseudonymity, as seen in existing blockchains, was insufficient since with analytics and inference it would be possible to identify institutions, and even individuals, behind addresses.

To address this, the team experimented with privacy tools, mostly involving Zero-Knowledge Proofs (ZKPs).

### **Current Status**

The conclusion of phase one was that existing privacy solutions were not yet mature enough to deliver both programmability and composability. Since then, the pace of the project has slowed considerably. The Central Bank even announced that the first version of Drex will not use blockchain at all. It is unclear whether this decision was influenced by leadership changes, fatigue among the team, or security concerns after recent hacks.

Is Drex a failure? Absolutely not. Even if Drex does not go live as originally envisioned, the project elevated awareness, credibility, and legitimacy of crypto in Brazil. Traditional financial institutions experimented hands-on with Ethereum tools such as Foundry and Hardhat, building contracts originally authored by the Central Bank itself. Even the broader web3 ecosystem can learn from Drex’s challenges as we collectively work toward a more programmable and privacy-preserving future.

## 4. Key Players: Startups and corporations

Brazil's ecosystem is characterized by a unique blend of powerful traditional financial institutions, unicorn exchanges, and core infrastructure builders, all committed to web3 solutions.

- Infra & DeFi and Payment
  - [Balancer](https://balancer.fi): A decentralized AMM on Ethereum. Launched in 2020 after a 2018 concept, it became a key DeFi player. It’s a top-10 DeFi platform with a TVL of about $900 million.
  - [Pods Finance](https://x.com/PodsFinance): B2B API, helping wallets and fintechs launch DeFi features..
  - [P2P.me](https://p2p.me/en): Ethereum-based P2P payment app for remittances; supports BRL-to-crypto swaps.
  - [Blockful](https://blockful.io/): Blockful establishes key parameters to enhance governance security and strengthen the DAO ecosystem. Like L2beat, but for DAOs.
  - [Chainless](https://chainless.finance): A self-custodial superwallet with a built-in fiat ramp.
  - [PoolParty](https://pool-party.xyz): A decentralized finance (DeFi) project built on Uniswap, focusing on community-driven liquidity pools and yield farming. It aims to provide accessible DeFi solutions for users.
  - [Rayls Labs](https://www.rayls.com): Rayls is an EVM compatible blockchain, built to unite TradFi and DeFi, bringing $100T of TradFi liquidity and the 6 Billion banked population into DeFi.
  - [Núclea](https://ri.nuclea.com.br/en/): A major infrastructure backbone in Brazil’s payments and settlement ecosystem. Núclea manages 100% of boleto (invoice) registrations and 90% of debit and credit card settlements in Brazil.
  - [ENS](https://ens.domains): Co-founded by Brazilian Alex Van de Sande, ENS domains are core to Ethereum's Web3 identity layer. Brazil has ~50K active .eth domains.
  - [M0](https://www.m0.org): A universal platform powering builders of application-specific stablecoins. It simplifies stablecoin issuance, collateral management, and compliance for builders, powering projects like MetaMask’s mUSD, Noble, Usual, USDHL, and KAST.
  - [Transfero](https://transfero.com): Blockchain payment solutions and BRL stablecoin issuer.
  - [BlindPay](https://blindpay.com): Stablecoin API for global payments.
  - [Avenia](https://avenia.io): A project focused on developing Brazil's cryptocurrency infrastructure through BRLA Digital, promoting audited stablecoins and facilitating global payments using PIX and blockchain technology.
  - [Orda Network:](https://orda.network) Builds intents into real-world transfers across chains, stablecoins, and banking systems.
  - [SmartPay](https://smartpay.com.vc): A fintech platform that enables users to make payments and transactions seamlessly, including using USDT where PIX payment is accepted.
  - [AmFi](https://amfi.finance/): The first regulated Digital Fixed Income platform in Brazil, offering digital assets with higher yields than traditional investments.
  - [Decentral](https://usedecentral.com/): The first multichain RWA protocol connecting web3 investors to opportunities in the Creative Economy.
- Financial Giants & Asset management
  - [Nubank](https://nubank.com.br): Latin America's largest digital bank with more than 100 million customers in Brazil. It launched its [crypto trading](https://www.google.com/search?client=safari&sca_esv=8436e30913f223ae&cs=1&q=crypto+trading&sa=X&ved=2ahUKEwj9kora-_-PAxUmsFYBHdvVA9gQxccNegQIAxAB&mstk=AUtExfD0DZROgsbBmCBJ10Vhjkz2-ONmX1_LHV0Rv1xfh3H1aaW64L77N0EgNbAAgYgJ7_EhOi-Rf4tR0EeLyHvzBcFOrh9hOqoYm8BHhErLbL8UFIbrfs5TbmlF7_4E-0qq0RE9GxaMw0LfWMth86ve5dEJjqB5agZR3TLwcItF8582kRpjJJk2Klpa3M2rhaZJgXJJ&csui=3) platform in May 2022, with Bitcoin (BTC) and Ethereum (ETH) among the first offerings, and later launched its own loyalty token, [Nucoin](https://international.nubank.com.br/consumers/nucoin-nubanks-cryptocurrency-and-loyalty-program-is-now-available-for-customers-in-brazil/), in early 2023. It is now piloting stablecoin credit card payments in Brazil.
  - [Hashdex](https://hashdex.com): A crypto asset management firm that has launched the world’s first crypto index ETF in 2021 and even working on Ethereum futures ETFs.
  - Itaú Asset Management's crypto division: launched in 2021, offers Ethereum ETFs and tokenized funds via the B3 exchange. Itaú holds ~$500M in crypto assets and focuses on Ethereum for tokenizing RWAs.
  - [Méliuz Bitcoin](https://x.com/MeliuzBitcoin): Largest public holder of BTC in Latin America.
- Exchange
  - [Mercado Bitcoin](https://www.mercadobitcoin.com.br): Brazil’s largest crypto exchange, with over 3M users. Supports 200+ assets including ETH staking, spot and futures trading. A founding member of the BRL1 stablecoin consortium.
  - [Foxbit](https://foxbit.com.br): Another major exchange with 1.5M users and part of BRL1 consortium.
- BRL stablecoins related
  - Major issuers including BRL1 (Bitso, Mercado Bitcoin, Foxbit consortium), BRLA (Avenia), BRZ (Transfero), cREAL (Celo) and BBRL (Braza).
    ![BRL Weekly active addresses](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/f020b8a7-4437-4e4c-825b-060dd39b8243/brazil_3.png)
    ![[BRL Stablecoin Report](https://lookerstudio.google.com/u/0/reporting/2be8da5a-1b7d-4834-ad3a-2c2357230b0f/page/zymKF) by [IPO Research Ventures](https://iporesearch.ventures)](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/8be89940-7098-4e56-a92e-dd98fe17ef5b/brazil_4.png) _[BRL Stablecoin Report](https://lookerstudio.google.com/u/0/reporting/2be8da5a-1b7d-4834-ad3a-2c2357230b0f/page/zymKF) by [IPO Research Ventures](https://iporesearch.ventures)_

## 5. Developers & Technical Talent

Brazilian developers are known for strong Fintech and security talent.

- **Growth Trajectory**: Brazil’s developer community is expanding rapidly. According to GitHub’s Octoverse (2023), Brazil is projected to remain among the top 10 countries for developers globally through 2030, with blockchain and Web3 as fast-growing verticals.
- **Web3 Share**: Brazil accounts for roughly 2.5% to 3% of the world's Web3 developers (2024-2025). And it is growing gradually.
- **Hub:** The ecosystem is heavily concentrated in São Paulo, Latin America’s largest tech cluster, with its dense fintech scene, accelerators, and universities providing fertile ground for Ethereum talent.
- **Community:** Hackathons and meetups have been crucial in bringing new developers into Ethereum. Flagship events like **Ethereum Rio**, **ETH Samba**, and ongoing meetups run by **ERC55** provide training, mentorship, and visibility for emerging builders.

![[Projecting the top 10 developer communities on GitHub through 2030](https://github.blog/news-insights/octoverse/octoverse-2024/#projecting-the-top-10-developer-communities-on-github-through-2030) by Github](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/3069ca35-aea8-4cd4-940c-214261376ab6/brazil_5.png)

_[Projecting the top 10 developer communities on GitHub through 2030](https://github.blog/news-insights/octoverse/octoverse-2024/#projecting-the-top-10-developer-communities-on-github-through-2030) by Github_

![[Fastest growing developer communities in Latin America](https://github.blog/news-insights/octoverse/octoverse-2024/#fastest-growing-developer-communities-in-latin-america) by Github ](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/f5d8df73-cdf3-46ad-84ad-f6f0d890e246/brazil_6.png)

_[Fastest growing developer communities in Latin America](https://github.blog/news-insights/octoverse/octoverse-2024/#fastest-growing-developer-communities-in-latin-america) by Github_

![[Global crypto developer share 2024](https://www.developerreport.com/developer-report?s=visit-developerreport-com-for-a-full-developer-breakdown-by-ecosystems-and-by-country) by Electric Capital](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/6213d628-9d86-48cf-9bdd-02839de8d3fe/brazil_7.png)

_[Global crypto developer share 2024](https://www.developerreport.com/developer-report?s=visit-developerreport-com-for-a-full-developer-breakdown-by-ecosystems-and-by-country) by Electric Capital_

![[New developer share by country](https://www.developerreport.com/geography) from Electric Capital Developer Report](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/857e7d74-b838-49a5-93aa-37108a020eb2/brazil_8.png)

_[New developer share by country](https://www.developerreport.com/geography) from Electric Capital Developer Report_

## **6. Community: Cultivating the Builder Pipeline**

Hackathons, meetups, and dedicated educational programs have been critical in onboarding the next wave of Ethereum builders, providing training, mentorship, and visibility.

### **Grassroots Communities**

- Flagship Events: [ETH Samba](https://x.com/ethsamba) (a high-energy, prominent hackathon), [Ethereum Brasil](https://www.ethereumbrasil.com), and [Ethereum Rio](https://www.ethereumbrasil.com/ethereumrio25-1) are key annual pillars, significantly boosting both technical output and developer talent.
- **The Core Technical Community [ERC55](https://x.com/erc55_?lang=en)**: ERC55 is the community with the lowest profile, the most technical, and one of the most aligned with Ethereum. It began its activities in August 2023 with monthly meetups. In 2025, in partnership with the Ethereum Foundation and the ZK Education Team, they ran the Core Program course, an immersive 6-week journey focused on [Programmable Cryptography (ProgCrypto)](https://github.com/erc55/core-program-2025/blob/main/final-report.md).
- **Decentralized Reach**: Local Web3 communities are thriving, [ETH Beagá](https://ethbeaga.xyz/) (Belo Horizonte), [Token Hub Economy](https://tokeneconomy.com.br/) (Curitiba), [Favelaverso](https://favelaverso.my.canva.site/) (Rio’s favelas), and [Modular Crypto](https://x.com/ModularCrypto), driving education, culture, and social impact across the country.
- For some years, scalability and L2 solutions have been recurring topics in Brazil. Today, this momentum has materialized, with networks like Arbitrum, Base, and Scroll establishing a strong local presence and even appointing dedicated country leads.

### **Physical Hubs**

Dedicated physical spaces are vital for converting virtual communities into tangible, collaborative ecosystems.

- São Paulo Hubs: [Vega House](https://www.vegacrypto.xyz/en) provides a physical venue in São Paulo for networking, workshops, and ecosystem development. [Nouns House](https://x.com/nounshouse) acts as a venue for meetups and an incubator for builders and enthusiasts. [Distrito](https://distrito.me/) is a physical hub for innovation and artificial intelligence.
- Rio & Beyond: [Bamba Labs](https://www.bambalabs.co) is a Rio de Janeiro-based community focused on development and innovation. [Node Hub Web3](https://nodehubweb3.xyz/#) is a hub of companies and professionals driving real onboarding into Web3.
- The Future City: [Ipê City](https://docs.ipe.city) is an ambitious, month-long experimental city concept brings together global talent to co-live, learn, and prototype AI and blockchain solutions, aiming to prototype a governance system for the city of the future (see [2026 edition](https://x.com/ipecity/status/1970597924011753651)).

### **Media Groups**

- [Modular Crypto](https://x.com/ModularCrypto): One of Brazil's largest web3 media and education projects, providing educational content, organizing events, conducting blockchain research, and participating in governance across the ecosystem.
- [Brazil Crypto Report](https://newsletter.brazilcrypto.io): A community and media source offering news, insights, and analysis about the Brazilian crypto economy.

## **7. Acceleration & Investment: Capitalizing the Ecosystem**

Both domestic and international capital recognize Brazil's potential, and they are supporting startups to get access to crucial funding. However, accessing that capital is not easy, mainly due to limited presence of local and global VCs in Brazil (and LATAM in general), as well as language barriers, since English proficiency is lower compared to hubs like India.

- Domestic
  - [QR Capital](https://qr.capital): One of the first crypto-focused firms in Brazil. Runs a $100M+ hedge fund, manages ETH in treasury, invested in 50+ projects (including Polygon), and prioritizes Brazilian founders.
  - [Monashees](https://www.monashees.com) and [Valor Capital Group](https://www.valorcapitalgroup.com): Traditional VC funds that have started backing blockchain startups (e.g., participation in Mercado Bitcoin’s funding rounds).
  - [Iporanga Ventures:](https://www.ipo.ventures/) An early-stage venture capital fund investing in the Future of Finance.
- International
  - [SoftBank Latin America Fund](https://www.latinamericafund.com): Poured $200M into Mercado Bitcoin’s parent 2TM in 2021, giving Brazil its first crypto unicorn.
  - [Coinbase Ventures](https://www.coinbase.com/ventures), [Sequoia](https://www.sequoiacap.com), [a16z](https://a16z.com): All have backed LatAm projects and scout actively in Brazil.
  - [LIFT Lab (Banco Central)](https://www.bcb.gov.br/site/liftchallenge/en): Central Bank accelerator that has incubated Ethereum pilots and Drex-related projects.
  - One of the biggest Global Accelerators [Y Combinator](https://www.ycombinator.com) has admitted Brazilian Web3 startups, such as [Trace Finance](https://www.tracefinance.com/home-en), confirming the ecosystem's capacity to compete internationally.

## **8. University & Academia**

While formal blockchain curricula remain limited at Brazilian universities, student-led clubs, **community-partnered courses**, research labs, and grassroots meetups are filling the educational gap through community-driven initiatives.

**Blockchain Club**

- [Polichain](http://polichain.xyz) (USP): Blockchain study group at USP's Polytechnic School, founded in 2021
- [ITA Blockchain Group](https://x.com/ITA_Blockchain): Student-led blockchain initiative at the Aeronautics Institute of Technology.
- [Unicamp](https://wordpress.ft.unicamp.br/lbu/): Student-run organization spreading blockchain knowledge on and off campus
- [Blockchain Insper](https://www.instagram.com/blockchainsper): Latin America's first university blockchain organization (est. 2017).
- [Blockchain Fatec](https://fatec.app): Student organization at Fatec Americana focused on blockchain and Web3.
- [UnBChain](https://unbchain.unb.br) (University of Brasília): An integrated research center for blockchain and related technologies.
- [Inteli Blockchain](https://www.inteliblockchain.org): A Brazilian student org focused on advancing blockchain technology.

**Ethereum Course**

- [CIn-UFPE](https://portal.cin.ufpe.br) (Computer Science Center of the Federal University of Pernambuco): Ethereum and [Solidity course](https://br.beincrypto.com/recife-recebe-curso-gratuito-de-capacitacao-em-blockchain-com-foco-na-rede-ethereum/) in partnership with ETH Kipu, Web3EduBrasil, and Plexos Institute.
- [UFSC](https://en.ufsc.br) (Federal University of Santa Catarina): Offers Ethereum and Solidity course, in partnership with ETH Kipu, Blockful.io, ETH Samba, and ETH Latam, brings the Ethereum Developer Pack to UFSC.
- [UFES](https://internacional.ufes.br/en/home) (Federal University of Espirito Santo): Offers Ethereum and Solidity [classes](https://www.linkedin.com/posts/afonso-dalvi-711635112_blockchain-solidity-smartcontract-activity-7377295885128572928-R0HO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE78RTYB0U_VlpXmf_Hd-A_dQCr-Fz4AVZc) in partnership with the [ETH Kipu](https://www.linkedin.com/company/ethkipu/) and [Espírito Bitcoin](https://espiritobitcoin.com).

Research Labs

- [Computing Systems Engineering Laboratory](https://lesc.caf.ufv.br/) (UFV): Research lab at Federal University of Viçosa conducting blockchain and Ethereum related research.
- [NetLab UFJF](https://netlab.ice.ufjf.br/about/) (UFJF): Network and distributed system lab at Federal University of Juiz de Fora.

## 9. Highlighted Events

- [ReCity](https://www.recity.org/) (Recife, 6-26 Oct 2025): A three-week pop-up city project blending technology, regeneration, and culture, with blockchain woven into its design.
- [Web3 PE](https://www.even3.com.br/web3-pe-2-edicao-626597/) (Pernambuco, 21-23 Oct 2025): A part of the National Science and Technology Week program, featuring workshops, lectures, and discussion groups on Web3 tech.
- [ETHLatam](https://ethlatam.org/en) (São Paulo, 6-9 Nov 2025): The biggest Ethereum conference in Latam.
- [Real-World Ethereum Hackathon](https://x.com/ethlatam/status/1956014875596963897) (São Paulo, 6-7 Nov 2025): A focused hackathon addressing RWA use cases on Ethereum, running alongside ETHLatam.
- [ETH Floripa](https://www.ethfloripa.com) (Florianópolis, 11-12 Nov 2025): A builder retreat following ETHLatam.
- [Blockchain Conference Brazil](https://www.blockchainconferencebrasil.com) (São Paulo, 28-29 Nov 2025): A chain-agnostic crypto conference.

## Further Reading

- [Has Brazil Invented the Future of Money](https://substack.com/@paulkrugman)? by Paul Krugman
- DREX for gringos, [part I](https://medium.com/@Sciammarella/drex-for-gringos-762f91e9e4d6), [part II](https://medium.com/@Sciammarella/drex-for-gringos-part-ii-57bad5040669) and [part III](https://medium.com/@Sciammarella/drex-for-gringos-part-iii-e053a432aac6), by Leandro Pereira
- [Drex – Digital Brazilian Real](https://www.bcb.gov.br/en/financialstability/drex_en) by Banco Central do Brasil
- [Blockchain & Cryptocurrency Laws and Regulations 2025 – Brazil](https://www.globallegalinsights.com/practice-areas/blockchain-cryptocurrency-laws-and-regulations/brazil/) by Global Legal Insights
- [Brazil’s Legal Framework for Cryptoassets and Upcoming Regulation](https://www.ibanet.org/Brazil-legal-framework-for-cryptoassets-and-upcoming-regulation) by International Bar Association
- [Tokenization in Brazil](https://backend.abcripto.com.br/media/files/documentsDownloadSection/ABcripto-Tokenization-in-Brazil-EN.pdf) by ABcripto
- [The Money Layer: LATAM Crypto 2025 Report](https://dune.com/blog/latam-crypto-2025-report) by [Filippo Armani](https://www.linkedin.com/in/filarm/) at Dune
- [Brazil Pioneers DeFi Integration with Drex and Bold Crypto Reforms](https://cryptoforinnovation.org/brazil-pioneers-defi-integration-with-drex-and-bold-crypto-reforms/) by Crypto For Innovation
- [The Rise of Crypto Economy in Brazil](https://cryptoforinnovation.org/brazil-digital-literacy-paves-the-way-for-crypto-use/) by Crypto For Innovation
- [Learning from Brazil and India’s Instant Payment Systems](https://www.hks.harvard.edu/sites/default/files/centers/mrcbg/Final_AWP_254.pdf) by Polina Kempinsky at Harvard Kennedy School
- [Payment Technology Complementarities and Their Consequences on the Banking Sector: Evidence From Brazil’s Pix](https://www.bis.org/publ/bppdf/bispap152_c.pdf) by Matheus C Sampaio and Jose Renato H Ornelas at The Bank for International Settlements (BIS) Paper
- [Lift Challenge](https://www.bcb.gov.br/site/liftchallenge/en) of Digital Brazilian Real

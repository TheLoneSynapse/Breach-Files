/* The Breach Files — extended roster: famous hackers, past and present.
   Every portrait below was verified against Wikimedia Commons (HTTP 200) before use.
   People with no freely licensed portrait are marked honestly instead of being illustrated. */

const MORE_PEOPLE = [
  /* ---------------- WHITE HAT ---------------- */
  {
    id: 'wozniak', name: 'Steve Wozniak', alias: '"Woz"',
    role: 'White hat — engineer', life: 'b. 1950', hat: 'white',
    img: 'Steve_Wozniak_by_Gage_Skidmore.jpg', credit: 'Gage Skidmore, CC BY-SA 3.0',
    bio: 'The engineer behind the Apple I and Apple II, and before that a phone phreak who built blue boxes with John Draper. He is the clearest case of someone who grew up on the wrong side of a legal line and ended up defining an industry on the right one.',
    known: 'The Apple I and Apple II computers, the Homebrew Computer Club, and a career that began with building devices to make free long-distance calls.',
    method: 'Hardware and low-level engineering rather than intrusion — he built things that made other systems do what they were not designed to do.',
    fate: 'Co-founded Apple in 1976 and became one of the first centimillionaire hackers. Since then: philanthropy, education, and a public argument that curiosity should not be criminalised.',
    src: 'https://en.wikipedia.org/wiki/Steve_Wozniak'
  },
  {
    id: 'hypponen', name: 'Mikko Hypp\u00f6nen', alias: '',
    role: 'White hat — researcher', life: 'b. 1969', hat: 'white',
    img: 'Mikko_Hyppönen.JPG', credit: 'Vera de Kok, CC BY-SA 3.0',
    bio: 'A Finnish researcher who has spent three decades cataloguing malware as it arrived — and who has been unusually willing to say when the industry gets things wrong. He built one of the largest public malware archives in the world.',
    known: "Tracking the first worm to reach mobile phones (Cabir, 2004), the Storm botnet, and BlackEnergy against Ukrainian power grids. His museum-like malware collection runs to hundreds of thousands of samples.",
    method: 'Defensive research: collecting, classifying and explaining attacks rather than performing them.',
    fate: 'Long-time chief research officer at F-Secure (now WithSecure), author, speaker, and one of the most quoted voices explaining attacks to non-technical audiences.',
    src: 'https://en.wikipedia.org/wiki/Mikko_Hypp%C3%B6nen'
  },
  {
    id: 'kaspersky', name: 'Eugene Kaspersky', alias: '',
    role: 'White hat — founder', life: 'b. 1965', hat: 'white',
    img: 'Eugene_Kaspersky_(cropped).jpg', credit: 'Foreign and Commonwealth Office, OGL v1.0',
    bio: 'A Russian engineer who started reversing malware in the late 1980s and built one of the largest antivirus companies in the world from it. His firm\u2019s research has repeatedly uncovered state-level toolkits that nobody wanted found.',
    known: "Kaspersky Lab's discovery of the Equation Group — an advanced platform attributed to the NSA — and of the Flame espionage platform, both of which his company published in detail.",
    method: 'Signature and heuristic detection built on an in-house malware zoo, plus long-form threat research.',
    fate: 'His company\u2019s findings made it politically inconvenient for everyone. Kaspersky Lab was banned from US government systems in 2017; Kaspersky denies any ties to the Russian government.',
    src: 'https://en.wikipedia.org/wiki/Eugene_Kaspersky'
  },
  {
    id: 'moussouris', name: 'Katie Moussouris', alias: '',
    role: 'White hat — policy', life: 'b. 1975', hat: 'white',
    img: 'Katie_Moussouris_Kiwicon_9_presenter_(89).jpg', credit: 'Kristina D.C. Hoeppner, CC BY-SA 2.0',
    bio: 'A vulnerability researcher who realised that finding bugs was the easy part — the hard part was getting companies to pay for them and fix them. She designed the systems that turned bug hunting into a legitimate profession.',
    known: 'Creating Microsoft\u2019s vulnerability research and bug-bounty programmes, and helping write the US Department of Defense vulnerability disclosure policy that made hacking defence systems legal for researchers.',
    method: 'Vulnerability research plus the policy scaffolding that decides whether findings get fixed or suppressed.',
    fate: 'Founder of Luta Security, adviser to governments on disclosure policy, and a persistent argument that bug bounties are a market, not a favour.',
    src: 'https://en.wikipedia.org/wiki/Katie_Moussouris'
  },
  {
    id: 'charlie-miller', name: 'Charlie Miller', alias: '',
    role: 'White hat — researcher', life: 'active since 2000s', hat: 'white',
    img: 'Charlie_Miller_Infiltrate_2012.jpg', credit: 'Alexander Klink, CC BY 3.0',
    bio: 'A former National Security Agency analyst who became one of the most productive public vulnerability researchers of his generation — and who kept proving that consumer devices with radios in them are attack surfaces.',
    known: 'The first to remotely compromise an iPhone from scratch (2007), and the 2015 remote attack on a moving Jeep Cherokee built with Chris Valasek, which triggered a 1.4 million-vehicle recall.',
    method: 'Patient reverse engineering of proprietary wireless stacks, followed by a very public demonstration.',
    fate: 'Worked in industry security after the NSA, including at Twitter. The Jeep work reshaped how regulators and carmakers think about the connected vehicle.',
    src: 'https://en.wikipedia.org/wiki/Charlie_Miller_(computer_security)'
  },
  {
    id: 'zatko', name: 'Peiter Zatko', alias: 'Mudge',
    role: 'White hat — researcher', life: 'b. 1970', hat: 'white',
    img: 'Peiter_Zatko_at_DARPA.jpg', credit: 'Public domain (US government)',
    bio: 'A founder of the legendary hacker collective L0pht, one of the seven who testified before the US Senate in 1998, and later a government programme manager and a corporate security chief. He has sat on every side of the table except the defendant\u2019s.',
    known: 'L0pht\u2019s password and infrastructure research, leading advanced research at DARPA, building Stripe\u2019s security programme, and the 2022 whistleblower allegations about Twitter\u2019s security — which he took to Congress.',
    method: 'Deep systems research combined with an unusual talent for making power listen.',
    fate: 'Still active in security research and a recurring example of hacker-to-institution credibility: he helped legitimise the disclosure culture the industry now depends on.',
    src: 'https://en.wikipedia.org/wiki/Peiter_Zatko'
  },
  {
    id: 'tabriz', name: 'Parisa Tabriz', alias: '"Security Princess"',
    role: 'White hat — engineering', life: 'active since 2000s', hat: 'white',
    img: "Parisa_Tabriz_Blackhat'17_profile.jpg", credit: 'mrisher, CC BY-SA 4.0',
    bio: 'She arrived at Google as an apprentice who had taught herself to break into Windows domains, and ended up running security engineering for its most-used software. A rare example of self-taught offensive skill converted into defensive scale.',
    known: 'Building and leading Google\u2019s security engineering organisation across Chrome and Android — putting browser and mobile security on a footing with the rest of the company\u2019s engineering.',
    method: 'Offensive background applied to programme design: making secure behaviour the default for a billion users.',
    fate: 'A senior engineering leader at Google and one of the most visible women in application security worldwide.',
    src: 'https://en.wikipedia.org/wiki/Parisa_Tabriz'
  },
  {
    id: 'kurtz', name: 'George Kurtz', alias: '',
    role: 'White hat — founder', life: 'b. 1969', hat: 'white',
    img: 'George_Kurtz.jpg', credit: 'CrowdStrike, Inc., CC BY-SA 4.0',
    bio: 'An accountant who taught himself to hack, co-authored the book that taught a generation of defenders how attacks work, and then built one of the largest security companies in the world.',
    known: 'Co-author of Hacking Exposed (2001), founder of incident-response firm Foundstone, and co-founder and CEO of CrowdStrike.',
    method: 'Offensive testing converted into managed defence — the "know how they break in" school of security.',
    fate: 'Runs a public cybersecurity company whose product name became shorthand for a very bad day in IT: in 2024 a faulty CrowdStrike update took millions of Windows machines offline.',
    src: 'https://en.wikipedia.org/wiki/George_Kurtz'
  },
  {
    id: 'wheeler', name: 'Tarah Wheeler', alias: '',
    role: 'White hat — policy', life: 'active since 2010s', hat: 'white',
    img: 'Tarah_Wheeler_Headshot.jpg', credit: 'Deviant Ollam, CC0',
    bio: 'A security researcher who moved into the other half of the problem: the rules, incentives and international agreements that decide whether a disclosed bug gets fixed. She works where technical evidence meets government decision-making.',
    known: 'Public work on vulnerability disclosure policy, election infrastructure security, and the economics of who is allowed to report a flaw without being sued for it.',
    method: 'Research and advocacy rather than exploitation — translating technical findings into policy that holds up.',
    fate: 'An author and adviser on cybersecurity policy in the United States and internationally.',
    src: 'https://commons.wikimedia.org/wiki/File:Tarah_Wheeler_Headshot.jpg'
  },

  /* ---------------- GREY HAT ---------------- */
  {
    id: 'mentor', name: 'Loyd Blankenship', alias: 'The Mentor',
    role: 'Grey hat — writer', life: 'b. 1964', hat: 'grey',
    img: 'Mentor_and_niece.jpg', credit: 'Public domain, released by Lblankenship',
    bio: 'A member of the Legion of Doom who, hours after his 1986 arrest, wrote eight paragraphs in a hospital holding cell that became the defining statement of hacker culture — and that almost every security professional still quotes.',
    known: 'The Hacker\u2019s Manifesto ("The Conscience of a Hacker"), written in 1986, plus years of writing for Phrack and later editing 2600.',
    method: 'BBS intrusion and system exploration at the dawn of the scene — curiosity that ran into federal law.',
    fate: 'Arrested and convicted on conspiracy charges, he later turned the same skills into a legitimate career in the games industry and remained a writer and editor in the community.',
    src: 'https://en.wikipedia.org/wiki/Loyd_Blankenship'
  },
  {
    id: 'phiber', name: 'Mark Abene', alias: 'Phiber Optik',
    role: 'Grey hat — researcher', life: 'b. 1973', hat: 'grey',
    img: 'Abene9_2005.jpg', credit: 'Public domain, released by the author',
    bio: 'A New York teenager who became one of the first hackers the American press treated as a criminal archetype. He was part of the Legion of Doom, wrote under the name Phiber Optik, and was a fixture of the New York scene in the early 1990s.',
    known: 'Telephone and network research published in Phrack, membership of the Legion of Doom, and a prosecution that became a cause c\u00e9l\u00e8bre for early digital-rights groups.',
    method: 'Bell System internals, network mapping and social engineering against telephone companies.',
    fate: 'He pleaded guilty to conspiracy charges and went to federal prison. Afterwards he returned to ordinary technical work and remained a respected figure in the scene.',
    src: 'https://en.wikipedia.org/wiki/Mark_Abene'
  },
  {
    id: 'lauri-love', name: 'Lauri Love', alias: '',
    role: 'Grey hat — researcher', life: 'b. 1984', hat: 'grey',
    img: 'Lauri_Love_byline.JPG', credit: 'Geni, CC BY-SA / GFDL',
    bio: 'A British analyst and mathematics graduate accused of breaking into US government servers and taking data — and of the case that established limits on extraditing British citizens to the United States for computer crime.',
    known: 'Alleged intrusions into systems belonging to the FBI, US Army, NASA, NASA\u2019s partners and the US sentencing commission between 2012 and 2013.',
    method: 'Exploitation of known vulnerabilities in internet-facing government infrastructure — the unglamorous kind that stays unpatched.',
    fate: 'He fought extradition for five years on human-rights grounds. In 2018 a UK court ruled he should not be sent to the US, and charges against him in the UK were later dropped. He has worked in security research and activism since.',
    src: 'https://en.wikipedia.org/wiki/Lauri_Love'
  },

  /* ---------------- BLACK HAT ---------------- */
  {
    id: 'gonzalez', name: 'Albert Gonzalez', alias: 'Mr. Scanner',
    role: 'Black hat — carder', life: 'b. 1981', hat: 'black',
    img: 'Albert-gonzalez.jpg', credit: 'Public domain (US Secret Service / US Attorney, New Jersey)',
    bio: 'The organiser of the largest payment-card theft ring yet prosecuted. He ran a team that treated retailers as a supply chain: scan the wireless, sit on the network, collect the data, sell it by the million.',
    known: 'The TJX breach (more than 40 million card numbers across the scheme) and the alleged theft of 130 million records from Heartland Payment Systems.',
    method: 'Wardriving from a parked car into unencrypted retail Wi-Fi, then installing sniffers inside payment networks that had no segmentation.',
    fate: 'Arrested in 2008 while on supervised release for an earlier offence. In 2010 he was sentenced to 20 years — at the time the longest sentence ever handed down for a hacking case.',
    src: 'https://en.wikipedia.org/wiki/Albert_Gonzalez'
  },
  {
    id: 'yakubets', name: 'Maksim Yakubets', alias: 'aqua',
    role: 'Black hat — cybercrime boss', life: 'b. 1987', hat: 'black',
    img: 'Maksim_Yakubets.jpg', credit: 'Public domain (US Department of Justice)',
    bio: 'The alleged leader of Evil Corp, a Russian cybercrime organisation that ran banking trojans and ransomware for a decade with an almost corporate structure — including recruiting through job interviews for "computer specialists."',
    known: 'Dridex and LockerGPA ransomware, the theft of more than $100 million from banks and businesses, and the CryptoLocker variant distributed through Gameover Zeus.',
    method: 'Phishing to install banking trojans, then large-scale extortion — crime as a service, run from Russia.',
    fate: 'Indicted in the United States in December 2019 and described at the time as one of the most wanted cybercriminals in the world; the US State Department offered a $5 million reward for information leading to his capture. He remains at large.',
    src: 'https://en.wikipedia.org/wiki/Evil_Corp'
  },
  {
    id: 'bogachev', name: 'Evgeniy Bogachev', alias: 'lucky12340',
    role: 'Black hat — malware author', life: 'b. 1986', hat: 'black',
    img: null,
    glyph: '\ud83d\udd78', theme: 'net',
    credit: '',
    bio: 'A Russian programmer who built the most resilient banking botnet of its era and then, reportedly, turned it into a ransomware distribution machine. He is one of the few cybercriminals to be formally labelled a national security threat.',
    known: 'Gameover Zeus — a peer-to-peer banking trojan with a domain-generation fallback — and the CryptoLocker ransomware spread through it.',
    method: 'Peer-to-peer command networks and domain-generation algorithms, specifically designed so that taking his servers offline would not end the campaign.',
    fate: 'Indicted in the US in 2014 and placed on the FBI\u2019s Most Wanted list with a reward reported at $3 million. Operation Tovar disrupted his infrastructure the same year, but he has never been arrested.',
    src: 'https://en.wikipedia.org/wiki/Evgeniy_Bogachev'
  },
  {
    id: 'calce', name: 'Michael Calce', alias: 'Mafiaboy',
    role: 'Black hat — DoS attacker', life: 'b. 1985', hat: 'black',
    img: null,
    glyph: '\ud83c\udf0a', theme: 'flood',
    credit: '',
    bio: 'A fifteen-year-old from Montreal who took down most of the commercial web for a day in February 2000 to win arguments in underground chat rooms. He became the public face of juvenile cybercrime almost overnight.',
    known: 'Distributed denial-of-service attacks that degraded Yahoo!, Amazon, eBay, CNN, Dell and E*Trade during the height of the dot-com boom.',
    method: 'Compromising university Sun servers through known holes, then using them for IP-spoofed SYN floods — no subtlety, just volume.',
    fate: 'Traced through his own boasts after The Register published his confession. He pleaded guilty, was sentenced as a juvenile, and became a cautionary figure used in schools worldwide.',
    src: 'https://en.wikipedia.org/wiki/Mafiaboy'
  },
  {
    id: 'smith', name: 'David Lee Smith', alias: '',
    role: 'Black hat — malware author', life: 'b. 1968', hat: 'black',
    img: null,
    glyph: '\ud83d\udcc4', theme: 'doc',
    credit: '',
    bio: 'A New Jersey programmer who released a Word macro worm into a Usenet group in March 1999 and appears to have lost control of it within hours. He is the reason "release it and see what happens" became a prosecutable decision.',
    known: 'The Melissa worm — which used victims\u2019 own address books to mail itself onward and locked up corporate mail systems within a day.',
    method: 'A macro stored in a document, dispatched through Outlook to the first fifty contacts, arriving from someone the recipient already trusted.',
    fate: 'Traced through a New Jersey account he had used. He pleaded guilty to state and federal charges, and the case became the template for prosecuting worm authors.',
    src: 'https://en.wikipedia.org/wiki/Melissa_(worm)'
  },
  {
    id: 'hess', name: 'Markus Hess', alias: '',
    role: 'Black hat — industrial spy', life: 'b. 1956', hat: 'black',
    img: null,
    glyph: '\ud83d\udd75\ufe0f', theme: 'spy',
    credit: '',
    bio: 'A Hamburg-based programmer who broke into American research networks on commission and sold what he found to the KGB. He is the original case of a hacker working for a foreign intelligence service.',
    known: 'Penetrating about 40 US research and defence-connected systems, including facilities linked to the Strategic Defense Initiative, between 1986 and 1987.',
    method: 'Weak passwords and trusted-host relationships between academic machines, plus the discipline to sell rather than brag.',
    fate: 'Exposed by Clifford Stoll\u2019s accounting mismatch and traced through Tymnet to Hanover. He was convicted of espionage in 1990.',
    src: 'https://en.wikipedia.org/wiki/The_Cuckoo%27s_Egg'
  }
];

/* Legal record and video for each profile.
   Every video ID below was checked against YouTube's oEmbed endpoint before it was added:
   the ID resolves, the title and channel shown here are the ones YouTube returns.
   Video field: { id, title, by }.  Laws/punishment: only what was actually charged or ordered. */
const LEGAL = {
  mitnick: {
    laws: 'Federal, on the 1999 plea: four counts of wire fraud (18 U.S.C. 1343), two counts of computer fraud (18 U.S.C. 1030) and one count of illegally intercepting a wire communication (18 U.S.C. 2511). The 1995 arrest itself was for violating probation.',
    punishment: '46 months in federal prison, three years\u2019 supervised release and $4,125 in restitution - against the $1.5 million prosecutors asked for. He had been in custody since February 1995 and walked free in January 2000.',
    video: { id: 'aUqes9QdLQ4', title: "My Adventures as the World's Most Wanted Hacker | Kevin Mitnick | Talks at Google", by: 'Talks at Google' }
  },
  morris: {
    laws: 'Convicted after trial of one count under the Computer Fraud and Abuse Act, 18 U.S.C. 1030(a)(5)(A) - the first conviction anyone ever got under that statute.',
    punishment: 'Three years\u2019 probation, 400 hours of community service and a $10,050 fine. No prison term.',
    video: { id: '2QwMv0_Rkec', title: 'The First Internet Worm (Morris Worm) - Computerphile', by: 'Computerphile' }
  },
  lamo: {
    laws: 'Pleaded guilty to one federal count of unauthorised access and damage to The New York Times\u2019 network under the CFAA. The other intrusions were not separately charged.',
    punishment: 'Two years\u2019 probation including six months of home detention, plus roughly $65,000 in restitution.',
    video: { id: 'uFVIu2g7uzQ', title: 'Adrian Lamo, Bradley Manning Informant, Defends Turning in Alleged WikiLeaks Whistleblower', by: 'Democracy Now!' }
  },
  swartz: {
    laws: 'Indicted on 13 federal felonies: two counts of wire fraud (18 U.S.C. 1343) and 11 counts under the CFAA (18 U.S.C. 1030). Allegations, never proven in court.',
    punishment: 'None. The case was still pending when he died in January 2013 and the charges were dismissed. The prosecution drove a decade of attempts to reform how the CFAA is applied.',
    video: { id: '0MUjdc3KIYA', title: "The Story of Aaron Swartz: \"The Internet's Own Boy\" Director Q&A", by: 'ReasonTV' }
  },
  snowden: {
    laws: 'Charged in 2013 with theft of government property (18 U.S.C. 641), unauthorised communication of national-defense information (18 U.S.C. 793(d)) and willful communication of classified communications-intelligence information (18 U.S.C. 798(a)(3)).',
    punishment: 'No US sentence. He left the country before the charges landed, was granted asylum in Russia and received Russian citizenship in 2022. The USA FREEDOM Act ended the bulk collection he exposed.',
    video: { id: '0hLjuVyIIrs', title: "NSA whistleblower Edward Snowden: 'I don't want to live in a society that does these sort of things'", by: 'The Guardian' }
  },
  manning: {
    laws: 'Court-martial under the Uniform Code of Military Justice: aiding the enemy (Article 104 - acquitted), Espionage Act offences prosecuted under Article 134, theft of government property and unauthorised computer use. Convicted on 20 charges.',
    punishment: '35 years - the longest sentence ever handed down for a leak to the press - with dishonorable discharge and reduction to Private E-1. Commuted by President Obama in 2017 after seven years.',
    video: { id: 'gpgKa6fBo4Y', title: 'Chelsea Manning interview on Trump, running for office, and prison life', by: 'Channel 4 News' }
  },
  assange: {
    laws: 'United States: pleaded guilty in 2024 to one count of conspiracy to obtain, receive and disclose national-defense information (18 U.S.C. 793(g)). United Kingdom: convicted of breaching bail conditions.',
    punishment: '62 months in the US, credited as time served, with release in June 2024; separately 50 weeks in a UK prison for the bail breach.',
    video: { id: 'hUKGlriwhjU', title: "\"I Pled Guilty to Journalism\": WikiLeaks' Julian Assange Speaks Publicly After Prison Release", by: 'Democracy Now!' }
  },
  poulsen: {
    laws: 'Pleaded guilty to seven counts - computer fraud, interception of wire communications, mail fraud, money laundering and obstruction of justice - over hijacking radio-station phone contests.',
    punishment: '51 months in federal prison and $57,925 in restitution to the three radio stations.',
    video: { id: 'SKVnR91ed5g', title: 'DEFCON 20: Kevin Poulsen Answers Your Questions', by: 'DEF CON footage' }
  },
  mckinnon: {
    laws: 'Indicted in the US on seven computer-crime counts under 18 U.S.C. 1030. The UK Crown Prosecution Service ultimately brought no charges of its own.',
    punishment: 'None. Extradition to the US was blocked in October 2012 on human-rights and medical grounds, and the UK then declined to prosecute.',
    video: { id: 'XacevWeOkHg', title: 'Gary McKinnon Interview - BBC', by: 'BBC' }
  },
  hotz: {
    laws: 'No criminal charges. Sony sued him civilly, alleging among other things violations of the DMCA anti-circumvention rules over what he published about PS3 security.',
    punishment: 'Civil settlement and a permanent injunction. No criminal penalty and no payment disclosed in the joint statement.',
    video: { id: 'Qk5ZoLizNgE', title: 'Sony vs. Geohot: The Hacking Battle', by: 'RocheTechnology' }
  },
  kaminsky: {
    laws: 'None - never charged. He took the DNS cache-poisoning flaw to vendors and CERT privately instead of exploiting it.',
    punishment: 'None. He spent the following months coordinating the fix with hundreds of vendors, then presented it at DEF CON 16.',
    video: { id: '7Pp72gUYx00', title: 'DEF CON 16 - Dan Kaminsky: Black Ops 2008', by: 'DEFCONConference' }
  },
  draper: {
    laws: 'Arrested in 1972 on seven federal wire-fraud counts (18 U.S.C. 1343); a separate wire-fraud conviction followed in 1976.',
    punishment: '1972: a suspended one-year sentence, a $1,000 fine and five years\u2019 probation. 1976: four months in federal prison.',
    video: { id: 'n6TjjE8NHV0', title: "Phone Phreak Captain Crunch Rare Interview from '78", by: 'joetrip' }
  },
  mcafee: {
    laws: 'Charged in the United States in 2020 with tax evasion (26 U.S.C. 7201 and 7203) over income he allegedly never declared from 2014 to 2018. Belize never charged him over the 2012 killing of his neighbour.',
    punishment: 'No verdict. He was held in a Spanish prison pending extradition and died there in June 2021 before the case was tried.',
    video: { id: 'Py-kkwN78UA', title: 'McAfee software creator jailed in Spain', by: 'Reuters' }
  },
  anonymous: {
    laws: 'The collective has never been charged as an organisation. Named members were charged under US law - mostly 18 U.S.C. 1030 (CFAA) and 18 U.S.C. 371 conspiracy - over the 2010-2011 operations.',
    punishment: 'Sentences ranged from months to a decade. Jeremy Hammond drew 10 years for the Stratfor breach in the Sabu case; co-defendants drew roughly 5 to 30 months each.',
    video: { id: 'R8h-fPCvqAg', title: 'The Face of Anonymous | Hacker Group | Hacktivism | Political Documentary', by: 'Moconomy' }
  },
  deguzman: {
    laws: 'None - never charged. The Philippines had no law covering malware in 2000, and the E-Commerce Act that created one came later that year.',
    punishment: 'None. He was never prosecuted for the worm.',
    video: { id: 'ltDMOmdNOuk', title: "PHILIPPINES: \"LOVE BUG\" COMPUTER VIRUS LATEST", by: 'AP Archive' }
  },
  stoll: {
    laws: 'None - never charged. He was the person tracing the intruder, not the intruder.',
    punishment: 'None. The Cuckoo\u2019s Egg made the case famous and he continued as an astronomer and security writer.',
    video: { id: '1h7rLHNXio8', title: 'CTI Summit Keynote - Cliff Stoll - (Still) Stalking the Wily Hacker', by: 'SANS Digital Forensics and Incident Response' }
  },
  monsegur: {
    laws: 'Pleaded guilty in 2012 to federal counts of computer fraud and conspiracy under 18 U.S.C. 1030 and 18 U.S.C. 371.',
    punishment: 'Seven months served and one year of supervised release, against the 20-plus years he faced, because he had already been working as an FBI informant and helped bring in roughly a dozen arrests.',
    video: { id: 'f8UxBsTvK8U', title: 'Former Anonymous hacker Hector Monsegur on future plans', by: 'CBS Mornings' }
  },
  wozniak: {
    laws: 'None - never charged. He built blue boxes as a teenager and walked away before it became a prosecution.',
    punishment: 'None.',
    video: { id: 'wnrrv-01VM0', title: 'Full EXCLUSIVE Interview with Apple co-founder Steve Wozniak with the Reagan Foundation', by: 'Ronald Reagan Presidential Foundation & Institute' }
  },
  hypponen: {
    laws: 'None - never charged.',
    punishment: 'None. He has spent the career on the defensive side: tracking malware at F-Secure and now at WithSecure.',
    video: { id: 'HE0RuDUy9JM', title: 'd!talk Keynote Mikko Hypp\u00f6nen, F-Secure', by: 'cebitchannel' }
  },
  kaspersky: {
    laws: 'None - never charged.',
    punishment: 'None. His company has been the subject of US government restrictions on federal systems, which he disputes.',
    video: { id: 'zJt-lawx128', title: 'Internet Governance Forum 2021: A discussion on cybersecurity with Eugene Kaspersky', by: 'UN DESA' }
  },
  moussouris: {
    laws: 'None - never charged.',
    punishment: 'None. She worked with the US Department of Defense on coordinated disclosure rules and helped write the first bug-bounty programmes.',
    video: { id: 'Y6DDyGUKQRQ', title: 'James Stewart interviews Katie Moussouris at CYBERUK 2023', by: 'CYBERUK ONLINE' }
  },
  'charlie-miller': {
    laws: 'None - never charged. The car work was disclosed to the manufacturer under an agreed schedule before it was presented.',
    punishment: 'None.',
    video: { id: 'lpZulZ1rFmY', title: 'DEFCON 22 Car Hacking with Charlie Miller & Chris Valasek', by: 'SecureNinjaTV' }
  },
  zatko: {
    laws: 'None - never charged.',
    punishment: 'None. He went from L0pht to the Pentagon\u2019s DARPA and later filed a whistleblower complaint against Twitter in 2022.',
    video: { id: 'VVJldn_MmMY', title: 'Hackers Testifying at the United States Senate, May 19, 1998 (L0pht Heavy Industries)', by: 'Joe Grand' }
  },
  tabriz: {
    laws: 'None - never charged.',
    punishment: 'None.',
    video: { id: 'py2qmGbyhlw', title: 'Black Hat USA 2018 Keynote: Parisa Tabriz', by: 'Black Hat' }
  },
  kurtz: {
    laws: 'None - never charged.',
    punishment: 'None. He co-founded CrowdStrike after leading the incident-response side at McAfee.',
    video: { id: 'LG5oP3I48mo', title: "The Leader's Forum | George Kurtz of CrowdStrike", by: 'Harvard Business School' }
  },
  wheeler: {
    laws: 'None - never charged.',
    punishment: 'None. Her work is policy and disclosure rather than intrusion.',
    video: { id: '0iW_e3Ss_2k', title: 'Tarah Wheeler Keynote: Just Cyber War in an Unjust World', by: 'NATO CCDCOE' }
  },
  mentor: {
    laws: 'Federal computer-intrusion charges in the 1990s prosecutions of the Legion of Doom; the exact statute and counts are not clearly documented in the sources available.',
    punishment: 'One year of probation. The Hacker\u2019s Manifesto was written in a holding cell while he waited.',
    video: { id: 'nr02_ELQsbI', title: 'Il Manifesto Hacker di Loyd Blankenship - Dedicato a tutti gli Hacker', by: 'Red Hot Cyber' }
  },
  phiber: {
    laws: 'Federal computer-fraud charges under 18 U.S.C. 1030 in the early-1990s New York cases, resolved on a plea.',
    punishment: 'One year in federal prison.',
    video: { id: '1p1XyMfwmuM', title: 'KEYNOTE 3  Mark Phiber Optik Abene', by: 'All Hacking Cons' }
  },
  'lauri-love': {
    laws: 'Indicted in the US on charges under 18 U.S.C. 1030 and 1029 plus conspiracy; separately arrested in the UK under the Computer Misuse Act 1990.',
    punishment: 'None. Extradition to the US was refused in 2018 on mental-health grounds and UK prosecutors let the matter go with no conviction.',
    video: { id: 'wKwMJkrWTog', title: 'Lauri Love on computers, autism and extradition', by: 'Channel 4 News' }
  },
  gonzalez: {
    laws: 'Pleaded guilty under 18 U.S.C. 371, 1030, 1343, 1029 and 1028A - conspiracy, computer fraud, wire fraud, access-device fraud and aggravated identity theft - over the TJX and Heartland breaches.',
    punishment: '20 years in federal prison, three years\u2019 supervised release, a $25,000 fine and forfeiture of stolen assets. At the time the longest sentence given for a hacking case in the United States.',
    video: { id: 'ES1zlIYVCjM', title: "The Secret Service's Most Valuable Hacker", by: 'Blackfiles' }
  },
  yakubets: {
    laws: 'Indicted in the US in 2019 on charges including 18 U.S.C. 1030, 1343 and 1344 plus conspiracy, over Evil Corp\u2019s Dridex and BitPaymer operations.',
    punishment: 'None yet - he is still a fugitive, believed to be in Russia. The reward for information leading to him was raised to $5 million, the largest ever posted for a cyber-criminal.',
    video: { id: 'Y-k6YZMa2kM', title: 'Who is protecting Maksim Yakubets? - Cyber Hack: Evil Corp Ep6, BBC World Service podcast', by: 'BBC World Service' }
  },
  bogachev: {
    laws: 'Indicted in 2014 in Pittsburgh under 18 U.S.C. 1962(d) (RICO conspiracy), 1030, 1343, 1344 and 1956 over Gameover Zeus and its money-mule network.',
    punishment: 'None - still a fugitive, believed to be in Russia. The FBI posted $3 million for information leading to him.',
    video: { id: 'Vn4VA5-n8AM', title: 'FBI offers $3m reward for GameOver Zeus creator Russian hacker Evgeniy Bogachev', by: 'TomoNews US' }
  },
  calce: {
    laws: 'Charged in Canada under Criminal Code 342.1 (unauthorised use of a computer) and 430(1.1) (mischief to data) for the 2000 denial-of-service attacks on Yahoo!, eBay, Amazon, Dell and CNN.',
    punishment: 'Eight months of open custody and one year of probation - because he was 15 at the time, he was dealt with under the Youth Offenders Act.',
    video: { id: 'q0pKpqebwMI', title: '\u201cMafiaBoy\u201d Michael Calce talks about internet security', by: 'Financial Post' }
  },
  smith: {
    laws: 'Pleaded guilty to a federal count under 18 U.S.C. 1030, plus New Jersey state charges for computer-related theft.',
    punishment: '20 months in federal prison, three years\u2019 supervised release, a $5,000 fine and 100 hours of community service.',
    video: { id: 'Nl8M8SF6Db0', title: 'The Email That Took Down the Military | The Melissa Virus', by: 'NationSquid' }
  },
  hess: {
    laws: 'Convicted in West Germany in 1990 under section 99 of the Criminal Code - espionage - for selling access he had obtained by breaking into US academic and defence-connected systems.',
    punishment: 'A 20-month suspended sentence.',
    video: { id: '4gHNVNRQTJg', title: 'The KGB, the Computer and Me (1990)', by: 'Velimir Radlova\u010dki' }
  }
};

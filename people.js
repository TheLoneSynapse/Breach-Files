/* The Breach Files — people gallery, game-cracking history and glossary.
   Portraits are Wikimedia Commons files served via Special:FilePath; licences are credited per card. */

const PEOPLE = [
  {
    id: 'mitnick', name: 'Kevin Mitnick', alias: 'Condor, "the most wanted computer criminal in America"',
    role: 'Hacker', life: '1963 – 2018', img: 'Kevin_Mitnick_(4892570820).jpg',
    credit: 'Eneas De Troya, CC BY 2.0',
    bio: 'The most famous hacker of the pre-web era, and the one who proved that the easiest way into a network is to ask a human for the password. Mitnick spent years on the FBI\u2019s most-wanted list, was held in solitary for months on the argument that he could "whistle his way through a phone system," and after prison became a bestselling author and commercial security consultant.',
    known: 'Breaking into DEC, Pacific Bell, Motorola, Sun and IBM — and stealing the source code for a cell-phone network. Arrested in 1995 after a manhunt reported at $300 million.',
    method: 'Social engineering above all: cloned pagers, pretext calls to technicians, impersonation of insiders. The technical exploit was rarely the hard part.',
    fate: 'Sentenced to 46 months in federal prison and released in 2000, he became a legitimate security consultant, author of The Art of Deception, and co-founder of Mitnick Security. He died in 2018 at 54.',
    src: 'https://en.wikipedia.org/wiki/Kevin_Mitnick'
  },
  {
    id: 'morris', name: 'Robert Tappan Morris', alias: '',
    role: 'Hacker — first convicted under the CFAA', life: 'b. 1966', img: 'Robert_Tappan_Morris.jpg',
    credit: 'Trevor Blackwell, CC BY-SA 3.0',
    bio: 'A Cornell graduate student who wrote the Morris Worm in November 1988, reportedly to measure how large the Internet was. A bug in his own code meant reinfection killed the host instead of merely slowing it, and roughly 10% of the Internet went down.',
    known: 'The Morris Worm — the first worm to become international news and the incident that created the field of incident response.',
    method: 'Exploited a buffer overflow in UNIX fingerd, a sendmail debug mode, and trusted-host relationships between machines.',
    fate: 'The first person convicted under the Computer Fraud and Abuse Act. Sentenced to three years\u2019 probation, 400 hours of community service and a fine. He went on to co-found the early web platform Viaweb (later Yahoo! Store) and teach at MIT.',
    src: 'https://en.wikipedia.org/wiki/Robert_Tappan_Morris'
  },
  {
    id: 'lamo', name: 'Adrian Lamo', alias: '"the homeless hacker"',
    role: 'Hacker — later a journalist', life: '1981 – 2018', img: 'Adrian_Lamo_mug.png',
    credit: 'Public domain (US federal government work)',
    bio: 'Lamo broke into networks from internet cafes, laundromats and abandoned buildings while technically homeless, and then — unusually — reported the flaws he found to the companies he had just broken into. His disclosures to The New York Times and Microsoft made him a legitimate, if controversial, figure in security research.',
    known: 'Intrusions at AOL, Yahoo!, MCI Worldcom and The New York Times, all disclosed responsibly afterwards.',
    method: 'Combinations of social engineering and unpatched web application flaws — and a willingness to be very publicly nice about it afterwards.',
    fate: 'Pleaded guilty to federal charges in 2004 and received probation and community service. He later became a journalist covering anonymous sources, and in 2011 reported the Manning chat logs to authorities, a decision that drew intense criticism. He died in 2018.',
    src: 'https://en.wikipedia.org/wiki/Adrian_Lamo'
  },
  {
    id: 'swartz', name: 'Aaron Swartz', alias: '',
    role: 'Programmer & activist', life: '1986 – 2013', img: 'Aaron_Swartz_Headshot_2007.jpg',
    credit: 'Public domain, released by Aaron Swartz',
    bio: 'A programmer who co-authored RSS at 14, helped build Reddit, and then turned his attention to making knowledge free. He believed access to published research was a public good, and was prepared to break the rules that kept it locked away.',
    known: 'Downloading roughly 4.8 million academic papers from JSTOR via MIT\u2019s network in 2010, and his central role in fighting SOPA. Also co-founder of the Creative Commons movement\u2019s early work and author of Guerilla Open Access.',
    method: 'A laptop in an MIT network closet, bypassing a registration limit rather than cracking a cipher.',
    fate: 'Federal prosecutors charged him under the Computer Fraud and Abuse Act with 13 counts carrying up to 35 years. Facing trial in 2013, he took his own life at 26. JSTOR later made millions of papers free to read; the case directly reshaped academic-access policy and the debate over how the CFAA is applied.',
    src: 'https://en.wikipedia.org/wiki/Aaron_Swartz'
  },
  {
    id: 'snowden', name: 'Edward Snowden', alias: '',
    role: 'Whistleblower', life: 'b. 1983', img: 'Edward_Snowden.jpg',
    credit: 'Laura Poitras / Praxis Films, CC BY 3.0',
    bio: 'A systems administrator for the NSA who concluded that the public had been kept in the dark about the scale of bulk surveillance, and chose to tell them. His disclosures remain the largest leak of classified material in US history.',
    known: 'The PRISM programme, bulk telephone metadata collection under Section 215, and tools including XKeyscore — published by The Guardian and The Washington Post beginning 5 June 2013.',
    method: 'No exploit: legitimate administrative access, a system permissive enough to let one person reach thousands of documents, and a lot of patience moving them out.',
    fate: 'Charged under the Espionage Act. Fled to Hong Kong, then Moscow, and has lived in Russia under asylum since 2013. The USA FREEDOM Act of 2015 ended bulk metadata collection. His memoir, Permanent Record, was published in 2019.',
    src: 'https://en.wikipedia.org/wiki/Edward_Snowden'
  },
  {
    id: 'manning', name: 'Chelsea Manning', alias: 'known at the time as Bradley Manning',
    role: 'Whistleblower', life: 'b. 1987', img: 'Chelsea_Manning_close-up_(cropped).jpg',
    credit: 'Matt Barnes, CC BY-SA 4.0',
    bio: 'A US Army intelligence analyst in Iraq who copied classified material to removable media over several months and passed it to WikiLeaks. Her disclosures shaped a decade of foreign policy debate and the conversation about what governments owe the public.',
    known: 'The Iraq and Afghanistan war logs, the State Department cables, and the Collateral Murder video showing a 2007 Apache helicopter attack in Baghdad.',
    method: 'A query-from-hell request: using a widely shared analyst password on a machine with far broader access than her role required.',
    fate: 'Convicted in 2013 of violations of the Espionage Act and sentenced to 35 years — the longest sentence ever handed down for a leak to the media. Commuted by President Obama in 2017 after seven years. She ran for the US Senate in 2024.',
    src: 'https://en.wikipedia.org/wiki/Chelsea_Manning'
  },
  {
    id: 'assange', name: 'Julian Assange', alias: '',
    role: 'Publisher', life: 'b. 1971', img: 'Julian_Assange_cropped_to_face.jpg',
    credit: 'Public domain',
    bio: 'An Australian programmer who founded WikiLeaks in 2006 to publish material from anonymous sources without the mediation of traditional newsrooms. The organisation became one of the most consequential — and contested — publishers of the digital age.',
    known: 'Publishing the war logs and diplomatic cables supplied by Chelsea Manning, the Sony Pictures emails, and millions of other documents. Earlier, in the 1990s, he wrote one of the first practical implementations of the WEP attack.',
    method: 'Publication rather than intrusion — though WikiLeaks\u2019s rise coincided with, and benefited from, a wave of anonymous submissions.',
    fate: 'Fought extradition from the UK to Sweden for years, living in the Ecuadorian embassy in London from 2012 until 2019. Imprisoned over a US Espionage Act request, he pleaded guilty in 2025 to one count of conspiracy and was released after time served.',
    src: 'https://en.wikipedia.org/wiki/Julian_Assange'
  },
  {
    id: 'poulsen', name: 'Kevin Poulsen', alias: 'Dark Dante',
    role: 'Hacker — later a journalist', life: 'b. 1965', img: 'Kevin_Poulsen_2014.png',
    credit: 'Klpoulsen, CC BY-SA 3.0',
    bio: 'A California hacker who treated telephone switching systems as a game to be won. He manipulated the network to rig radio call-in contests, and later turned to journalism — becoming one of the few people to have been both the subject of and a reporter on major hacking stories.',
    known: 'Winning two Porsches and $20,000 by ensuring his line was the 102nd caller into a KIIS-FM contest, and obtaining FBI wiretap files. His 1994 Wired article using a search engine to find unsecured cameras was an early example of what would later be called the Internet of Things.',
    method: 'Exploiting telco switching internals and the fact that internal commands had no meaningful audit trail.',
    fate: 'Arrested in 1995, sentenced to 51 months — the first wiretap-evidence hacking conviction in California. Afterwards he became a senior editor at Wired and then a contributing editor at Wired, and co-authored the book Takedown.',
    src: 'https://en.wikipedia.org/wiki/Kevin_Poulsen'
  },
  {
    id: 'mckinnon', name: 'Gary McKinnon', alias: 'Solo',
    role: 'Hacker', life: 'b. 1966', img: 'Gary_McKinnon.jpg',
    credit: 'Wikimedia Commons — see file page for licence',
    bio: 'A Scottish systems administrator who broke into US military and NASA networks between 2001 and 2002 while looking for evidence of suppressed UFO technology and free-energy programmes. He called himself a "peaceful hacker" and left messages calling the security "crap."',
    known: 'Intrusions into 97 US military and NASA computers, taking 52 of them offline for a period, and leaving a note on a US Navy weapons station\u2019s web server.',
    method: 'Unpatched systems and empty or default passwords — he said he never even needed to use hacking tools.',
    fate: 'The UK fought a decade-long legal battle against his extradition to the US, where he faced up to 70 years. Home Secretary Theresa May blocked the extradition in October 2012 on human-rights grounds, citing Asperger\u2019s syndrome and depression.',
    src: 'https://en.wikipedia.org/wiki/Gary_McKinnon'
  },
  {
    id: 'hotz', name: 'George Hotz', alias: 'geohot',
    role: 'Hacker — later a founder', life: 'b. 1989', img: 'George_Hotz.jpg',
    credit: 'Wikimedia Commons — see file page for licence',
    bio: 'At 17 he unlocked the original iPhone in 2007, trading his unlocked handset for a three-figure slot on live television. He went on to jailbreak the PlayStation 3, and later founded the self-driving car company Comma.ai and an AI hardware company.',
    known: 'The iPhone baseband unlock, the PS3 firmware jailbreak, and the "limera1n" bootrom exploit. His PS3 work led to Sony\u2019s OtherOS removal being litigated.',
    method: 'Deep reverse engineering of firmware and baseband processors, published openly.',
    fate: 'Sony sued him in 2011 over the PS3 jailbreak; the case settled with a permanent injunction and no admission of wrongdoing, and Sony\u2019s settlement statement noted he was not involved in the later PSN breach. He sold his first company to Nvidia and now leads AI hardware research.',
    src: 'https://en.wikipedia.org/wiki/George_Hotz'
  },
  {
    id: 'kaminsky', name: 'Dan Kaminsky', alias: '',
    role: 'Defender', life: '1979 – 2024', img: 'Dan_Kaminsky.jpg',
    credit: 'Wikimedia Commons — see file page for licence',
    bio: 'The kind of security researcher who found a flaw in the domain name system and coordinated a fix across every major vendor in the world — without ever publicising how to exploit it. He is remembered as one of the most generous figures in the industry.',
    known: 'The 2008 DNS cache-poisoning flaw, which affected essentially every name server on the internet and could have let an attacker redirect any website. He coordinated the patch quietly before disclosure.',
    method: 'Fuzzing, long debugging sessions, and an unusual willingness to get vendors talking to each other.',
    fate: 'He ran Black Hat and helped build the incident-response culture around coordinated disclosure. He died suddenly in 2024 at 44, and the industry dedicated that year\u2019s disclosures to his memory.',
    src: 'https://en.wikipedia.org/wiki/Dan_Kaminsky'
  },
  {
    id: 'draper', name: 'John Draper', alias: 'Captain Crunch',
    role: 'Phreaker', life: 'b. 1943', img: 'John_Draper.jpg',
    credit: 'Wikimedia Commons — see file page for licence',
    bio: 'The father of phone phreaking, and the origin of the story the whole industry grew out of. A cereal whistle happened to emit exactly 2600 Hz — the tone the long-distance phone network used as an in-band control signal — and Draper showed that anyone could make free calls with it.',
    known: 'Building "blue boxes" and documenting how the Bell System\u2019s signalling could be fooled, techniques he shared with a young Steve Wozniak and Steve Jobs.',
    method: 'Tone generation against in-band signalling — the discovery that a network\u2019s control channel was audible to its users.',
    fate: 'Convicted of phone fraud and served time. Later he became a legitimate software developer, writing the word processor EasyWriter, and continued speaking at hacker conferences into his eighties.',
    src: 'https://en.wikipedia.org/wiki/John_Draper'
  },
  {
    id: 'mcafee', name: 'John McAfee', alias: '',
    role: 'Security pioneer', life: '1945 – 2021', img: 'John_McAfee_by_Gage_Skidmore_(cropped).jpg',
    credit: 'Gage Skidmore, CC BY-SA 3.0',
    bio: 'He wrote the first commercial antivirus program in 1987 after seeing a demonstration of the Brain virus, and built one of the most recognised security brands in the world. He spent his later years as a cryptocurrency evangelist and fugitive.',
    known: 'Creating McAfee Associates — the product that named an entire industry — and stepping away from the company before it grew into a multibillion-dollar business.',
    method: 'Signature-based detection: the original idea that you could identify malware by what it looked like rather than what it did.',
    fate: 'Left the company in 1994. In 2012 he was a person of interest in a neighbour\u2019s murder in Belize and fled to Guatemala. He ran for US president twice, and took his own life in a Spanish prison in 2021 while facing extradition to the US on tax charges.',
    src: 'https://en.wikipedia.org/wiki/John_McAfee'
  },
  {
    id: 'anonymous', name: 'Anonymous', alias: 'the Guy Fawkes mask',
    role: 'Collective', life: 'active since 2003', img: 'Anonymous_at_Scientology_in_Los_Angeles.jpg',
    credit: 'Vincent Diamante, CC BY-SA 2.0',
    bio: 'Not an organisation but a label anyone can adopt: no membership, no leadership, and no way to arrest your way to the top. The mask comes from the graphic novel V for Vendetta, adopted at the 2008 protests against the Church of Scientology.',
    known: 'Project Chanology against Scientology, Operation Payback in support of WikiLeaks, the Sony and PBS intrusions through LulzSec, and sustained campaigns against governments and corporations.',
    method: 'Loosely coordinated DDoS using tools like Low Orbit Ion Cannon, plus a handful of genuinely skilled operators doing the actual intrusions while thousands supplied traffic.',
    fate: 'Never dismantled because there was nothing to dismantle. Key organisers including Hector Monsegur were arrested, and the label continues to be used — which is exactly the point of it.',
    src: 'https://en.wikipedia.org/wiki/Anonymous_(hacker_group)'
  },
  {
    id: 'deguzman', name: 'Onel de Guzman', alias: '',
    role: 'Hacker', life: 'b. 1982', img: null,
    glyph: '\u2709\ufe0f', theme: 'mail',
    credit: '',
    bio: 'A computer student in Manila who wrote the ILOVEYOU worm and released it into a Usenet group in May 2000. His stated aim was modest: steal internet service provider passwords so he and his friends could get free dial-up access.',
    known: 'The ILOVEYOU worm — around 45 million machines infected, and the most copied email of its year.',
    method: 'A Visual Basic script that mailed itself to everyone in the victim\u2019s address book, exploiting trust rather than a technical hole.',
    fate: 'Philippine law had no statute covering what he did; charges were eventually dropped. The case is credited with pushing the Philippine E-Commerce Act through later in 2000. He later said he regretted it and worked in IT support.',
    src: 'https://en.wikipedia.org/wiki/Onel_de_Guzman'
  },
  {
    id: 'stoll', name: 'Clifford Stoll', alias: '',
    role: 'Defender — the hunter', life: 'b. 1950', img: 'Clifford_Stoll_at_CrowdStrike_Fal.Con_-_53946356524.jpg',
    credit: 'heipei, CC BY-SA 2.0',
    bio: 'An astronomer at Lawrence Berkeley Laboratory who noticed a 75-cent discrepancy in computer time billing and refused to let it go. He ran the trail for months, printed his logs on a line printer, and baited the intruder with honeypot accounts at a dollar each.',
    known: 'Tracking the Cuckoo\u2019s Egg — a KGB-funded intrusion running through Tymnet to Hanover, Germany — and writing it up as one of the great detective stories of computing.',
    method: 'Meticulous manual log analysis, honeypots, and a lot of tape.',
    fate: 'His book The Cuckoo\u2019s Egg became a bestseller and is still the standard introduction to incident response. He later warned repeatedly — and correctly — that the internet would become a channel for fraud and crime.',
    src: 'https://en.wikipedia.org/wiki/Clifford_Stoll'
  },
  {
    id: 'monsegur', name: 'Hector Monsegur', alias: 'Sabu',
    role: 'Hacker — later a federal informant', life: 'b. 1984', img: null,
    glyph: '\ud83c\udfad', theme: 'mask',
    credit: '',
    bio: 'The organizer behind LulzSec during its 50 days of attacks in 2011, and one of the most consequential informants in American cybercrime history. He ran the group\u2019s most aggressive operations while secretly working for the FBI.',
    known: 'Coordinating intrusions against Sony, PBS, the CIA\u2019s public website and the US Senate, while serving as Anonymous\u2019 central operator.',
    method: 'SQL injection, social engineering, and an unusual capacity for being in every chat room at once.',
    fate: 'Arrested in June 2011 and turned informant almost immediately. His cooperation led to arrests including Jeremy Hammond, who got 10 years for the Stratfor hack. Monsegur himself faced up to 126 years and received time served — seven months — plus supervised release.',
    src: 'https://en.wikipedia.org/wiki/Hector_Monsegur'
  }
];

/* Hat classification for the roster (white / grey / black). */
const HATS = {
  mitnick:'grey', morris:'grey', lamo:'grey', swartz:'grey', snowden:'grey',
  manning:'grey', assange:'grey', poulsen:'grey', mckinnon:'grey', hotz:'grey',
  kaminsky:'white', draper:'grey', mcafee:'grey', anonymous:'grey',
  deguzman:'black', stoll:'white', monsegur:'black'
};
PEOPLE.forEach(p => { p.hat = HATS[p.id] || 'grey'; });

const HAT_LABELS = {
  white: 'White hat',
  grey:  'Grey hat',
  black: 'Black hat'
};

/* The game-cracking and DRM history timeline */
const GAME_MILESTONES = [
  {
    year: '1985', tag: 'The scene begins',
    title: 'Razor 1911 and the art of the cracktro',
    body: 'Razor 1911 formed on the Commodore 64 in Norway in 1985, and Fairlight followed in Sweden in 1987. Groups competed to release cracked games first, and every release opened with a cracktro — a short scrolling intro with music that functioned as both signature and advertisement. The scene rewarded speed and style, not money.'
  },
  {
    year: '1987–1992', tag: 'Postal swap networks',
    title: 'Disks in the post',
    body: 'Before cheap modems, games travelled by mail. Swappers posted disks to networks of contacts; BBSes arranged local exchange. On the Amiga and C64, suppliers got originals through distributors and contacts, crackers removed the protections, and everything spread outward. Copy protection rarely survived contact with a determined teenager and a spare afternoon.'
  },
  {
    year: '1992', tag: 'Court',
    title: 'Sega v. Accolade',
    body: 'Sega sued Accolade for copying its code while making compatible games. The Ninth Circuit held that the intermediate copying done to discover functional interface information was fair use in the circumstances. It was not a licence to copy games or distribute circumvention tools — but it did establish that reverse engineering had legitimate purposes. The same year, Atari v. Nintendo went the other way for Atari, because it had obtained a copy under false pretences.'
  },
  {
    year: '1998', tag: 'Law',
    title: 'DMCA Section 1201',
    body: 'US law made it illegal to circumvent technological measures controlling access to copyrighted works, and separately to traffic in tools that do so. Exemptions exist but are limited and reviewed every three years. From this point, the legal risk of cracking shifted decisively from copying games to defeating protections.'
  },
  {
    year: '2001–2005', tag: 'Enforcement',
    title: 'Buccaneer, Fastlink, Site Down',
    body: 'The DOJ moved on the infrastructure rather than individual crackers: Operation Buccaneer in 2001 against DrinkOrDie, Operation Fastlink in 2004 with over 120 searches naming game groups including Fairlight and Kalisto, and Operation Site Down in 2005 with over 90 searches across ten countries. In 2003 a former Razor 1911 leader was sentenced to 18 months. In 2007 a DrinkOrDie leader was extradited from Australia and got 51 months.'
  },
  {
    year: '2008–2010', tag: 'Backlash',
    title: 'DRM that punished the buyers',
    body: 'Spore shipped with SecuROM and a three-activation limit raised to five after the outcry; consumers filed a class-action complaint over disclosure. The Settlers 7 required a constant internet connection, and when Ubisoft ran server maintenance in 2012, legitimate owners simply could not play. StarForce and SecuROM drivers aged badly, breaking games on newer hardware. The copy protection became the most reliably broken part of the experience — just not by pirates.'
  },
  {
    year: '2010–2011', tag: 'Consoles',
    title: 'OtherOS, GeoHot and the reset glitch',
    body: 'Sony removed the PS3\u2019s ability to run Linux in April 2010; George Hotz published the console\u2019s security details and Sony sued him, settling in April 2011 with a permanent injunction. Separately, researchers found the Xbox 360 Reset Glitch Hack — a hardware timing vulnerability that let unsigned code run, showing the limits of cryptographic boot checks when the hardware itself can be manipulated. Note: neither of these caused the 2011 PSN breach.'
  },
  {
    year: '2016–2022', tag: 'The arms race',
    title: 'Denuvo changes the economics',
    body: 'Denuvo did not make games uncrackable — it made them expensive to crack in time. Its value is the launch window, when a pirated copy would cost the most sales. In 2016 one title survived for months while another fell in record time; in 2020 the group CPY released four protected titles in a single day. In February 2022 CODEX announced it was retiring, saying it had reached its goal and the scene lacked serious competition. The scene slowed because the cost of winning rose, not because it lost.'
  },
  {
    year: 'Today', tag: 'Where it stands',
    title: 'Always online, and preservation at risk',
    body: 'The modern battleground is not the disc — it is the account. Launchers, launch-day online checks and server-dependent games mean that a working, paid-for copy stops working when the publisher turns the service off. That is the same single-point-of-failure pattern as always-on DRM, now with years of legacy games to lose. This page documents that history; it does not host, link to or distribute cracks, keygens or pirated software.'
  }
];

const GLOSSARY = [
  { term: 'Crack', def: 'A modified copy of a program with its copy protection removed so it runs without the original media or a valid key.' },
  { term: 'Keygen', def: 'A program that generates serial numbers, typically by reproducing the software\u2019s validation algorithm rather than stealing keys.' },
  { term: 'Trainer', def: 'A cheat program that alters game behaviour while it runs — money, health, unlocks. Not the same thing as a crack.' },
  { term: 'Crackme', def: 'A small program deliberately written as a reverse-engineering exercise. Its author intends it to be analysed, which is what makes it legal practice.' },
  { term: 'Cracktro', def: 'The short animated intro with music that opened a cracked release — the scene\u2019s signature, and its art form.' },
  { term: 'Warez', def: 'Pirated commercial software distributed through the scene, BBSes and later file-sharing networks.' },
  { term: 'Phreaking', def: 'Manipulating the telephone network — originally with in-band control tones like 2600 Hz — to make free calls. The direct ancestor of hacking.' },
  { term: 'Prompt injection', def: 'Hiding instructions inside content an AI model reads, so the model obeys an attacker instead of its user. Indirect injection uses content the model fetches itself.' },
  { term: 'Botnet', def: 'A network of compromised devices controlled by someone else. P2P botnets distribute that control across the devices rather than through one server.' },
  { term: 'Sinkhole', def: 'Redirecting a botnet\u2019s peer traffic to a server you control, cutting operators off from their own machines. It disrupts the network but does not clean the hosts.' }
];

/* The Breach Files — historical incident dataset.
   Sourced from public reporting, CVE records, court documents and vendor advisories. */

const CATEGORIES = {
  early:     { label: 'Early Waves & Phreaking', color: '#5b8cff' },
  malware:   { label: 'Malware & Worms',         color: '#a97bff' },
  crime:     { label: 'Cybercrime & Fraud',      color: '#ff9d45' },
  state:     { label: 'State & Cyberwar',        color: '#ff5c6c' },
  activism:  { label: 'Hacktivism & Leaks',      color: '#3ddc97' },
  vuln:      { label: 'Zero-days & Flaws',       color: '#ffd166' },
  games:     { label: 'Games & DRM',             color: '#22d3ee' },
  ai:        { label: 'AI-Era Threats',          color: '#f472b6' },
  p2p:       { label: 'P2P & Botnets',           color: '#94a3b8' }
};

const IMG = (file, w) => 'https://commons.wikimedia.org/wiki/Special:FilePath/' + file + '?width=' + (w || 400);

const INCIDENTS = [
  {
    id: 'creeper', year: 1971, date: '1971', cat: 'early', sev: 1,
    title: 'Creeper — the program that wandered',
    actor: 'Bob Thomas, BBN Technologies',
    motive: 'A lab experiment to prove a program could travel between machines on a network. It was never meant to harm anything.',
    flaw: 'No flaw was exploited. TENEX hosts on the early ARPANET happily ran a mobile program because nobody had imagined they should not.',
    impact: 'Printed "I\'M THE CREEPER — CATCH ME IF YOU CAN" on connected DEC PDP-10 terminals. No data lost, no system damaged. Ray Tomlinson later wrote a replicating variant, and Reaper was written to chase it down.',
    fix: 'The whole discipline started here: the idea that something can move across a network without permission, and something else has to be built to stop it.',
    lesson: 'If it can move, it can be made to move against you.',
    src: [{ t: 'Creeper (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Creeper_(program)' }]
  },
  {
    id: 'x414', year: 1983, date: 'Sept 1983', cat: 'early', sev: 2,
    title: 'The 414s — six teenagers and a printer full of secrets',
    actor: 'The 414s, Milwaukee (Neal Patrick, Evan Hoeppner and friends)',
    motive: 'Curiosity. High-school students with a borrowed dial-up terminal who wanted to see how far they could get.',
    flaw: 'Default and trivially guessable passwords on dial-up systems reachable from public networks. Almost nobody had written a rule saying a teenager should not be in.',
    impact: 'Roughly 60 systems penetrated, including Los Alamos, a Sloan-Kettering cancer institute, and a bank. A hospital accidentally deleted billing records worth about $1,500. One member showed a CBS reporter live how to break into a system.',
    fix: 'The arrests became the first widely covered "kids vs. computers" panic in the US. Password policy, access controls and the first real public debate about computer crime law followed.',
    lesson: 'Most early "hacking" was not clever — it was nobody having said no yet.',
    src: [{ t: 'The 414s (Wikipedia)', u: 'https://en.wikipedia.org/wiki/414s' }]
  },
  {
    id: 'cuckoo', year: 1986, date: '1986–1987', cat: 'state', sev: 3,
    title: "The Cuckoo's Egg — a spy in the lab",
    actor: 'Markus Hess, Hamburg hacker scene (paid by the KGB)',
    motive: 'Money and ideology. Hess and associates sold access and stolen files to Soviet intelligence.',
    flaw: 'Trusted relationships between research machines — weak passwords, .rhosts-style host trust, and the assumption that a friendly network is a safe network.',
    impact: 'About 40 machines penetrated across US research labs and military-connected systems, including facilities linked to the Strategic Defense Initiative. Stolen material reached the KGB.',
    fix: 'Astronomer Clifford Stoll noticed a 75-cent accounting mismatch, printed his logs on a line printer, and baited accounts with honeypot files at a dollar each. The trail ran through Tymnet to Hanover, Germany; Hess was convicted in 1990. The lesson became intrusion detection: watch the logs, not just the walls.',
    lesson: 'A 75-cent error beat a national intelligence service.',
    src: [{ t: "The Cuckoo's Egg (Wikipedia)", u: 'https://en.wikipedia.org/wiki/The_Cuckoo%27s_Egg' }]
  },
  {
    id: 'mitnick', year: 1988, date: '1979–1995', cat: 'early', sev: 4,
    title: 'Kevin Mitnick — the man who hacked people',
    actor: 'Kevin Mitnick (alias "Condor")',
    motive: 'Thrill and access. Mitnick has said he did it for the rush and for the software itself, not for money.',
    flaw: 'Human beings. Mitnick cloned pagers, persuaded technicians to reveal passwords, and posed as insiders. Technical controls are useless when staff will hand over the keys to a friendly voice.',
    impact: 'Broke into DEC, Pacific Bell, Motorola, Sun and IBM, stealing source code including a copy of the core of the cell-phone network. For years he was the FBI\u2019s most wanted computer criminal; his 1995 arrest followed a manhunt reported at $300 million.',
    fix: 'Call-back verification, staff verification procedures, and social engineering as a named training topic. Also a hard lesson in over-punishment: a judge held him in solitary for months citing his "silver tongue."',
    lesson: 'The weakest component ships with the human.',
    src: [{ t: 'Kevin Mitnick (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Kevin_Mitnick' }]
  },
  {
    id: 'morris', year: 1988, date: '2 Nov 1988', cat: 'malware', sev: 5,
    title: 'The Morris Worm — the day the Internet fell over',
    actor: 'Robert Tappan Morris, Cornell graduate student',
    motive: 'An experiment to measure how big the Internet was. Morris later said he did not intend the damage; his own code had a bug that made reinfection fatal.',
    flaw: 'A buffer overflow in the UNIX fingerd service, a sendmail debug mode that would execute commands, and trusted-host relationships (rsh/rexecd) that let it move between machines without a password.',
    impact: 'About 6,000 of roughly 60,000 machines then on the Internet — around 10% — were hit within hours. Systems slowed to a crawl or had to be rebuilt from backups. It was the first worm to become national news.',
    fix: 'Patches shipped within days, but the structural response mattered more: Carnegie Mellon stood up the first CERT on 30 Nov 1988, and Morris became the first person convicted under the new Computer Fraud and Abuse Act (3 years probation, 400 hours community service).',
    lesson: 'Connectivity without incident response is a decision to be surprised.',
    img: { u: IMG('Morris_Worm.jpg'), cap: 'Morris Worm exhibit, Museum of Science', credit: 'Go Card USA, CC BY-SA 2.0', src: 'https://commons.wikimedia.org/wiki/File:Morris_Worm.jpg' },
    src: [{ t: 'Morris worm (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Morris_worm' }, { t: 'CERT/CC history', u: 'https://www.sei.cmu.edu/about/divisions/cert/index.cfm' }]
  },
  {
    id: 'sundevil', year: 1990, date: 'May 1990', cat: 'early', sev: 3,
    title: 'Operation Sun Devil — and the line between crime and speech',
    actor: 'US Secret Service (raids) vs. Legion of Doom, Phrack, and the Milwaukee computer club',
    motive: 'For the hackers: distribution of research and bragging rights. For the publishers: journalism about the systems they covered.',
    flaw: 'Robert Riggs had broken into BellSouth and copied the E911 routing document. Craig Neidorf ("Knight Lightning") published it in Phrack.',
    impact: 'Raids on more than 40 homes and BBS operators across the US, seizing computers and disks. The E911 case against Neidorf collapsed when it emerged the document was largely public information sold at a few hundred dollars.',
    fix: 'The charges were dropped and the Electronic Frontier Foundation was founded in 1990 to litigate the boundary between hacking and protected speech. Security through seizure turned out to be a civil-liberties question, not just a technical one.',
    lesson: 'Publishing research about a system is not the same as breaking into one.',
    src: [{ t: 'Operation Sun Devil (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Operation_Sun_Devil' }, { t: 'EFF: reverse engineering & fair use', u: 'https://www.eff.org/issues/coders/reverse-engineering-faq' }]
  },
  {
    id: 'poulsen', year: 1994, date: '1989–1995', cat: 'early', sev: 3,
    title: 'Kevin Poulsen — hacking the telephone to win a Porsche',
    actor: 'Kevin Poulsen ("Dark Dante")',
    motive: 'Prizes and access. He manipulated telephone switching systems to win radio call-in contests, and separately read FBI wiretap files.',
    flaw: 'Telco switching systems treated internal commands as trusted; there was no meaningful audit of who ordered what.',
    impact: 'Won two Porsches, $20,000 in cash and trips by ensuring his line was the 102nd caller. Also obtained law-enforcement wiretap records. Arrested in 1995 and sentenced to 51 months.',
    fix: 'Prosecution, and a lasting reminder that the infrastructure carrying your call is a computer like any other — with logs.',
    lesson: 'Every telephone system is a computer with a very old operating system.',
    src: [{ t: 'Kevin Poulsen (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Kevin_Poulsen' }]
  },
  {
    id: 'citibank', year: 1995, date: '1994–1995', cat: 'crime', sev: 4,
    title: 'The Citibank Heist — $10.7 million moved by keyboard',
    actor: 'Vladimir Levin and accomplices, St Petersburg',
    motive: 'Straight theft.',
    flaw: 'Stolen customer access codes for Citibank\u2019s cash-management system, plus weak transaction monitoring on high-value international transfers.',
    impact: 'About $10.7 million transferred to accounts around the world. Nearly all of it was recovered — all but roughly $400,000 — largely because banks froze the receiving accounts fast.',
    fix: 'Fraud monitoring, transaction limits and better authentication. It is often called the first Internet bank robbery; the exact entry route is still disputed, and the real lesson was that speed of detection, not prevention, saved the money.',
    lesson: 'Detection time is the metric that matters.',
    src: [{ t: 'Vladimir Levin (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Vladimir_Levin' }]
  },
  {
    id: 'moonlight', year: 1998, date: '1996–1998', cat: 'state', sev: 4,
    title: 'Moonlight Maze — the first great espionage trail',
    actor: 'Unidentified, long attributed to Russian state operators (never conclusively proven)',
    motive: 'Cyberespionage against the US Department of Defense, energy labs and universities.',
    flaw: 'Persistent low-level access to research networks, found not by a big alert but by a missing line in a log — a routine audit noticed an inconsistency.',
    impact: 'Massive volumes of documents pulled out over nearly two years. The investigation traced routing through a series of university accounts, ending at a Moscow ISP that cooperated with no one.',
    fix: 'Defence networks were hardened and incident response professionalised. The operation helped justify the creation of US military cyber command structures, and proved that log hygiene finds what signatures miss.',
    lesson: 'The discrepancy in the log is the alarm.',
    src: [{ t: 'Moonlight Maze (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Moonlight_Maze' }]
  },
  {
    id: 'l0pht', year: 1998, date: '1998', cat: 'early', sev: 2,
    title: 'L0pht testifies — hackers warn the Senate',
    actor: 'L0pht Heavy Industries (Mudge, Space Rogue, Weld Pond, Midge, Prophet, Kingpin, Nifty)',
    motive: 'Disclosure. They wanted the industry to fix what they kept finding.',
    flaw: 'Windows NT password hashing was weak enough that freely available tools could crack large numbers of hashes quickly — and the tools were already in the wrong hands.',
    impact: 'On 19 May 1998 seven of them testified before the US Senate that they could take down the entire Internet in 30 minutes and crack NT passwords in minutes. It was the first time hackers were treated as expert witnesses rather than defendants.',
    fix: 'Microsoft hardened password storage and shipped better defaults; the hearing established the convention of researcher-to-vendor disclosure that later became the CVE and bug-bounty economy.',
    lesson: 'Telling the defenders first works better than telling the market first.',
    src: [{ t: 'L0pht (Wikipedia)', u: 'https://en.wikipedia.org/wiki/L0pht' }]
  },
  {
    id: 'melissa', year: 1999, date: '26 Mar 1999', cat: 'malware', sev: 3,
    title: 'Melissa — the macro that emptied the mail server',
    actor: 'David Lee Smith, New Jersey',
    motive: 'Unclear; he released the Word macro worm into a Usenet group and appears to have lost control of it almost immediately.',
    flaw: 'Word macro auto-execution combined with Outlook reading the victim\u2019s own address book to mail itself to 50 contacts. The worm used the victim\u2019s identity, so it arrived from a trusted sender.',
    impact: 'Mail systems at major corporations and government agencies locked up under the flood within hours. Widely-cited damages of $80 million are an estimate, not a verified figure.',
    fix: 'Macro security policies, attachment filtering and mass-mailing limits became normal. It also taught the industry that the address book is an attack surface.',
    lesson: 'Trust travels faster than malware.',
    src: [{ t: 'Melissa (worm)', u: 'https://en.wikipedia.org/wiki/Melissa_(worm)' }]
  },
  {
    id: 'iloveyou', year: 2000, date: '4 May 2000', cat: 'malware', sev: 5,
    title: 'ILOVEYOU — 45 million machines and one subject line',
    actor: 'Onel de Guzman, Manila, Philippines',
    motive: 'Money, of a very specific kind: to steal ISP dial-up passwords so he and friends could get free internet access. He was a student who had failed a thesis on exactly this idea.',
    flaw: 'Outlook automatically sending a Visual Basic script to everyone in the victim\u2019s address book, plus a Windows scripting weakness. The social engineering did the rest: people opened an attachment titled "LOVE-LETTER-FOR-YOU.txt.vbs".',
    impact: 'Reportedly around 45 million machines. Corporations disconnected email for days. Media, government and defence networks were hit worldwide — Sony, the Pentagon, the CIA and the UK Parliament among them.',
    fix: 'Attachment blocking, script restrictions, and a shift toward treating double extensions as a red flag. In the Philippines there was no law covering the act; the case pushed the E-Commerce Act through later that year.',
    lesson: 'Curiosity plus a plausible subject line beats any firewall.',
    src: [{ t: 'ILOVEYOU (Wikipedia)', u: 'https://en.wikipedia.org/wiki/ILOVEYOU' }]
  },
  {
    id: 'mafia', year: 2000, date: 'Feb 2000', cat: 'malware', sev: 4,
    title: 'Mafiaboy — a 15-year-old takes the web offline',
    actor: 'Michael Calce ("Mafiaboy"), Montreal',
    motive: 'Kudos in underground forums. He bragged afterwards and The Register published his confession.',
    flaw: 'Not a flaw in Yahoo at all: compromised university Sun servers were used for IP-spoofed SYN floods, exploiting machines that were reachable, unpatched and poorly filtered.',
    impact: 'Yahoo!, Amazon, eBay, CNN, Dell, E*Trade and others degraded or went down for hours. Yahoo\u2019s collapse during the Super Bowl season was a multi-million-dollar embarrassment.',
    fix: 'The event forced DDoS mitigation into mainstream budgeting: filtering, capacity planning and traffic scrubbing. It also pushed the industry toward the botnet-aware defence model we still use.',
    lesson: 'Availability is a security property, not an operations afterthought.',
    src: [{ t: 'Mafiaboy (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Mafiaboy' }]
  },
  {
    id: 'codered', year: 2001, date: '19 Jul 2001', cat: 'malware', sev: 4,
    title: 'Code Red — 250,000 hosts in nine hours',
    actor: 'Unknown (the defaced pages read "Hacked by Chinese!", but attribution was never established)',
    motive: 'Unknown; the worm defaced websites and later attempted a denial-of-service attack against the White House.',
    flaw: 'An unchecked buffer in the IIS Index Server ISAPI extension (idq.dll, CVE-2001-0500). The patch had been available for months before the outbreak.',
    impact: 'The GAO reported over 250,000 infections in nine hours — a spread rate nobody had measured before. Defaced sites carried a "Welcome to http://www.w3.org!" page.',
    fix: 'Microsoft shipped MS01-033 and the concept of "patch windows" entered mainstream IT. It was the first proof that an unpatched hole plus self-propagation equals a very short fuse.',
    lesson: 'Months of unpatched exposure is a countdown, not a risk.',
    src: [{ t: 'Code Red (worm)', u: 'https://en.wikipedia.org/wiki/Code_Red_(worm)' }]
  },
  {
    id: 'slammer', year: 2003, date: '25 Jan 2003', cat: 'malware', sev: 5,
    title: 'SQL Slammer — 375 bytes and ten minutes of chaos',
    actor: 'Unknown',
    motive: 'Unknown; no payload beyond self-propagation. It was a pure speed test that got loose.',
    flaw: 'A buffer overflow in Microsoft SQL Server 2000\u2019s Resolution Service on UDP port 1434 (MS02-039). The patch had shipped five months earlier; almost nobody applied it.',
    impact: 'The worm was only 375 bytes — small enough to fit in a single packet — and doubled roughly every 8.5 seconds. Over 90% of vulnerable hosts were infected within 10 minutes. Bank of America ATMs failed, Continental Airlines flights were cancelled, and Korea\u2019s national internet backbone was knocked out.',
    fix: 'Patch application and blocking UDP 1434 at the perimeter. The security industry took "unauthenticated, remote, self-propagating" as its new worst case.',
    lesson: 'Speed is a weapon: ten minutes is shorter than any change-management process.',
    src: [{ t: 'SQL Slammer (Wikipedia)', u: 'https://en.wikipedia.org/wiki/SQL_Slammer_worm' }]
  },
  {
    id: 'estonia', year: 2007, date: 'Apr–May 2007', cat: 'state', sev: 4,
    title: 'The cyberattack on Estonia',
    actor: 'Distributed participants; Russian state involvement was never proven, and attribution remains contested',
    motive: 'Political retaliation during the dispute over the Bronze Soldier war memorial in Tallinn.',
    flaw: 'No single flaw — volumetric DDoS and botnet traffic that simply overwhelmed capacity on services a small, highly digitised country depended on.',
    impact: 'Banks, parliament, ministries, newspapers and broadcasters went dark or degraded for weeks. Estonia, which ran much of its civic life online, discovered that its infrastructure was a strategic target.',
    fix: 'Traffic filtering, redundancy and international coordination. NATO established the Cooperative Cyber Defence Centre of Excellence in Tallinn in 2008, and the incident shaped the Tallinn Manual on how the laws of war apply in cyberspace.',
    lesson: 'A small connected country is a concentrated target.',
    src: [{ t: '2007 cyberattacks on Estonia', u: 'https://en.wikipedia.org/wiki/2007_cyberattacks_on_Estonia' }]
  },
  {
    id: 'gonzalez', year: 2007, date: '2005–2007', cat: 'crime', sev: 5,
    title: 'Albert Gonzalez — the car-park Wi-Fi heist',
    actor: 'Albert Gonzalez ("Mr. Scanner") and an international crew',
    motive: 'Carding at industrial scale. He sold the numbers on, and lived loudly enough to throw a $75,000 birthday party.',
    flaw: 'Unencrypted retailer wireless networks, reachable from a parked car, plus unprotected segmentation inside payment networks that let sniffers sit and collect.',
    impact: 'More than 40 million card numbers across the prosecuted scheme; TJX alone lost tens of millions of records. The Heartland case involved a alleged 130 million card records — at the time the largest card breach ever charged.',
    fix: 'WPA2 became standard for retail Wi-Fi, network segmentation and PCI-DSS enforcement tightened, and encrypted tokenisation spread. Gonzalez was sentenced to 20 years in 2010 — then an unprecedented sentence for hacking.',
    lesson: 'Your network perimeter includes the car park.',
    src: [{ t: 'Albert Gonzalez (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Albert_Gonzalez' }]
  },
  {
    id: 'aurora', year: 2010, date: 'Late 2009, disclosed 12 Jan 2010', cat: 'state', sev: 4,
    title: 'Operation Aurora — Google versus a state',
    actor: 'Attributed by Google to Chinese state actors',
    motive: 'Intellectual property theft, and access to the Gmail accounts of Chinese human-rights activists.',
    flaw: 'A zero-day in Internet Explorer combined with tailored malware. The initial entry is often reported as the IE flaw, though Google confirmed intrusion and theft without publicly confirming that specific vector.',
    impact: 'Google and more than 20 companies — Adobe, Juniper, Rackspace among them — were hit. Google said it had stolen intellectual property. It was the moment a major company publicly named a nation-state.',
    fix: 'Google stopped censoring its Chinese search service and withdrew from the mainland in January 2010. Internally it built BeyondCorp, the zero-trust architecture, and later founded Project Zero. The breach changed corporate security architecture.',
    lesson: 'Assume the perimeter is already crossed; verify every request.',
    src: [{ t: 'Operation Aurora (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Operation_Aurora' }]
  },
  {
    id: 'stuxnet', year: 2010, date: 'Discovered mid-2010', cat: 'state', sev: 5,
    title: 'Stuxnet — the first worm that broke things',
    actor: 'State-linked operation; US and Israeli involvement is widely alleged but never officially confirmed',
    motive: 'To sabotage Iran\u2019s uranium enrichment programme at Natanz without firing a shot.',
    flaw: 'Four Windows zero-days, stolen code-signing certificates from Realtek and JMicron (so the driver looked genuinely signed), and USB as the air-gap crossing. Inside, it told Siemens S7 programmable logic controllers to spin centrifuges at the wrong speed while replaying normal readings to the operators\u2019 monitors.',
    impact: 'The first malware publicly documented to cause physical destruction. Centrifuges were destroyed — exact numbers remain disputed and are mostly sourced to unnamed officials.',
    fix: 'Certificates were revoked, Windows patches shipped, and industrial control system security became a discipline in its own right: OT networks got segmented, monitored and air-gapped properly instead of nominally.',
    lesson: 'If it drives a machine, it is a weapons target.',
    img: { u: IMG('Enigma-Machine.jpg'), cap: 'Codebreaking heritage: an Enigma machine', credit: 'Public domain, CIA Museum', src: 'https://commons.wikimedia.org/wiki/File:Enigma-Machine.jpg' },
    src: [{ t: 'Stuxnet (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Stuxnet' }]
  },
  {
    id: 'psn', year: 2011, date: '17–19 Apr 2011', cat: 'games', sev: 5,
    title: 'The PlayStation Network breach',
    actor: 'Unidentified attacker; motive never established',
    motive: 'Unknown. The intrusion was reported as data theft rather than a ransom demand.',
    flaw: 'Entry was never publicly attributed to a single named vulnerability. The more damning failure was procedural: Sony took the scale seriously but told customers late.',
    impact: 'About 77 million accounts affected. PSN and Qriocity went offline for 23 days — one of the longest console-service outages ever. Names, emails, addresses and birthdates were taken. Card data was reported as hashed and encrypted; it should not be described as stolen.',
    fix: 'Infrastructure rebuilt, external security consultants hired, passwords reset, and a "Welcome Back" package offered. Australia\u2019s privacy regulator criticised the seven-day notification delay, and the case made breach-notification law a mainstream political issue.',
    lesson: 'Downtime is the cheap part; the delay in telling people is the expensive part.',
    src: [{ t: '2011 PlayStation Network outage', u: 'https://en.wikipedia.org/wiki/2011_PlayStation_Network_outage' }, { t: 'Sony PSN update, Apr 2011', u: 'https://blog.playstation.com/2011/04/26/update-on-playstation-network-and-qriocity/' }]
  },
  {
    id: 'lulzsec', year: 2011, date: 'May–Jun 2011', cat: 'activism', sev: 3,
    title: 'LulzSec — 50 days of chaos for the lulz',
    actor: 'LulzSec / Anonymous, coordinated by Hector Monsegur ("Sabu")',
    motive: '"For the lulz" — amusement and publicity, mixed with hacktivist targets like Fox and PBS after the WikiLeaks banking blockade.',
    flaw: 'Not one flaw but many: exposed databases, default credentials, unpatched web apps and basic misconfigurations on Sony, PBS, the CIA\u2019s public site and the US Senate.',
    impact: 'Fifty days of high-profile defacements and data dumps across Sony, PBS, the CIA website, the Senate and Bethpage. The group published its own "press releases" as if it were a company.',
    fix: 'Monsegur was arrested in June 2011 and became an informant; his cooperation led to arrests including Jeremy Hammond, later sentenced to 10 years for the Stratfor hack. The lesson for defenders: an unpatched public-facing CMS is a press release waiting to happen.',
    lesson: 'Most "sophisticated" intrusions are unpatched software.',
    img: { u: IMG('Anonymous_at_Scientology_in_Los_Angeles.jpg'), cap: 'Anonymous protesters, 2008', credit: 'Vincent Diamante, CC BY-SA 2.0', src: 'https://commons.wikimedia.org/wiki/File:Anonymous_at_Scientology_in_Los_Angeles.jpg' },
    src: [{ t: 'LulzSec (Wikipedia)', u: 'https://en.wikipedia.org/wiki/LulzSec' }]
  },
  {
    id: 'snowden', year: 2013, date: '5 Jun 2013', cat: 'activism', sev: 5,
    title: 'The Snowden disclosures',
    actor: 'Edward Snowden, NSA contractor working for Booz Allen Hamilton in Hawaii',
    motive: 'His stated purpose was public awareness: that bulk surveillance had grown far beyond what the public believed it had consented to.',
    flaw: 'Not an external exploit. Insider access plus a system permissive enough to let one administrator reach thousands of documents — the privilege problem, not the patch problem.',
    impact: 'Thousands of documents revealing bulk phone metadata collection under Section 215, PRISM, and tools such as XKeyscore. The reporting reshaped public trust in both governments and technology platforms worldwide.',
    fix: 'The USA FREEDOM Act of 2015 ended the government\u2019s bulk telephony metadata collection. Technology companies accelerated encryption in transit and at rest. Snowden was charged under the Espionage Act and has lived in Russia since 2013.',
    lesson: 'Insider risk scales with the size of the trust you grant.',
    src: [{ t: 'Edward Snowden', u: 'https://en.wikipedia.org/wiki/Edward_Snowden' }, { t: 'USA FREEDOM Act', u: 'https://en.wikipedia.org/wiki/USA_FREEDOM_Act' }]
  },
  {
    id: 'target', year: 2013, date: '27 Nov – 15 Dec 2013', cat: 'crime', sev: 5,
    title: 'Target — the air conditioner that broke retail',
    actor: 'Criminal group (initial access via stolen credentials)',
    motive: 'Payment-card theft at scale.',
    flaw: 'Stolen credentials belonging to Fazio Mechanical, a third-party HVAC contractor, gave entry through a portal. Attackers then installed RAM-scraping malware on point-of-sale terminals to read card data as it passed through memory. Note: the vendor did not control HVAC remotely for this attack.',
    impact: 'About 40 million payment cards and 70 million customer records. CEO Gregg Steinhafel resigned in May 2014. It became the textbook case for supply-chain risk.',
    fix: 'Vendor access segmented and monitored, POS hardened, faster chip-and-PIN (EMV) rollout, and third-party risk assessment made a board-level topic.',
    lesson: 'Your security boundary extends to every contractor\u2019s laptop.',
    src: [{ t: '2013 Target data breach', u: 'https://en.wikipedia.org/wiki/2013_Target_corporate_data_breach' }]
  },
  {
    id: 'heartbleed', year: 2014, date: '7 Apr 2014', cat: 'vuln', sev: 5,
    title: 'Heartbleed — the bug that made everyone change their passwords',
    actor: 'Found independently by Neel Mehta (Google) and the Codenomicon team; no single attacker was identified',
    motive: 'A bug, not an attack — but it sat silently exploitable for about two years.',
    flaw: 'The OpenSSL TLS heartbeat extension did not check that the claimed data length matched what was actually sent. Sending a bigger claim made the server reply with up to 64 KB of its own memory per request — passwords, session cookies, and private keys.',
    impact: 'Any vulnerable server could leak secrets on demand since roughly March 2012. Because it was silent and left no obvious log trail, nobody knows how many servers were read. Private keys had to be considered compromised globally.',
    fix: 'OpenSSL 1.0.1g shipped the same day, mass key rotation became standard practice, and Heartbleed.com let anyone test a server. It triggered a funding reckoning: the core of internet security was maintained by a handful of unpaid people.',
    lesson: 'Critical infrastructure gets the level of investment you put into it.',
    src: [{ t: 'Heartbleed (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Heartbleed' }, { t: 'CVE-2014-0160', u: 'https://nvd.nist.gov/vuln/detail/CVE-2014-0160' }]
  },
  {
    id: 'sony', year: 2014, date: '24 Nov 2014', cat: 'state', sev: 4,
    title: 'Sony Pictures — a studio gets erased',
    actor: '"Guardians of Peace"; attributed by the FBI to North Korea',
    motive: 'Retaliation for the film The Interview, according to US attribution.',
    flaw: 'Entry was never publicly established. What mattered was the payload: destructive wiper malware, not data exfiltration.',
    impact: 'Emails and unreleased films leaked, systems rendered inoperable, and the studio\u2019s internal communications became public gossip. The release of The Interview was briefly pulled from cinemas before a scaled-down online release.',
    fix: 'Systems rebuilt from scratch with credential resets and better segmentation. The incident pushed destructive attacks — as distinct from theft — into mainstream corporate risk registers, and started the debate about cyberattacks as acts of coercion against speech.',
    lesson: 'Backup is a geopolitical decision as much as a technical one.',
    src: [{ t: 'Sony Pictures Entertainment hack', u: 'https://en.wikipedia.org/wiki/Sony_Pictures_Entertainment_hack' }]
  },
  {
    id: 'dnc', year: 2016, date: '2015–2016', cat: 'state', sev: 5,
    title: 'The DNC hack and the weaponised leak',
    actor: 'APT28 (Fancy Bear) and APT29 (Cozy Bear), attributed to Russian military intelligence',
    motive: 'Espionage and election influence.',
    flaw: 'Spear-phishing — most infamously a fake Google security page that asked John Podesta to "change his password," redirecting him to a credential-harvesting page that looked correct. The response link was actually legitimate and read as such, which is what made it convincing.',
    impact: 'DNC and campaign emails stolen and published through WikiLeaks. DNC chair Debbie Wasserman Schultz resigned. No evidence was found that voting systems were altered — the damage was political, not mechanical.',
    fix: 'Multi-factor authentication enforced, intruders evicted, endpoint monitoring strengthened, and the incident became the canonical case study in how a phishing email shapes an election.',
    lesson: 'A URL can change a country.',
    src: [{ t: 'Democratic National Committee cyber-attacks', u: 'https://en.wikipedia.org/wiki/Democratic_National_Committee_cyber-attacks' }]
  },
  {
    id: 'equifax', year: 2017, date: 'Discovered 29 Jul, disclosed 7 Sep 2017', cat: 'crime', sev: 5,
    title: 'Equifax — 147 million people, one unpatched jar',
    actor: 'Four Chinese military officers indicted by the US (charges are allegations)',
    motive: 'Intelligence collection and economic espionage, as alleged.',
    flaw: 'Apache Struts CVE-2017-5638, publicly disclosed on 7 March 2017 with a patch available immediately. Equifax did not apply it for months. Behind that: plaintext credentials and network segmentation that failed to contain the intrusion for 76 days.',
    impact: 'About 147 million people — 145.5 million Social Security numbers, 209,000 payment cards, 15.2 million passport numbers. The data is permanent: a Social Security number cannot be reissued.',
    fix: 'A $700 million settlement with the FTC, resignations of the CIO, CISO and CFO, and criminal charges against the responsible executives. The real fix the industry took was patch governance: you cannot have a CVE process that depends on someone remembering.',
    lesson: 'A published patch is a deadline.',
    src: [{ t: '2017 Equifax data breach', u: 'https://en.wikipedia.org/wiki/2017_Equifax_data_breach' }, { t: 'CVE-2017-5638', u: 'https://nvd.nist.gov/vuln/detail/CVE-2017-5638' }]
  },
  {
    id: 'wannacry', year: 2017, date: '12 May 2017', cat: 'malware', sev: 5,
    title: 'WannaCry — hospitals held hostage',
    actor: 'Attributed by the US and UK to North Korea (Lazarus Group)',
    motive: 'Ransom, though the payments were trivial and the geopolitical effect was not.',
    flaw: 'EternalBlue — an exploit developed by the NSA, stolen and published by the Shadow Brokers group in April 2017 — hitting unpatched Windows SMBv1 (MS17-010). The patch had been released a month earlier.',
    impact: 'Over 150 countries in hours. The UK\u2019s NHS was the emblem: about 19,000 appointments cancelled, ambulances diverted, systems shut down for weeks. Car plants, railways, banks and logistics stopped.',
    fix: 'Marcus Hutchins found a kill-switch domain in the code and registered it, halting much of the spread — a researcher stopping a global outbreak by accident. MS17-010 was pushed out, SMBv1 disabled, and the whole affair became the argument for offline backups and for not stockpiling exploits.',
    lesson: 'Someone else\u2019s leaked exploit is your patching deadline.',
    src: [{ t: 'WannaCry ransomware attack', u: 'https://en.wikipedia.org/wiki/WannaCry_ransomware_attack' }]
  },
  {
    id: 'notpetya', year: 2017, date: '27 Jun 2017', cat: 'state', sev: 5,
    title: 'NotPetya — $10 billion of collateral damage',
    actor: 'Attributed by the US, UK and others to Russian military intelligence (Sandworm)',
    motive: 'Destruction, aimed at Ukraine — the ransom note was camouflage.',
    flaw: 'Compromised update server for M.E.Doc, Ukrainian tax software that most Ukrainian businesses were required to use, plus EternalBlue for lateral movement. The update channel was trusted because it was legitimate.',
    impact: 'Global collateral damage: Maersk lost about $300 million and rebuilt 4,000 servers and 45,000 PCs in ten days — saved only because a Ghanaian domain controller was offline due to a power cut. FedEx/TNT reported roughly $400 million; Merck hundreds of millions more. Total damages estimated around $10 billion.',
    fix: 'Segmentation, multi-factor authentication, offline backups and patch discipline. It also triggered insurance litigation over whether "cyber" counts as physical damage, and permanently changed how companies treat software supply chains.',
    lesson: 'You trust every update channel you install from.',
    src: [{ t: 'Petya cyberattack', u: 'https://en.wikipedia.org/wiki/Petya_cyberattack' }]
  },
  {
    id: 'solarwinds', year: 2020, date: 'Disclosed 13 Dec 2020', cat: 'state', sev: 5,
    title: 'SolarWinds SUNBURST — the update that was the backdoor',
    actor: 'Russian Foreign Intelligence Service (SVR), per US government attribution',
    motive: 'Long-term espionage against US government agencies and technology companies.',
    flaw: 'The attackers infiltrated the SolarWinds Orion build environment and inserted their code into legitimately signed updates. Roughly 18,000 customers installed it; a far smaller, deliberately selected group — the US Treasury, Commerce, parts of the Pentagon and others — was actually exploited.',
    impact: 'One of the most consequential espionage operations ever discovered, distinguished by its patience: the malware lay dormant, communicated through DNS traffic disguised as Orion software updates, and selected targets carefully.',
    fix: 'Detection came from FireEye noticing its own red-team tools had been stolen. The response reshaped policy: Executive Order 14028 in May 2021, mandatory SBOMs, zero-trust architecture requirements, and a rethinking of build pipelines as critical infrastructure.',
    lesson: 'Your build server is your crown jewels.',
    src: [{ t: '2020 SolarWinds supply chain attack', u: 'https://en.wikipedia.org/wiki/2020_SolarWinds_supply_chain_attack' }]
  },
  {
    id: 'colonial', year: 2021, date: '7 May 2021', cat: 'crime', sev: 5,
    title: 'Colonial Pipeline — the ransomware that stopped the fuel',
    actor: 'DarkSide, a Russian-speaking ransomware-as-a-service operation',
    motive: 'Money. The group even issued an apology-style statement saying it was "apolitical."',
    flaw: 'A legacy VPN account with a reused password and no multi-factor authentication — a single old credential, long forgotten.',
    impact: 'Colonial shut down 5,500 miles of pipeline — the main fuel supply to the US East Coast — for six days out of caution, because its billing systems were down and it could not bill what it shipped. Fuel shortages, panic buying and price spikes followed. Colonial paid 75.66 BTC, about $4.4 million.',
    fix: 'The DOJ recovered roughly $2.3 million of the ransom in June. Multi-factor authentication on all remote access became a board talking point, IT/OT separation got funded, and the TSA issued security directives for pipelines.',
    lesson: 'One forgotten account can stop a continent\u2019s fuel supply.',
    src: [{ t: 'Colonial Pipeline ransomware attack', u: 'https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack' }]
  },
  {
    id: 'log4shell', year: 2021, date: 'Disclosed 10 Dec 2021', cat: 'vuln', sev: 5,
    title: 'Log4Shell — a library everyone had and nobody looked at',
    actor: 'No single attacker: exploited within hours by criminal groups, botnets and state actors alike',
    motive: 'Everything at once — cryptomining, botnet recruitment, ransomware and espionage.',
    flaw: 'Log4j supported JNDI lookups inside logged messages. An attacker who could get any string logged — a username, an HTTP header, a chat message — could make the logger fetch and execute remote code. In Minecraft, a player\u2019s nickname was enough.',
    impact: 'Log4j is inside an enormous share of Java software, from consumer apps to enterprise and industrial products. Exploitation and scanning were universal within hours of disclosure. There is no single reliable victim count, which is itself the point.',
    fix: 'Upgrade to fixed Log4j releases, disable JNDI lookups, inventory everything. The deeper fix is still incomplete: open-source maintainers of critical libraries remain underfunded, which is exactly the failure mode Heartbleed exposed.',
    lesson: 'You are running code you have never read, maintained by people you have never funded.',
    src: [{ t: 'Log4j (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Log4j' }, { t: 'CISA on Log4Shell', u: 'https://www.cisa.gov/news-events/alerts/2021/12/10/apache-log4j-vulnerability-active-exploitation' }]
  },
  {
    id: 'moveit', year: 2023, date: 'From 27 May 2023', cat: 'crime', sev: 5,
    title: 'MOVEit — the file transfer everyone used',
    actor: 'CL0P, a Russian-speaking extortion group',
    motive: 'Data theft and extortion: steal first, then demand payment not to publish.',
    flaw: 'CVE-2023-34362, a SQL injection in Progress MOVEit Transfer, exploited in bulk with web shells planted on victim appliances. A second flaw, CVE-2023-35708, was chained in.',
    impact: 'Thousands of organisations including the BBC, British Airways, Shell, US universities and a US Department of Energy entity. Tens of millions of individuals had personal data exposed. CL0P ran a public countdown site to pressure victims.',
    fix: 'Emergency patching, then a hard industry re-think of internet-facing managed file transfer appliances — they are convenient, powerful and rarely monitored. The group\u2019s mass-exploitation model has since become the template for extortion.',
    lesson: 'Convenience appliances are the highest-value perimeter you own.',
    src: [{ t: '2023 MOVEit data breach', u: 'https://en.wikipedia.org/wiki/2023_MOVEit_data_breach' }]
  },
  {
    id: 'snowflake', year: 2023, date: 'From mid-2023, disclosed 2024', cat: 'crime', sev: 5,
    title: 'Snowflake — stolen passwords, no breach of the platform',
    actor: 'UNC3944 / Scattered Spider, using infostealer malware',
    motive: 'Extortion and resale of stolen customer data.',
    flaw: 'Customer accounts had no multi-factor authentication and no IP restrictions. Credentials were harvested by infostealer malware on an employee\u2019s endpoint, then used with legitimate tools — no exploit of Snowflake itself was needed.',
    impact: 'AT&T disclosed about 109 million customer records including 73 million unique customers; Santander and others were affected. Reported totals across victims ran into hundreds of millions of records.',
    fix: 'MFA and network policy enforcement on data platforms, infostealer-aware endpoint controls, and credential rotation. The lesson: a SaaS platform is only as strong as the authentication its customers enable.',
    lesson: 'Shared responsibility means your MFA is your perimeter.',
    src: [{ t: 'Snowflake data theft campaign', u: 'https://en.wikipedia.org/wiki/Snowflake_data_theft_campaign' }]
  }
];

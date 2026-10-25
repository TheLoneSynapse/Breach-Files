/* The Breach Files — AI-era and peer-to-peer threat datasets.
   Merged into INCIDENTS at runtime by app.js. */

const AI_INCIDENTS = [
  {
    id: 'evil-llm', year: 2023, date: '2023–2024', cat: 'ai', sev: 2,
    title: 'WormGPT, FraudGPT and the "evil LLM" boom',
    actor: 'Underground forum vendors, mostly unknown individuals',
    motive: 'Subscription money from criminals who want a chatbot with no rules.',
    flaw: 'Not a vulnerability in any specific product: criminals wrapped open models (WormGPT was reportedly built on GPT-J and trained on malware-related material) and marketed them as attack tools.',
    impact: 'Demonstrations included CEO-impersonation phishing and snippets of malicious Python. Sophos and others found the forum evidence did not match the marketing: mostly proof-of-concept, scams, and very few genuinely novel techniques. WormGPT\u2019s developer reportedly shut it down after publicity.',
    fix: 'The industry stopped treating model names as a threat category and started measuring capability instead. Google\u2019s later assessment: AI measurably improves phishing, translation and code assistance — but as of mid-2025 there was still no game-changing AI-only attack or self-propagating AI campaign.',
    lesson: 'The scary branding was the product. The capability was incremental.',
    src: [{ t: 'Sophos: criminals can\u2019t agree on GPTs', u: 'https://www.sophos.com/en-us/blog/cybercriminals-cant-agree-on-gpts' }, { t: 'WormGPT / FraudGPT analysis', u: 'https://www.levelblue.com/blogs/spiderlabs-blog/wormgpt-and-fraudgpt-the-rise-of-malicious-llms' }]
  },
  {
    id: 'deepfake-cfo', year: 2024, date: 'Jan 2024', cat: 'ai', sev: 5,
    title: 'The video call where everyone was fake',
    actor: 'Unidentified fraud group targeting a multinational\u2019s Hong Kong office',
    motive: 'Direct theft through authorised-looking payment instructions.',
    flaw: 'No software vulnerability at all. Identity verification in the payment process relied on recognising faces and voices — exactly what generative video now defeats.',
    impact: 'An employee was fooled by a video conference in which the finance chief and other participants were deepfakes. HK$200 million (about US$25.6 million) left the company in 15 transfers.',
    fix: 'Payment controls that do not depend on appearance: independent verification through a separately known channel, dual approval, and callbacks to numbers you already had before the request. "I recognised the executive" is no longer evidence.',
    lesson: 'Seeing is no longer believing; verify out-of-band.',
    src: [{ t: 'SCMP report on the HK deepfake fraud', u: 'https://www.scmp.com/news/hong-kong/law-and-crime/article/3250851/everyone-looked-real-multinational-firms-hong-kong-office-loses-hk200-million-after-scammers-stage' }]
  },
  {
    id: 'big-sleep', year: 2024, date: 'Nov 2024', cat: 'ai', sev: 3,
    title: 'Big Sleep finds a real bug in SQLite',
    actor: 'Google Project Zero and DeepMind (AI agent "Big Sleep", successor to Naptime)',
    motive: 'Defensive research: proving an AI agent could find a previously unknown, exploitable memory-safety bug in production software.',
    flaw: 'A stack buffer underflow in SQLite\u2019s seriesBestIndex — a -1 sentinel used as an array index, allowing a write below the array in release builds where the debug assertion would not catch it.',
    impact: 'Widely reported as the first public example of an AI agent finding an exploitable memory-safety flaw in widely used software. Crucially, the bug was in unreleased code: users were never exposed.',
    fix: 'SQLite maintainers fixed it the same day it was reported. The method matters — the agent used a prior SQLite change as a seed for variant analysis rather than guessing from scratch.',
    lesson: 'AI found it in code nobody had read yet — because nobody had time to.',
    src: [{ t: 'Project Zero: from Naptime to Big Sleep', u: 'https://projectzero.google/2024/10/from-naptime-to-big-sleep.html' }]
  },
  {
    id: 'slopsquatting', year: 2025, date: '2024–2025', cat: 'ai', sev: 3,
    title: 'Slopsquatting — squatting on a package that never existed',
    actor: 'Hypothetical-but-practical supply-chain attacker; no large confirmed compromise verified',
    motive: 'Get developers to install malware by registering a dependency an AI invented.',
    flaw: 'Code models hallucinate package names. A USENIX Security 2025 study across 576,000 generated code samples found hallucinated recommendations averaged at least 5.2% for commercial models and 21.7% for open-source models, with 205,474 unique invented names.',
    impact: 'If a developer trusts the generated import and installs it, the package registry becomes the malware delivery channel. This is the dependency-confusion idea applied to something a model made up on the spot.',
    fix: 'Pin and verify dependencies against the real registry before installing, prefer lockfiles, and treat an unfamiliar package name in generated code as a red flag rather than a shortcut.',
    lesson: 'Hallucination becomes an attack vector the moment you run it.',
    src: [{ t: 'USENIX paper: package hallucinations', u: 'https://arxiv.org/abs/2406.10279' }]
  },
  {
    id: 'echoleak', year: 2025, date: 'CVE published 11 Jun 2025', cat: 'ai', sev: 5,
    title: 'EchoLeak — zero-click data theft from an AI assistant',
    actor: 'Aim Security (researchers who discovered and reported it)',
    motive: 'Proof that an enterprise assistant becomes an exfiltration path with no user interaction at all.',
    flaw: 'CVE-2025-32711, an indirect prompt-injection flaw in Microsoft 365 Copilot. A crafted email could influence the assistant into putting private context into an automatically fetched image or link, with the reported chain using a Microsoft Teams proxy to get the data out. CVSS 3.1: 9.3. No user click required.',
    impact: 'An assistant with access to mail and organisational data could be turned into a silent reader for anyone who could get an email into the inbox. The flaw was in the application\u2019s trust boundaries — not in the model weights.',
    fix: 'Microsoft deployed a server-side fix in May 2025, before public disclosure. The general fix is architectural: retrieval, tools and outbound requests must be treated as untrusted input, with egress controls on what an assistant may fetch.',
    lesson: 'An assistant with inbox access is a new attack surface, not a new feature.',
    src: [{ t: 'CVE-2025-32711 record', u: 'https://cveawg.mitre.org/api/cve/CVE-2025-32711' }, { t: 'Technical case study', u: 'https://arxiv.org/html/2509.10540v1' }]
  },
  {
    id: 'mcp-poison', year: 2025, date: '2025', cat: 'ai', sev: 4,
    title: 'MCP tool poisoning — the attack hiding in a tool description',
    actor: 'Invariant Labs (demonstrators); separate CVEs found by independent researchers',
    motive: 'Show that agents trust metadata the user never sees — then weaponise it.',
    flaw: 'Model Context Protocol servers expose tool descriptions to the model but not always to the human. Invariant demonstrated instructions hidden in an apparently harmless description, and a "rug pull" where a server changed its description after approval. A follow-up made a malicious server induce an agent connected to a trusted WhatsApp MCP server to send chat history out.',
    impact: 'Real CVEs accompanied the research: CVE-2025-49596 (unauthenticated remote code execution in Anthropic\u2019s MCP Inspector, fixed in 0.14.1), CVE-2025-6514 in mcp-remote (fixed in 0.1.16), and CVE-2025-6515 session/prompt hijacking in oatpp-mcp.',
    fix: 'Treat tool descriptions and external content as untrusted, scan MCP servers before use, scope credentials narrowly, and require human approval for sensitive actions. The demonstrations were research, not evidence of real-world theft.',
    lesson: 'Whatever the model reads, an attacker can write.',
    src: [{ t: 'Invariant: tool poisoning', u: 'https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks' }, { t: 'Microsoft on indirect injection in MCP', u: 'https://developer.microsoft.com/blog/protecting-against-indirect-injection-attacks-mcp/' }]
  },
  {
    id: 'copilot-rce', year: 2025, date: 'Disclosed 12 Aug 2025', cat: 'ai', sev: 4,
    title: 'A coding agent talked itself into running commands',
    actor: 'Independent researcher, reported to Microsoft',
    motive: 'Demonstrate that a coding agent with workspace access can be steered into changing its own security settings.',
    flaw: 'CVE-2025-53773: a prompt-injection chain in which untrusted workspace files could alter settings to enable automatic tool approval, then execute a command. Command injection leading to local code execution in Visual Studio 2022 before 17.14.12.',
    impact: 'A malicious repository becomes dangerous when an agent can write to its own workspace, change its own policy and then run tools. Cloning a repo was always a small risk; authorising an agent to act on it is a much bigger one.',
    fix: 'Fixed in the August 2025 Patch Tuesday release. Operational fix: agents get least privilege, tool approval stays manual by default, and untrusted repositories are never opened in a privileged workspace. The researcher\u2019s "AI worm" scenarios were speculation, not a real self-propagating virus.',
    lesson: 'Never let a model edit the policy that governs the model.',
    src: [{ t: 'CVE-2025-53773 record', u: 'https://cveawg.mitre.org/api/cve/CVE-2025-53773' }, { t: 'Researcher write-up', u: 'https://embracethered.com/blog/posts/2025/github-copilot-remote-code-execution-via-prompt-injection/' }]
  },
  {
    id: 'aixcc', year: 2025, date: 'Aug 2025 (DEF CON 33)', cat: 'ai', sev: 2,
    title: 'DARPA AIxCC — machines that patch as well as break',
    actor: 'Seven finalist teams; winners Team Atlanta ($4M), Trail of Bits ($3M), Theori ($1.5M)',
    motive: 'A competition to build autonomous systems that find and fix open-source vulnerabilities faster than attackers can use them.',
    flaw: 'The vulnerabilities were the subject: synthetic flaws planted in critical open-source software, plus real ones discovered along the way.',
    impact: 'Across the seven finalist cyber reasoning systems, DARPA reported 54 of 63 synthetic vulnerabilities found and 43 patched, plus 18 real, non-synthetic vulnerabilities and 11 submitted patches for real bugs. (DARPA corrected an earlier figure of 70 to 63.)',
    fix: 'Finalists\u2019 systems were to be open-sourced. The caveat matters: prepared tasks, scoring rules, heavy compute, and human-built systems combining AI with conventional tooling — not unattended AI securing arbitrary production code.',
    lesson: 'Automated patching is now a demonstrated capability, not a slogan.',
    src: [{ t: 'DARPA AIxCC final results', u: 'https://www.darpa.mil/news/2025/aixcc-results' }]
  },
  {
    id: 'sqlite-cve', year: 2025, date: '2025', cat: 'ai', sev: 4,
    title: 'CVE-2025-6965 — found before the attackers used it',
    actor: 'Google Threat Analysis Group, with assistance from Google\u2019s Big Sleep agent',
    motive: 'Threat intelligence: identify a flaw already known to threat actors and get it fixed ahead of exploitation.',
    flaw: 'In SQLite before 3.50.2, the number of aggregate terms could exceed the available columns, risking memory corruption — an integer truncation issue distinct from the 2024 Big Sleep bug.',
    impact: 'Google says it identified a flaw known to threat actors before anticipated exploitation. That claim is Google\u2019s own account rather than independent proof, but the sequencing — find first, exploit never — is the outcome everyone wants.',
    fix: 'Upgrade to SQLite 3.50.2 or later. SQLite\u2019s own advisory notes many of its CVEs only matter if an application lets attackers submit arbitrary SQL or a malicious database, so reachability still decides severity.',
    lesson: 'The race is find-fix versus find-exploit. This time find-fix won.',
    src: [{ t: 'CVE-2025-6965 record', u: 'https://nvd.nist.gov/vuln/detail/CVE-2025-6965' }, { t: 'SQLite vulnerability policy', u: 'https://www.sqlite.org/cves.html' }]
  },
  {
    id: 'glasswing', year: 2026, date: '2026', cat: 'ai', sev: 4,
    title: 'Project Glasswing — the bottleneck moves to triage',
    actor: 'Anthropic (Project Glasswing / Claude Mythos Preview), with partner security firms',
    motive: 'Defensive: find and fix vulnerabilities in partners\u2019 code at a scale human teams cannot match.',
    flaw: 'The subject of the scan rather than an attack: reported findings across partner and open-source code.',
    impact: 'Anthropic reported more than 10,000 high- or critical-severity findings across partners. Of 1,752 high/critical findings independently assessed in its open-source subset, 1,587 (90.6%) were confirmed true positives and 1,094 were confirmed high or critical. The UK AI Security Institute separately found Mythos solved a 32-step simulated corporate attack in 3 of 10 attempts — promising, bounded, and with gaps in the range\u2019s realism.',
    fix: 'Coordinated disclosure and validation with external firms. Read the numbers carefully: "thousands found" is not "thousands of CVEs" — most of the tally is company-reported and under disclosure. Meanwhile ZeroDayBench found frontier agents still could not autonomously solve 22 novel critical vulnerabilities.',
    lesson: 'Discovery is scaling. Verification and patching are now the constraint.',
    src: [{ t: 'Anthropic: Glasswing initial update', u: 'https://www.anthropic.com/news/glasswing-initial-update' }, { t: 'UK AISI evaluation', u: 'https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities' }]
  },
  {
    id: 'ai-rules', year: 2026, date: '2023–2026', cat: 'ai', sev: 2,
    title: 'The rulebook catches up',
    actor: 'NIST, OWASP, the European Union',
    motive: 'Turn ad-hoc AI caution into obligations and shared vocabulary.',
    flaw: 'The systemic issue: model inputs, retrieved documents, tool descriptions, permissions and ordinary cloud components all sit inside one security boundary that most organisations had not drawn.',
    impact: 'NIST published its AI Risk Management Framework (2023) plus a Generative AI Profile (AI 600-1, July 2024) organising work into Govern, Map, Measure, Manage. The EU AI Act\u2019s Article 15 requires high-risk systems to address accuracy, robustness and cybersecurity explicitly, including data and model poisoning, adversarial examples and confidentiality attacks. OWASP now publishes an LLM Top 10 for 2025 and a 2026 edition.',
    fix: 'Treat prompt injection as the top LLM risk, keep credentials least-privileged, log data provenance, and require independent validation before any high-impact action. None of these are optional hygiene now — Article 15 is law for covered systems.',
    lesson: 'Draw the trust boundary before you grant the permissions.',
    src: [{ t: 'OWASP LLM Top 10 (2026)', u: 'https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/' }, { t: 'NIST AI Risk Management Framework', u: 'https://www.nist.gov/itl/ai-risk-management-framework' }, { t: 'EU AI Act Article 15', u: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-15' }]
  }
];

const P2P_INCIDENTS = [
  {
    id: 'storm', year: 2007, date: '2007–2008', cat: 'p2p', sev: 4,
    title: 'Storm — the botnet with no server to seize',
    actor: 'Unidentified operators (the malware is also known as Peacomm, Nuwar and Zhelatin)',
    motive: 'Spam, phishing and fraud at scale.',
    flaw: 'Not a flaw but an architecture: infected machines addressed each other over a peer-to-peer network instead of checking in to a command server. There was nothing for law enforcement to point a domain seizure at.',
    impact: 'Historical size estimates varied wildly and are unreliable — which was itself the finding. Researchers showed the network was large and used heavily for spam.',
    fix: 'No single takedown is established. What worked was infiltration: researchers joined the network and demonstrated that weaknesses in the protocol allowed disruptive content to be injected. P2P did not make a botnet untouchable — it raised the cost of touching it.',
    lesson: 'Decentralised control removes the single point of failure — and the single point of takedown.',
    src: [{ t: 'USENIX: measuring and mitigating P2P botnets', u: 'https://www.usenix.org/legacyurl/measurements-and-mitigation-peer-peer-based-botnets-case-study-storm-worm' }]
  },
  {
    id: 'zeroaccess', year: 2013, date: '2011–2014', cat: 'p2p', sev: 4,
    title: 'ZeroAccess — two million machines, rented out',
    actor: 'Unidentified operators',
    motive: 'Click fraud, pay-per-install distribution and Bitcoin mining — monetised quietly rather than destructively.',
    flaw: 'Peer-to-peer command distribution, with infection routes including malicious links, cracked-software installers, fake media files and exploit kits. Worth noting: cracks were one of the delivery routes.',
    impact: 'Around 2 million infected computers by contemporary estimates. Because it never drew attention to itself with ransom notes, it ran for years.',
    fix: 'On 5 December 2013 Microsoft, the FBI, Europol and industry partners disrupted the supporting infrastructure. Contemporary reporting was explicit that the P2P design made full eradication hard — a disruption, not a cure.',
    lesson: 'A botnet that stays quiet can live for years.',
    src: [{ t: 'Europol on the ZeroAccess disruption', u: 'https://www.europol.europa.eu/media-press/newsroom/news/notorious-botnet-infecting-2-million-computers-disrupted' }, { t: 'HKCERT: ZeroAccess', u: 'https://www.hkcert.org/blog/zeroaccess-botnet-detection-and-cleanup-in-hong-kong' }]
  },
  {
    id: 'gameover', year: 2014, date: '30 May 2014', cat: 'p2p', sev: 5,
    title: 'Gameover Zeus — Operation Tovar',
    actor: 'Evgeniy Bogachev and affiliates (the Zeus banking-trojan lineage)',
    motive: 'Banking credential theft and ransomware — the same infrastructure carried both Zeus and CryptoLocker.',
    flaw: 'A peer-to-peer variant of the Zeus botnet with a domain-generation algorithm as backup, so losing a command server did not kill it. Classic defence-in-depth, applied by criminals.',
    impact: 'FBI estimates of 500,000 to 1 million infected computers and losses exceeding $100 million. It was among the most resilient banking botnets ever observed.',
    fix: 'Operation Tovar — an FBI-led multinational action on 30 May 2014 — seized registered domains and used court-authorised technical disruption to break the P2P communication. The court filings and the coordinated international pressure did what a single seizure could not.',
    lesson: 'Decentralised networks fail when you take away the people, not the servers.',
    src: [{ t: 'Microsoft on Gameover Zeus cleanup', u: 'https://blogs.microsoft.com/blog/2014/06/02/microsoft-helps-fbi-in-gameover-zeus-botnet-cleanup/' }]
  },
  {
    id: 'hajime', year: 2015, date: 'From Apr 2015', cat: 'p2p', sev: 3,
    title: 'Hajime — the worm that fought Mirai',
    actor: 'Unknown; the author\u2019s identity was never established',
    motive: 'Unclear. Hajime spread through the same router vulnerabilities as Mirai but appeared to block Mirai\u2019s command traffic — self-appointed guardianship, or simply competition.',
    flaw: 'Default and weak credentials on exposed routers and IoT devices, and a peer-to-peer overlay that let it spread without a central server.',
    impact: 'Tens of thousands of devices at its peak, concentrated in Turkey, Brazil and Thailand. It even displayed a console message: "Just for white hat, just white." It was never taken down.',
    fix: 'Nothing — and that is the lesson. Nobody owned it badly enough to raid, and its P2P design gave no seizure target. Devices were only cleaned by their owners rebooting with changed credentials.',
    lesson: 'Some threats end only when the devices are fixed.',
    src: [{ t: 'Hajime (Wikipedia)', u: 'https://en.wikipedia.org/wiki/Hajime_(malware)' }]
  },
  {
    id: 'mozi', year: 2019, date: '2019–2023', cat: 'p2p', sev: 4,
    title: 'Mozi — hundreds of thousands of routers, then silence',
    actor: 'Originally recruited from botnet-for-hire markets; later believed maintained by its creators',
    motive: 'DDoS for hire and credential theft.',
    flaw: 'Weak and default credentials on routers and IoT devices, with a hybrid peer-to-peer design for command distribution. Heavy infection in India and China.',
    impact: 'One of the largest IoT botnets observed in its period, used for DDoS attacks and as a delivery platform for other malware.',
    fix: 'ESET observed a mysterious collapse from 8 August 2023 in India and 16 August in China. A kill switch had been distributed on 27 September 2023. Researchers concluded the original creators — possibly under pressure from Chinese law enforcement — deliberately killed their own botnet. No foreign takedown operation claimed it.',
    lesson: 'Sometimes the network dies because its owners decided to stop.',
    src: [{ t: 'ESET: who killed Mozi', u: 'https://www.welivesecurity.com/en/eset-research/who-killed-mozi-finally-putting-the-iot-zombie-botnet-in-its-grave/' }, { t: 'TechCrunch on the kill switch', u: 'https://techcrunch.com/2023/11/01/mozi-botnet-take-down-china/' }]
  },
  {
    id: 'torrent-malware', year: 2020, date: 'Ongoing', cat: 'p2p', sev: 4,
    title: 'The crack that came with a bonus',
    actor: 'Opportunistic criminals seeding trojanised files across public torrent and warez networks',
    motive: 'Credential theft, ransomware and cryptomining — delivered to people who will not report themselves.',
    flaw: 'Human trust: a file downloaded from a public peer-to-peer network is executable, unsigned and unverifiable, and the person running it has every reason not to call for help. Cracked games and keygens are a perennially effective lure.',
    impact: 'A recurring finding across security reports: pirated software, game cracks and "free" activation tools are among the most reliable malware distribution channels in existence. Inbound peer-to-peer connections also expose shared folders and, via DHT, can leak file lists to anyone.',
    fix: 'The reliable fix is not technical: do not run untrusted binaries. For organisations, block P2P protocols at the perimeter — most enterprise P2P traffic is unmanaged software silently sharing data outward.',
    lesson: 'The most effective social engineering offers something for free.',
    src: [{ t: 'CISA on P2P risks in enterprise', u: 'https://www.cisa.gov/news-events/alerts' }]
  },
  {
    id: 'iot-disruption', year: 2024, date: '18 Sept 2024', cat: 'p2p', sev: 4,
    title: '200,000 IoT devices taken out of state-sponsored hands',
    actor: 'US Department of Justice and FBI, court-authorised operation',
    motive: 'Disruption of a botnet used by People\u2019s Republic of China state-sponsored hackers.',
    flaw: 'Compromised internet-of-things devices — routers, cameras and similar hardware — recruited into a botnet used against US critical infrastructure. These devices rarely receive patches and are rarely monitored.',
    impact: 'More than 200,000 devices were disrupted. The FBI later noted that in January 2024 it had already dismantled a separate botnet of hundreds of US-based routers controlled by the Volt Typhoon group.',
    fix: 'Court-authorised technical disruption and device remediation. It also pushed forward the practical guidance: change default credentials, disable remote management, and buy IoT hardware that still gets security updates.',
    lesson: 'Your router is part of someone else\u2019s army if you never change the password.',
    src: [{ t: 'DOJ: court-authorised botnet disruption', u: 'https://www.justice.gov/archives/opa/pr/court-authorized-operation-disrupts-worldwide-botnet-used-peoples-republic-china-state' }]
  },
  {
    id: 'sality-2026', year: 2026, date: '31 Aug 2026', cat: 'p2p', sev: 3,
    title: 'Sality — a two-decade botnet finally sinkholed',
    actor: 'US-led public-private operation: FBI, DOJ, DCIS, Shadowserver, Europol, Eurojust and partners in Bulgaria, Hungary and Romania',
    motive: 'To dismantle a botnet that has been infecting machines since 2003.',
    flaw: 'File infection: Sality spreads by corrupting executable files on infected machines and through removable media and shared drives, then uses peer-to-peer to distribute further payloads — so the malware lives inside ordinary programs.',
    impact: 'Active for over 20 years, with more than 11 million unique IP addresses linked to its infrastructure over time — a cumulative figure, not a live infection count. Used for cryptocurrency theft and DDoS.',
    fix: 'CrowdStrike reports a P2P sinkholing operation that isolated over 33,000 infected machines in its operational dataset and blocked new payload instructions. It did not clean every computer: endpoint remediation still has to happen on each machine.',
    lesson: 'Sinkholing redirects the network; only patching cleans the host.',
    src: [{ t: 'Europol: global operation disrupts Sality', u: 'https://www.europol.europa.eu/media-press/newsroom/news/global-public-private-operation-disrupts-sality-botnet-active-for-two-decades' }, { t: 'CrowdStrike technical account', u: 'https://www.crowdstrike.com/en-us/blog/inside-sality-botnet-disruption-operation/' }]
  }
];

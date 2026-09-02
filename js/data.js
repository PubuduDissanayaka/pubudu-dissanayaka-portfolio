/* ============================================================
   Data — skills, certifications, projects, terminal script
   Content is separated so it is easy to edit without touching
   layout or behaviour code. (Semantic prose stays in index.html.)
   ============================================================ */

const PD_SKILLS = [
  {
    name: "Cloud & Infra",
    cat: "infra",
    skills: ["Microsoft Azure", "Microsoft 365", "Active Directory / Entra ID", "Google Cloud Platform", "VMware vSphere", "ESXi", "Hyper-V", "Windows Server", "Linux", "Red Hat Linux", "Networking", "Cisco Systems", "Server Administration"]
  },
  {
    name: "Automation & Code",
    cat: "automation",
    skills: ["PowerShell Scripting", "Bash / Batch", "n8n Automation", "Python", "Java", "Laravel", "MySQL", "Prompt Engineering", "Vibe Coding", "Batch Scripting"]
  },
  {
    name: "Operations & Security",
    cat: "ops",
    skills: ["Zabbix Monitoring", "Patch Management", "Backup & Disaster Recovery", "Security Hardening", "Identity & Access", "Service Levels (SLA)", "Root Cause Analysis", "Systems Management", "Infrastructure"]
  },
  {
    name: "Product & Craft",
    cat: "craft",
    skills: ["Web Development", "Technical SEO", "Digital Marketing", "Google / Meta Ads", "Mobile App Development", "Custom Web Apps", "SaaS Development", "Leadership"]
  }
];

const PD_CERTS = [
  { name: "Microsoft Certified: Security, Compliance & Identity Fundamentals", org: "Microsoft", short: "MS" },
  { name: "SC-900 Security, Compliance & Identity Fundamentals", org: "Microsoft", short: "SC" },
  { name: "MS-900 Microsoft 365 Fundamentals", org: "Microsoft", short: "MS" },
  { name: "AZ-900 Microsoft Azure Fundamentals", org: "Microsoft", short: "AZ" },
  { name: "Oracle Cloud Infrastructure 2025 Generative AI Professional", org: "Oracle", short: "OC" },
  { name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate", org: "Oracle", short: "OC" },
  { name: "Oracle Cloud Infrastructure 2025 Foundations Associate", org: "Oracle", short: "OC" },
  { name: "ACE Multicloud Network Associate", org: "Aviatrix", short: "AV" },
  { name: "CCNA Routing & Switching", org: "Cisco", short: "CC" },
  { name: "CCNA Cyber Ops", org: "Cisco", short: "CC" },
  { name: "Programming Essentials in Python", org: "Cisco Networking Academy", short: "CN" },
  { name: "NDG Linux Unhatched", org: "Cisco Networking Academy", short: "CN" },
  { name: "Cybersecurity Essentials", org: "Cisco Networking Academy", short: "CN" },
  { name: "Intro to Cybersecurity", org: "Cisco Networking Academy", short: "CN" },
  { name: "Networking Academy Learn-A-Thon 2020", org: "Cisco", short: "CC" }
];

const PD_PROJECTS = [
  {
    title: "Stretchline",
    desc: "Cloud & Active Directory support for an enterprise client — identity, access and infrastructure administration.",
    meta: ["Azure", "AD", "M365"],
    tag: "Enterprise"
  },
  {
    title: "Dialog Business Services",
    desc: "Network and managed services delivery — monitoring, patching and incident response in a production environment.",
    meta: ["Networking", "Monitoring", "Ops"],
    tag: "Managed Services"
  },
  {
    title: "DevTenent Studio",
    desc: "My own digital studio: custom websites, technical SEO campaigns, Google/Meta ads, and SaaS builds for clients.",
    meta: ["Web", "SEO", "SaaS", "Ads"],
    tag: "Agency"
  },
  {
    title: "National Fuel Pass Platform",
    desc: "Contributor to a national-scale platform recognised by the Ministry of Power and Energy, Sri Lanka.",
    meta: ["Platform", "Infra"],
    tag: "National"
  }
];

/* Terminal intro sequence — each line is typed, then the rest renders */
const PD_TERMINAL = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "Pubudu Dissanayaka — System Engineer / DevTenent Founder" },
  { type: "cmd", text: "cat primary_identities.txt" },
  { type: "out", text: "Enterprise Infrastructure  ·  Cloud (Azure/M365)" },
  { type: "out", text: "Digital Studio (Web / SEO / SaaS)  ·  DevTenent" },
  { type: "cmd", text: "./deploy --stack" },
  { type: "out", text: "[✓] Infrastructure   [✓] Automation   [✓] Digital craft" },
  { type: "cmd", text: "uptime --viewer" },
  { type: "out", text: "6+ years online — banking-grade SLA. Sri Lanka (UTC+5:30)." },
  { type: "out", text: "STATUS: OPEN TO OPPORTUNITIES" }
];

/* ============================================================
   Data — skills, certifications, projects, terminal script
   Content is separated so it is easy to edit without touching
   layout or behaviour code. (Semantic prose stays in index.html.)
   ============================================================ */

const PD_SKILLS = [
  {
    name: "Cloud & Infra",
    cat: "infra",
    skills: ["Microsoft Azure", "Microsoft 365", "Microsoft Intune", "Active Directory / Entra ID", "Endpoint Management", "Google Cloud Platform", "VMware vSphere", "ESXi", "Hyper-V", "Windows Server", "Linux", "Red Hat Linux", "Networking", "Cisco Systems", "Server Administration"]
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

/* Official vendor logo paths (simple-icons, 24x24) — inlined so they render
   on both themes with no network dependency. aviatrix=null → monogram fallback. */
const PD_LOGOS = {
  microsoft: "M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z",
  cisco: "M16.331 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.186 1.186 0 01-.806-.237 1.038 1.038 0 01-.352-.498 1.21 1.21 0 01-.023-.667c.052-.225.178-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.34 2.34 0 00-.903.206c-.287.132-.54.327-.739.571a2.221 2.221 0 00-.04 2.705c.295.378.709.645 1.175.756.491.12 1.006.102 1.487-.052l.082-.023M5.336 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.183 1.183 0 01-.806-.237 1.03 1.03 0 01-.351-.498 1.202 1.202 0 01-.024-.667c.052-.225.177-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.344 2.344 0 00-.903.206 2.08 2.08 0 00-.74.571 2.224 2.224 0 00-.041 2.705 2.11 2.11 0 001.176.756c.491.12 1.005.102 1.487-.052l.083-.023M9.26 17.249l-.004.957.07.012c.22.041.441.069.664.085.195.019.391.022.587.012.187-.014.372-.049.551-.104.21-.06.405-.163.571-.305a1.16 1.16 0 00.333-.478 1.31 1.31 0 00-.007-.96 1.068 1.068 0 00-.298-.414 1.261 1.261 0 00-.438-.255l-.722-.268a.388.388 0 01-.197-.188.245.245 0 01.008-.219.382.382 0 01.154-.142.798.798 0 01.257-.074c.153-.022.308-.021.46.005.18.02.358.051.533.096l.038.008v-.883l-.069-.015a4.749 4.749 0 00-.543-.097 2.844 2.844 0 00-.714-.003c-.3.027-.585.143-.821.33-.16.126-.281.293-.351.484-.104.29-.105.608 0 .899.054.145.14.274.252.381.097.093.207.173.327.236.157.084.324.149.497.195.057.017.114.035.17.054l.085.031.024.01c.084.03.162.078.226.14.045.042.08.094.101.151a.325.325 0 01.001.161.339.339 0 01-.166.198.856.856 0 01-.275.086 2.032 2.032 0 01-.427.021 5.208 5.208 0 01-.557-.074 9.195 9.195 0 01-.287-.067l-.033-.006zm-2.475.995h1.05v-4.167h-1.05v4.167zm12.162-2.936a1.095 1.095 0 011.541.158 1.094 1.094 0 01-.157 1.541l-.017.014a1.096 1.096 0 01-1.367-1.713m-1.525.854a2.193 2.193 0 002.666 2.107 2.139 2.139 0 00.701-3.937 2.207 2.207 0 00-3.367 1.83M22.961 10.728a.52.52 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M20.117 10.728a.522.522 0 001.041 0V8.139a.521.521 0 00-1.04 0v2.589M17.231 11.771a.521.521 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M14.393 10.728a.521.521 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M11.494 10.728a.522.522 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M8.624 10.728a.52.52 0 001.039 0V8.139a.52.52 0 00-1.039 0v2.589M5.737 11.771a.52.52 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M2.876 10.728a.522.522 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M0 10.728a.521.521 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155",
  oracle: "M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z",
  aviatrix: null
};

const PD_CERTS = [
  { name: "Microsoft Certified: Security, Compliance & Identity Fundamentals", org: "Microsoft", short: "MS", vendor: "microsoft" },
  { name: "SC-900 Security, Compliance & Identity Fundamentals", org: "Microsoft", short: "SC", vendor: "microsoft" },
  { name: "MS-900 Microsoft 365 Fundamentals", org: "Microsoft", short: "MS", vendor: "microsoft" },
  { name: "AZ-900 Microsoft Azure Fundamentals", org: "Microsoft", short: "AZ", vendor: "microsoft" },
  { name: "Oracle Cloud Infrastructure 2025 Generative AI Professional", org: "Oracle", short: "OC", vendor: "oracle" },
  { name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate", org: "Oracle", short: "OC", vendor: "oracle" },
  { name: "Oracle Cloud Infrastructure 2025 Foundations Associate", org: "Oracle", short: "OC", vendor: "oracle" },
  { name: "ACE Multicloud Network Associate", org: "Aviatrix", short: "AV", vendor: "aviatrix" },
  { name: "CCNA Routing & Switching", org: "Cisco", short: "CC", vendor: "cisco" },
  { name: "CCNA Cyber Ops", org: "Cisco", short: "CC", vendor: "cisco" },
  { name: "Programming Essentials in Python", org: "Cisco Networking Academy", short: "CN", vendor: "cisco" },
  { name: "NDG Linux Unhatched", org: "Cisco Networking Academy", short: "CN", vendor: "cisco" },
  { name: "Cybersecurity Essentials", org: "Cisco Networking Academy", short: "CN", vendor: "cisco" },
  { name: "Intro to Cybersecurity", org: "Cisco Networking Academy", short: "CN", vendor: "cisco" },
  { name: "Networking Academy Learn-A-Thon 2020", org: "Cisco", short: "CC", vendor: "cisco" }
];

const PD_PROJECTS = [
  {
    title: "Project Intrepid",
    desc: "Enterprise Microsoft 365, Intune and Azure engineering under NeoVizta — identity, endpoint and cloud delivered at scale.",
    meta: ["M365", "Intune", "Azure"],
    tag: "Enterprise"
  },
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
  { type: "out", text: "Enterprise Cloud & Endpoint  ·  Azure · M365 · Intune" },
  { type: "out", text: "Digital Studio (Web / SEO / SaaS)  ·  DevTenent" },
  { type: "cmd", text: "./deploy --stack" },
  { type: "out", text: "[✓] Infrastructure   [✓] Automation   [✓] Digital craft" },
  { type: "cmd", text: "uptime --viewer" },
  { type: "out", text: "6+ years online — NeoVizta / banking-grade. Sri Lanka (UTC+5:30)." },
  { type: "out", text: "STATUS: OPEN TO OPPORTUNITIES" }
];

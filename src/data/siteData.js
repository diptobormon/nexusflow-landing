// ============================================================
// All reusable content data (Array of Objects)
// ============================================================

// ---------- Icons (used inside data) ----------
import discordIcon from "../assets/icons/discord.svg";
import githubIcon from "../assets/icons/github.svg";
import shieldIcon from "../assets/icons/shield.svg";
import sparklesIcon from "../assets/icons/sparkles.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import zapIcon from "../assets/icons/zap.svg";

// ---------- Brand Logos ----------
import acmeLogo from "../assets/logos/acme.svg";
import cloudforgeLogo from "../assets/logos/cloudforge.svg";
import devmatrixLogo from "../assets/logos/devmatrix.svg";
import linearLogo from "../assets/logos/linear.svg";
import novasphereLogo from "../assets/logos/novasphere.svg";
import pulseLogo from "../assets/logos/pulse.svg";

// ---------- Avatars ----------
import avatar1 from "../assets/images/avatar-1.svg";
import avatar2 from "../assets/images/avatar-2.svg";
import avatar3 from "../assets/images/avatar-3.svg";

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#solutions", label: "Solutions" },
  { href: "#testimonials", label: "Customers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "Faq" },
];

export const heroAvatars = [
  { src: avatar1, alt: "User 1" },
  { src: avatar2, alt: "User 2" },
  { src: avatar3, alt: "User 3" },
];

export const logos = [
  { src: acmeLogo, alt: "Acme" },
  { src: linearLogo, alt: "Linearify" },
  { src: pulseLogo, alt: "PulseScale" },
  { src: novasphereLogo, alt: "NovaSphere" },
  { src: cloudforgeLogo, alt: "CloudForge" },
  { src: devmatrixLogo, alt: "DevMatrix" },
];

export const features = [
  {
    icon: sparklesIcon,
    tag: "01 / AUTOMATIONS",
    title: "AI-Driven Sprints",
    desc: "Auto-generate PR summaries, triage incoming bug tickets, and balance developer capacity with natural language prompts.",
  },
  {
    icon: zapIcon,
    tag: "02 / CANVAS",
    title: "Real-time Architecture Canvas",
    desc: "Co-design system architectures, map dependencies, and link live GitHub repositories directly into visual planning boards.",
  },
  {
    icon: sparklesIcon,
    tag: "03 / ANALYTICS",
    title: "Predictive Cycle Time",
    desc: "Machine learning forecasts on deployment bottlenecks, PR review lag times, and sprint velocity trends.",
  },
  {
    icon: shieldIcon,
    tag: "04 / COMPLIANCE",
    title: "SOC2 Type II Security",
    desc: "End-to-end 256-bit encryption, role-based access control, custom SAML SSO, and complete audit logging by default.",
  },
  {
    icon: shieldIcon,
    tag: "05 / ECOSYSTEM",
    title: "100+ Integrations",
    desc: "Bi-directional webhooks and sync with GitHub, GitLab, Jira, Figma, Linear, Slack, Notion, and Datadog.",
  },
  {
    icon: zapIcon,
    tag: "06 / PIPELINES",
    title: "Serverless CI/CD Triggers",
    desc: "Instant execution of build, test, and release gates across isolated edge environments with zero cold starts.",
  },
];

export const stats = [
  {
    value: "99.99%",
    label: "UPTIME SLA",
    desc: "Enterprise grade availability",
  },
  {
    value: "250K+",
    label: "DEVELOPERS",
    desc: "Building across 140+ countries",
  },
  { value: "15M+", label: "BUILDS / MO", desc: "Automated with zero failures" },
  {
    value: "4.9 / 5",
    label: "SATISFACTION",
    desc: "From over 3,000+ verified teams",
  },
];

export const testimonials = [
  {
    quote:
      "NexusFlow transformed our sprint cycles. The automatic PR summaries and real-time canvas eliminated 40% of our daily sync overhead.",
    avatar: avatar1,
    name: "Sarah Chen",
    role: "VP Eng @ CloudNova",
  },
  {
    quote:
      "We migrated 60+ engineers from fragmented legacy tools to NexusFlow in one afternoon. The developer experience is world-class.",
    avatar: avatar2,
    name: "Marcus Vance",
    role: "CTO @ HyperScale",
  },
  {
    quote:
      "The edge preview pipelines and branch triggers feel magical. NexusFlow makes shipping software as fast as thinking about it.",
    avatar: avatar3,
    name: "Elena Rostova",
    role: "Lead Architect @ Pulse",
  },
];

export const pricingPlans = [
  {
    name: "Hobby",
    desc: "For individual builders and personal projects",
    monthly: "$0",
    annual: "$0",
    period: "/ month",
    features: [
      "Up to 3 Projects",
      "Unlimited Kanban Boards",
      "Standard GitHub Sync",
      "Community Support",
    ],
    cta: "Start Free",
    href: "#deploy",
    featured: false,
  },
  {
    name: "Pro",
    desc: "For fast-moving engineering teams and scaleups",
    monthly: "$20",
    annual: "$16",
    period: "/ user / month",
    features: [
      "Unlimited Projects & Sprints",
      "10,000 AI Agent Executions / mo",
      "Predictive Sprint Analytics",
      "Full Ecosystem Integrations",
      "Priority 24/7 SLA Support",
    ],
    cta: "Upgrade to Pro",
    href: "#deploy",
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "For mission-critical compliance & security",
    monthly: "Custom",
    annual: "Custom",
    period: "",
    features: [
      "Dedicated SAML SSO & SCIM",
      "Custom Data Residency",
      "99.99% Uptime Guarantee SLA",
      "Dedicated Technical Architect",
    ],
    cta: "Contact Sales",
    href: "#contact",
    featured: false,
  },
];

export const faqs = [
  {
    q: "How does the 14-day free trial work?",
    a: "You get complete access to all Pro tier capabilities for 14 days without inputting credit card details. When your trial completes, you can choose to remain on Pro or continue on the free Hobby tier.",
  },
  {
    q: "Can I change or cancel my plan at any time?",
    a: "Yes. Subscriptions can be upgraded, downgraded, or canceled directly from your workspace dashboard anytime without long-term commitments.",
  },
  {
    q: "What developer tools and integrations are supported?",
    a: "We provide native two-way sync for GitHub, GitLab, Jira, Figma, Linear, Slack, Notion, and customizable webhooks via our standard REST API.",
  },
  {
    q: "How is our source code and private data protected?",
    a: "We are SOC2 Type II certified. All customer code and repository data are encrypted at rest with AES-256 and in transit with TLS 1.3. We never train public foundation models on private customer repositories.",
  },
];

export const socialLinks = [
  { href: "#github", label: "GitHub", icon: githubIcon },
  { href: "#twitter", label: "Twitter", icon: twitterIcon },
  { href: "#discord", label: "Discord", icon: discordIcon },
];

export const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "AI Sprints", href: "#features" },
      { label: "Edge Previews", href: "#features" },
      { label: "Architecture Canvas", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Engineering Squads", href: "#solutions" },
      { label: "Startups & Scaleups", href: "#solutions" },
      { label: "Enterprise Security", href: "#solutions" },
      { label: "Remote Teams", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Security & Trust", href: "#security" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

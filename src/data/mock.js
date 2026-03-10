const mock = {
  meta: {
    siteName: "Marina Akter",
    siteTitle: "Marina Akter | MERN Stack Developer",
    siteDescription:
      "Premium portfolio and agency website for modern businesses.",
    siteUrl: "https://your-domain.com",
    ogImage: "/projects/project1.png",
    language: "en",
  },

  brand: {
    name: "Marina Akter",
    shortName: "Marina",
    highlightName: "PORTFOLIO",
    logoTextTop: "Marina",
    logoTextBottom: "PORTFOLIO",
    logoAlt: "Marina Akter logo",
    tagline: "MERN Stack Developer for modern websites",
    description:
      "I build clean, modern, and premium websites for agencies, founders, and businesses.",
    copyright: "© 2026 Marina Akter. All rights reserved.",
  },

  navigation: {
    ctaButton: "Hire Me",
    mobileMenuLabel: "Toggle menu",
    showHireButton: true,
    navbar: [
      { name: "Home", path: "#home" },
      { name: "About", path: "#about" },
      { name: "Services", path: "#services" },
      { name: "Projects", path: "#projects" },
      { name: "Testimonials", path: "#testimonials" },
      { name: "Contact", path: "#contact" },
    ],
    footerProduct: [
      { name: "Home", path: "#home" },
      { name: "Services", path: "#services" },
      { name: "Projects", path: "#projects" },
      { name: "Testimonials", path: "#testimonials" },
    ],
    footerCompany: [
      { name: "About", path: "#about" },
      { name: "Contact", path: "#contact" },
      { name: "Privacy Policy", path: "#" },
      { name: "Terms & Conditions", path: "#" },
    ],
    footerBottom: [
      { name: "Privacy", path: "#" },
      { name: "Terms", path: "#" },
      { name: "Support", path: "#" },
    ],
  },

  socialLinks: [
    { name: "GitHub", href: "https://github.com/" },
    { name: "LinkedIn", href: "https://linkedin.com/" },
    { name: "Facebook", href: "https://facebook.com/" },
    { name: "Instagram", href: "https://instagram.com/" },
  ],

  contactInfo: {
    email: "marinaakter878@gmail.com",
    phone: "+880 1603277275",
    location: "Dhaka, Bangladesh",
    workingMode: "Available for remote work",
    responseTime: "Replies within 24 hours",
  },

  theme: {
    primary: "Premium dark",
    radius: "24px",
    layout: "Clean grid and bold typography",
  },

  hero: {
    badge: "MERN Stack Developer",
    title: {
      line1: "I build premium",
      line2: "agency and business websites",
      prefix: "with",
      highlight: "clean design and modern structure.",
    },
    description:
      "I help brands build modern websites that look professional, feel premium, and support real business growth.",
    primaryButton: "View My Work",
    secondaryButton: "Book A Call",
    trustText: "Clean execution, premium UI, reliable delivery",
    stats: [
      { value: "20+", label: "Projects" },
      { value: "3+", label: "Years" },
      { value: "95%", label: "Satisfaction" },
      { value: "100%", label: "Responsive" },
    ],
    floatingCards: [
      {
        title: "Premium Website Systems",
        subtitle: "Built for agencies and brands",
      },
      {
        title: "Conversion Focused",
        subtitle: "Designed for clarity and trust",
      },
      {
        title: "Safe Updates",
        subtitle: "Without breaking your logic",
      },
    ],
    highlights: [
      "Premium presentation",
      "Responsive layout",
      "Scalable structure",
      "Business-focused design",
    ],
  },

  clients: {
    badge: "About me",
    title: "I help brands build a stronger digital presence",
    description:
      "Modern websites with clean development and premium presentation.",
    logos: [
      { name: "Google", logo: "/logos/logo1.png" },
      { name: "Meta", logo: "/logos/logo2.png" },
      { name: "Microsoft", logo: "/logos/logo3.png" },
      { name: "YouTube", logo: "/logos/logo4.png" },
      { name: "Canva", logo: "/logos/logo5.png" },
    ],
    stats: [
      { value: "20+", label: "Projects" },
      { value: "10+", label: "Clients" },
      { value: "95%", label: "Satisfaction" },
    ],
  },

  aboutOverview: {
    badge: "Who I am",
    title: "A developer focused on premium web experiences",
    description:
      "I create clean, modern, and professional websites for agencies, founders, and businesses.",
    paragraphs: [
      "My work focuses on strong layout, responsive design, and maintainable frontend structure.",
      "I improve websites without disturbing the existing flow more than necessary.",
    ],
    cards: [
      {
        title: "Design Quality",
        description: "Modern interfaces with strong hierarchy and spacing.",
      },
      {
        title: "Code Integrity",
        description: "Clean updates that respect your current logic.",
      },
      {
        title: "Business Focus",
        description: "Websites designed to build trust and clarity.",
      },
    ],
  },

  homeServices: {
    badge: "What I Do",
    title: "Premium services for",
    highlight: "modern brands and agencies",
    description:
      "I build websites that are clean, professional, and built to grow your brand.",
    featured: {
      eyebrow: "Featured expertise",
      title: "Modern website development",
      description:
        "Premium websites for agencies, portfolios, and service businesses.",
      stats: [
        { value: "20+", label: "Projects" },
        { value: "3+", label: "Experience" },
      ],
      button: "Let’s Talk",
    },
    items: [
      {
        number: "01",
        title: "Agency Website Development",
        description: "Professional websites for agencies and creative teams.",
      },
      {
        number: "02",
        title: "Portfolio Website Development",
        description: "Clean personal portfolio websites with premium design.",
      },
      {
        number: "03",
        title: "Landing Page Development",
        description: "Modern landing pages built for conversion and clarity.",
      },
      {
        number: "04",
        title: "Business Website Development",
        description: "Professional websites for modern businesses and brands.",
      },
      {
        number: "05",
        title: "Website Redesign & Updates",
        description: "Targeted upgrades without breaking existing logic.",
      },
      {
        number: "06",
        title: "Frontend UI Implementation",
        description: "Responsive and reusable frontend sections.",
      },
    ],
    bottomStrip: {
      eyebrow: "Why work with me",
      title: "Premium design with reliable execution",
      description:
        "I focus on visual quality, responsive layout, and clean implementation.",
      items: [
        { title: "Premium", label: "UI" },
        { title: "Clean", label: "Code" },
        { title: "Reliable", label: "Delivery" },
      ],
    },
  },

  portfolioSection: {
    badge: "Selected work",
    title: "Projects built for stronger digital presence",
    description:
      "A few selected works focused on premium design and modern structure.",
    button: "Contact Me",
    caseStudyButton: "View Details",
    projects: [
      {
        id: 1,
        slug: "personal-portfolio-website",
        title: "Personal Portfolio Website",
        category: "Development",
        image: "/projects/project1.png",
        cover: "/projects/project1.png",
        description:
          "A modern portfolio website with clean sections and premium presentation.",
        summary: "Personal brand website with modern layout and structure.",
        tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
        features: [
          "Premium hero section",
          "Responsive layout",
          "Smooth navigation",
          "Professional presentation",
        ],
        metrics: [
          { label: "Style", value: "Premium" },
          { label: "Type", value: "Portfolio" },
          { label: "Focus", value: "Trust" },
        ],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 2,
        slug: "agency-landing-page",
        title: "Agency Landing Page",
        category: "Landing Page",
        image: "/projects/project2.png",
        cover: "/projects/project2.png",
        description:
          "A conversion-focused landing page with clean flow and modern visuals.",
        summary: "Agency landing page built for trust and lead generation.",
        tech: ["React", "Tailwind CSS", "UI Design"],
        features: [
          "Clear hierarchy",
          "Premium visual style",
          "Offer-focused layout",
          "Responsive CTA blocks",
        ],
        metrics: [
          { label: "Style", value: "Modern" },
          { label: "Type", value: "Landing Page" },
          { label: "Focus", value: "Conversion" },
        ],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 3,
        slug: "business-website-ui",
        title: "Business Website UI",
        category: "Business",
        image: "/projects/project3.png",
        cover: "/projects/project3.png",
        description:
          "A premium business website designed for credibility and clarity.",
        summary: "Business-facing website with clean UI and strong structure.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        features: [
          "Professional layout",
          "Scalable sections",
          "Responsive UI",
          "Reusable components",
        ],
        metrics: [
          { label: "Style", value: "Business" },
          { label: "Type", value: "Website" },
          { label: "Focus", value: "Brand Trust" },
        ],
        liveLink: "#",
        githubLink: "#",
      },
    ],
  },

  testimonialsSection: {
    badge: "Client feedback",
    title: "Trusted by clients who value",
    highlight: "quality and clarity",
    description:
      "Projects handled with strong communication and premium execution.",
    items: [
      {
        name: "Sarah Mitchell",
        role: "Marketing Director",
        company: "Bright Path Studio",
        review:
          "The website looked far more premium and professional after the update.",
        rating: 5,
      },
      {
        name: "James Carter",
        role: "Startup Founder",
        company: "Northscale Labs",
        review:
          "Clean work, strong layout sense, and a much sharper final result.",
        rating: 5,
      },
      {
        name: "Ariana Brooks",
        role: "Product Manager",
        company: "Elevate Digital",
        review:
          "Very reliable and professional. The final design felt polished and high-end.",
        rating: 5,
      },
    ],
    stats: [
      { value: "95%", label: "Satisfaction" },
      { value: "10+", label: "Collaborations" },
      { value: "20+", label: "Projects" },
    ],
  },

  ctaSection: {
    badge: "Let’s work together",
    title: "Need a premium website for your",
    highlight: "agency, brand, or business?",
    description:
      "I can help you build or upgrade a website that feels modern and professional.",
    primaryButton: "Start a Project",
    secondaryButton: "Contact Me",
    cards: [
      {
        label: "Timeline",
        title: "Fast & Focused Delivery",
        description:
          "Ideal for portfolios, agencies, landing pages, and redesigns.",
      },
      {
        label: "Approach",
        title: "Clean, Strategic, Reliable",
        description: "Visual upgrades while respecting your current code flow.",
      },
    ],
  },

  faqSection: {
    badge: "FAQ",
    title: "Common questions",
    description: "A few quick answers before starting a project.",
    items: [
      {
        question: "Can you redesign without changing the main logic?",
        answer:
          "Yes, I focus on safe updates while keeping the existing flow intact.",
      },
      {
        question: "Do you only build portfolios?",
        answer:
          "No, I work on portfolios, agency sites, business websites, and landing pages.",
      },
      {
        question: "Will the website be responsive?",
        answer:
          "Yes, all sections are built to work across desktop, tablet, and mobile.",
      },
      {
        question: "Can all content stay dynamic from one file?",
        answer: "Yes, we can manage most website content from mock.js.",
      },
    ],
  },

  footer: {
    productTitle: "Pages",
    companyTitle: "Information",
    newsletterTitle: "Stay connected",
    newsletterDescription:
      "Get updates on premium websites, UI, and modern web design.",
    newsletterPlaceholder: "Enter email",
    newsletterButton: "Join",
  },

  aboutPage: {
    title: "About Me",
    hero: {
      badge: "About",
      title: "Building digital experiences that feel premium",
      description:
        "I help brands present themselves online with clean code and modern design.",
      stats: [
        { value: "20+", label: "Projects" },
        { value: "3+", label: "Years" },
        { value: "10+", label: "Clients" },
      ],
    },
    story: {
      title: "My approach",
      description:
        "A strong website should look modern, feel clear, and support business goals.",
      paragraphs: [
        "My work focuses on layout, spacing, responsive design, and clean frontend structure.",
        "Whether building from scratch or improving an existing site, I keep the result polished and professional.",
      ],
    },
    expertise: [
      "Agency website development",
      "Portfolio website systems",
      "Responsive business websites",
      "Landing page UI",
      "Safe redesigns",
    ],
    values: [
      {
        title: "Clarity",
        description: "Clear structure and better communication.",
      },
      {
        title: "Consistency",
        description: "Unified styling across the full website.",
      },
      {
        title: "Execution",
        description: "Stable and responsive frontend implementation.",
      },
    ],
  },

  caseStudyPage: {
    text: "Case study page content goes here.",
    hero: {
      badge: "Case Study",
      title: "Project details and design thinking",
      description:
        "A deeper look into the goals, layout, and implementation of each project.",
    },
  },

  notFoundPage: {
    title: "404 | Page not found",
    heading: "This page could not be found",
    description:
      "The page may have been moved, removed, or the link is incorrect.",
    primaryButton: "Back To Home",
  },

  portfolioPage: {
    hero: {
      badge: "My portfolio",
      title: "A curated collection of digital work",
      description:
        "Explore selected portfolio, landing page, and business website projects.",
    },
    filterTabs: ["All", "Development", "Landing Page", "Business"],
    items: [
      {
        title: "Personal Brand Portfolio",
        category: "Development",
        image: "/projects/project1.png",
        description:
          "A premium portfolio website designed for personal branding and clarity.",
        tech: ["React", "Vite", "Tailwind CSS"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Business Website Experience",
        category: "Business",
        image: "/projects/project2.png",
        description:
          "A polished business website focused on hierarchy and responsiveness.",
        tech: ["React", "Node.js", "Responsive Design"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Marketing Campaign Landing Page",
        category: "Landing Page",
        image: "/projects/project3.png",
        description: "A landing page built for engagement and conversion.",
        tech: ["Landing Page", "Conversion Strategy", "Brand Messaging"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Digital Agency Portfolio",
        category: "Development",
        image: "/projects/project1.png",
        description: "A modern agency portfolio with a premium visual system.",
        tech: ["React", "UI Architecture", "Tailwind CSS"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Service Business Landing Page",
        category: "Landing Page",
        image: "/projects/project2.png",
        description: "A lead-focused landing page with clear content flow.",
        tech: ["Landing Page", "Responsive Design", "Content Structure"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Corporate Website UI System",
        category: "Business",
        image: "/projects/project3.png",
        description:
          "A structured website UI for brands that need a more professional presence.",
        tech: ["React", "Design System", "Reusable Components"],
        liveLink: "#",
        githubLink: "#",
      },
    ],
    cta: {
      title: "Want a stronger online presence?",
      description: "I can help you build a cleaner and more strategic website.",
      primaryButton: "Start a Project",
      secondaryButton: "Contact Me",
    },
  },

  contactPage: {
    hero: {
      badge: "Contact me",
      title: "Let’s discuss your next website project",
      description:
        "Whether you need a full website or a premium redesign, I’d love to hear from you.",
    },
    infoCards: [
      {
        title: "Email",
        value: "marinaakter878@gmail.com",
        href: "mailto:marinaakter878@gmail.com",
      },
      {
        title: "Phone",
        value: "+880 1603277275",
        href: "tel:+8801603277275",
      },
      {
        title: "Location",
        value: "Dhaka, Bangladesh",
        href: "#",
      },
      {
        title: "Response Time",
        value: "Within 24 hours",
        href: "#",
      },
    ],
    form: {
      title: "Send a message",
      description: "Share your project goals and website needs.",
      fields: {
        name: "Your name",
        email: "Email address",
        subject: "Project subject",
        message: "Tell me about your project",
      },
      button: "Send Message",
    },
    availability: {
      title: "Availability",
      description:
        "Available for agency websites, portfolios, landing pages, and redesign work.",
      items: [
        "MERN stack website development",
        "Agency website design",
        "Portfolio website design",
        "Landing page development",
        "Website redesign and updates",
      ],
    },
  },

  servicesPage: {
    hero: {
      badge: "Services",
      title: "Premium services for",
      highlight: "modern digital growth",
      description:
        "I provide clean and modern website solutions for agencies, founders, and businesses.",
      primaryButton: "Start Your Project",
      secondaryButton: "Book A Free Call",
      stats: [
        { value: "20+", label: "Projects" },
        { value: "10+", label: "Clients" },
        { value: "95%", label: "Satisfaction" },
      ],
    },

    servicesIntro: {
      badge: "What I do best",
      title: "Solutions built for clarity and credibility",
      description:
        "Each service is designed to help your brand look stronger and more professional online.",
    },

    services: [
      {
        number: "01",
        title: "MERN Stack Web Development",
        description:
          "Modern websites and web applications with clean structure.",
        points: ["Responsive UI", "Modern stack", "Clean architecture"],
      },
      {
        number: "02",
        title: "Agency & Business Website Design",
        description:
          "Professional websites that improve trust and presentation.",
        points: ["Professional layout", "Strong hierarchy", "Premium style"],
      },
      {
        number: "03",
        title: "Landing Page Development",
        description: "Landing pages built for conversion and clarity.",
        points: ["Clear CTA", "Strategic layout", "Optimized messaging"],
      },
      {
        number: "04",
        title: "Website Redesign & Customization",
        description:
          "Focused updates without disturbing your existing code flow.",
        points: ["Safe edits", "Code-aware updates", "Structure preserved"],
      },
      {
        number: "05",
        title: "Frontend UI Implementation",
        description:
          "Reusable frontend sections with modern responsive design.",
        points: ["Reusable components", "Responsive sections", "Clean UI"],
      },
      {
        number: "06",
        title: "Website Maintenance Support",
        description: "Ongoing support for content updates and UI improvements.",
        points: ["Fast support", "Targeted updates", "Stable structure"],
      },
    ],

    process: {
      badge: "My process",
      title: "A workflow that keeps",
      highlight: "projects clear and controlled",
      description:
        "From planning to launch, every step is handled with structure and clarity.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          desc: "Understanding your goals, audience, and website needs.",
        },
        {
          number: "02",
          title: "Strategy",
          desc: "Planning structure, hierarchy, and content direction.",
        },
        {
          number: "03",
          title: "Build & Refine",
          desc: "Designing and developing with responsive and premium UI.",
        },
        {
          number: "04",
          title: "Launch & Support",
          desc: "Final delivery with room for future growth.",
        },
      ],
    },

    cta: {
      badge: "Ready to grow?",
      title: "Let’s create something your",
      highlight: "audience will remember",
      description:
        "Whether you need a premium website or a cleaner digital presence, I’m ready to help.",
      primaryButton: "Start Your Project",
      secondaryButton: "Contact Me",
    },
  },
};

export default mock;

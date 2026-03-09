const mock = {
  brand: {
    name: "Marina Akter",
    shortName: "Marina",
    highlightName: "PORTFOLIO",
    logoAlt: "Marina Akter logo",
    description:
      "I build modern, high-converting websites and digital experiences with a focus on clean design, performance, and user experience.",
    copyright: "© 2026 Marina Akter. All rights reserved.",
  },

  navigation: {
    navbar: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/service" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
    footerProduct: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/service" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Case Study", path: "/case-study" },
    ],
    footerCompany: [
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
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
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
  ],

  hero: {
    badge: "Personal Portfolio For Modern Digital Work",
    title: {
      line1: "I build",
      line2: "clean digital",
      prefix: "experiences with",
      highlight: "purpose.",
    },
    description:
      "I help brands, founders, and businesses create modern websites and products that look premium, perform smoothly, and support real growth.",
    primaryButton: "View My Work",
    secondaryButton: "Let’s Talk",
    stats: [
      { value: "20+", label: "Projects Completed" },
      { value: "3+", label: "Years Experience" },
      { value: "100%", label: "Client Focused" },
    ],
    floatingCards: [
      {
        title: "Creative UI",
        subtitle: "Modern and user-focused",
      },
      {
        title: "Fast Delivery",
        subtitle: "Reliable workflow",
      },
    ],
  },

  clients: {
    badge: "Worked with amazing brands",
    title: "Helping businesses build a stronger online presence",
    description:
      "I collaborate with startups, agencies, and growing businesses to create polished digital experiences.",
    logos: [
      { name: "Google", logo: "/logos/logo1.png" },
      { name: "Meta", logo: "/logos/logo2.png" },
      { name: "Microsoft", logo: "/logos/logo3.png" },
      { name: "YouTube", logo: "/logos/logo4.png" },
      { name: "Canva", logo: "/logos/logo5.png" },
    ],
    stats: [
      { value: "20+", label: "Projects delivered" },
      { value: "10+", label: "Happy clients" },
      { value: "95%", label: "Repeat collaboration" },
    ],
  },

  homeServices: {
    badge: "What I do",
    title: "Services tailored for",
    highlight: "modern brands",
    description:
      "I combine strategy, design, and development to create digital products that are visually strong and built for results.",
    featured: {
      eyebrow: "Featured service",
      title: "Personalized website and product development",
      description:
        "From landing pages to full portfolio and business websites, I design and build digital experiences that are modern, responsive, and goal-driven.",
      stats: [
        { value: "20+", label: "Projects launched" },
        { value: "3+", label: "Years experience" },
      ],
      button: "Start a Project",
    },
    items: [
      {
        number: "01",
        title: "Portfolio Websites",
        description:
          "Premium portfolio websites that present your work clearly and professionally.",
      },
      {
        number: "02",
        title: "Business Websites",
        description:
          "Modern websites for agencies, brands, and service businesses with clean structure and strong presentation.",
      },
      {
        number: "03",
        title: "UI/UX Design",
        description:
          "User-focused interface design with attention to clarity, hierarchy, and overall experience.",
      },
      {
        number: "04",
        title: "Responsive Development",
        description:
          "Pixel-clean responsive builds that work smoothly across mobile, tablet, and desktop.",
      },
      {
        number: "05",
        title: "Landing Pages",
        description:
          "High-converting landing pages designed to communicate value and encourage action.",
      },
      {
        number: "06",
        title: "Website Customization",
        description:
          "Updating, refining, and improving existing websites without breaking the original structure.",
      },
    ],
    bottomStrip: {
      eyebrow: "Why work with me",
      title: "Clean design, clear communication, solid execution",
      description:
        "I focus on building websites that feel premium, work smoothly, and support your professional goals.",
      items: [
        { title: "Modern", label: "Design" },
        { title: "Clean", label: "Code" },
        { title: "Reliable", label: "Delivery" },
      ],
    },
  },

  portfolioSection: {
    badge: "Featured Projects",
    title: "Selected work and recent builds",
    description:
      "A few projects that reflect my design style, development approach, and focus on quality.",
    button: "View Full Portfolio",
    caseStudyButton: "View Details",
    projects: [
      {
        title: "Agency Website Redesign",
        category: "Portfolio Website",
        image: "/projects/project1.png",
      },
      {
        title: "Business Landing Page",
        category: "Frontend Development",
        image: "/projects/project2.png",
      },
      {
        title: "SaaS Dashboard UI",
        category: "UI/UX Design",
        image: "/projects/project3.png",
      },
    ],
  },

  testimonialsSection: {
    badge: "Client feedback",
    title: "Trusted by clients who value",
    highlight: "quality work",
    description:
      "I work closely with clients to deliver websites and digital experiences that feel polished, practical, and professional.",
    items: [
      {
        name: "Sarah Mitchell",
        role: "Marketing Director",
        review:
          "The website looked modern, worked perfectly, and matched our brand much better than before. Communication was smooth throughout the project.",
      },
      {
        name: "James Carter",
        role: "Startup Founder",
        review:
          "Very professional work. The final result was clean, responsive, and much stronger than our previous version.",
      },
      {
        name: "Ariana Brooks",
        role: "Product Manager",
        review:
          "Great design sense and strong execution. Everything felt organized, polished, and delivered with care.",
      },
    ],
    stats: [
      { value: "95%", label: "Client satisfaction" },
      { value: "10+", label: "Long-term clients" },
      { value: "20+", label: "Completed projects" },
    ],
  },

  ctaSection: {
    badge: "Let’s work together",
    title: "Need a website that feels",
    highlight: "modern and professional?",
    description:
      "I help individuals, agencies, and businesses build strong digital experiences with clean design and solid frontend development.",
    primaryButton: "Start Your Project",
    secondaryButton: "Contact Me",
    cards: [
      {
        label: "Typical timeline",
        title: "1–4 Weeks",
        description:
          "Fast delivery for portfolio sites, landing pages, and business websites.",
      },
      {
        label: "Work style",
        title: "Detail Focused",
        description:
          "Clear communication, thoughtful execution, and a strong focus on quality.",
      },
    ],
  },

  footer: {
    productTitle: "Pages",
    companyTitle: "Information",
    newsletterTitle: "Stay updated",
    newsletterDescription:
      "Get occasional updates, design insights, and project news.",
    newsletterPlaceholder: "Enter email",
    newsletterButton: "Join",
  },

  aboutPage: {
    title: "About Me",
  },

  caseStudyPage: {
    text: "Case study page content goes here.",
  },

  notFoundPage: {
    title: "404 | Page not found",
  },

  portfolioPage: {
    hero: {
      badge: "My portfolio",
      title: "A collection of selected digital work",
      description:
        "Here are some of my featured projects, including portfolio websites, landing pages, and modern UI builds.",
    },
    filterTabs: ["All", "Portfolio", "Business", "UI/UX"],
    items: [
      {
        title: "Personal Brand Portfolio",
        category: "Portfolio",
        image: "/projects/project1.png",
        description:
          "A modern personal portfolio focused on clean layout, visual hierarchy, and smooth responsiveness.",
        tech: ["React", "Tailwind", "Vite"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Creative Agency Website",
        category: "Business",
        image: "/projects/project2.png",
        description:
          "A premium agency website with strong visual presentation and section-based storytelling.",
        tech: ["React", "Tailwind", "Framer Motion"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "SaaS Dashboard Concept",
        category: "UI/UX",
        image: "/projects/project3.png",
        description:
          "A dashboard-focused interface concept with modern spacing, cards, and clear content structure.",
        tech: ["React", "UI Design", "Responsive"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Service Business Landing Page",
        category: "Business",
        image: "/projects/project1.png",
        description:
          "A conversion-focused landing page designed to highlight services, trust, and calls to action.",
        tech: ["React", "Tailwind", "SEO-ready"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Designer Portfolio Website",
        category: "Portfolio",
        image: "/projects/project2.png",
        description:
          "A visually balanced portfolio layout made to showcase work samples and brand identity.",
        tech: ["React", "Tailwind", "Responsive"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Product Showcase Interface",
        category: "UI/UX",
        image: "/projects/project3.png",
        description:
          "A clean product display interface designed with strong hierarchy and premium visual style.",
        tech: ["UI Design", "Frontend", "Component-based"],
        liveLink: "#",
        githubLink: "#",
      },
    ],
    cta: {
      title: "Want something like this for your brand?",
      description:
        "I can help you design and build a modern website tailored to your goals.",
      primaryButton: "Start a Project",
      secondaryButton: "Contact Me",
    },
  },

  contactPage: {
    hero: {
      badge: "Contact me",
      title: "Let’s discuss your next website or design project",
      description:
        "Have a project idea, redesign request, or portfolio update in mind? Send me a message and I’ll get back to you.",
    },
    infoCards: [
      {
        title: "Email",
        value: "marinaakter878@gmail.com",
        href: "mailto:marinaakter878@gmail.com",
      },
      {
        title: "Phone",
        value: "+880 1325383588",
        href: "tel:+8801325383588",
      },
      {
        title: "Location",
        value: "Dhaka, Bangladesh",
        href: "#",
      },
    ],
    form: {
      title: "Send a message",
      description:
        "Fill out the form below with your project details and I’ll respond as soon as possible.",
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
        "Available for portfolio websites, business websites, landing pages, frontend updates, and design-focused web projects.",
      items: [
        "Personal portfolio websites",
        "Agency and business websites",
        "Landing page design and development",
        "UI updates and website customization",
      ],
    },
  },

  servicesPage: {
    hero: {
      badge: "Services",
      title: "Services built for",
      highlight: "modern brands",
      description:
        "I design and build premium digital products that help ambitious businesses launch faster, operate smarter, and grow with confidence.",
      primaryButton: "Start Your Project",
      secondaryButton: "Book A Free Call",
      stats: [
        { value: "20+", label: "Projects delivered" },
        { value: "10+", label: "Clients" },
        { value: "95%", label: "Satisfaction rate" },
      ],
    },

    servicesIntro: {
      badge: "What I do best",
      title: "Solutions crafted with strategy and execution",
      description:
        "Every service is designed to solve real business problems with a balance of design quality, technical performance, and measurable impact.",
    },

    services: [
      {
        number: "01",
        title: "Portfolio Website Development",
        description:
          "I build clean and polished portfolio websites that help professionals present their work effectively.",
        points: ["Responsive UI", "Clean structure", "Modern design"],
      },
      {
        number: "02",
        title: "Business Website Development",
        description:
          "Professional websites for businesses that need a strong digital presence and clear communication.",
        points: ["Brand-focused layout", "Fast loading", "Scalable sections"],
      },
      {
        number: "03",
        title: "UI/UX Design",
        description:
          "Modern interface design with a focus on user experience, clarity, and polished visual presentation.",
        points: ["User-first design", "Visual hierarchy", "Clean layouts"],
      },
      {
        number: "04",
        title: "Responsive Frontend Development",
        description:
          "Mobile-friendly frontend builds that look great and work consistently across screen sizes.",
        points: ["Cross-device support", "Clean code", "Smooth layout"],
      },
      {
        number: "05",
        title: "Landing Page Design",
        description:
          "Focused landing pages made to communicate value and improve conversion.",
        points: ["Clear CTA", "Strong structure", "Visual impact"],
      },
      {
        number: "06",
        title: "Website Customization",
        description:
          "Improve and update existing websites while respecting the original project structure and logic.",
        points: ["Safe updates", "Existing code support", "Focused edits"],
      },
    ],

    process: {
      badge: "My process",
      title: "A simple process that keeps",
      highlight: "projects clear",
      description:
        "I follow a practical workflow that keeps the project organized from first idea to final delivery.",
      steps: [
        {
          number: "01",
          title: "Discussion",
          desc: "We talk about the project goals, style, audience, and what the website needs to achieve.",
        },
        {
          number: "02",
          title: "Planning",
          desc: "I create a structure for the pages, sections, and design direction before development starts.",
        },
        {
          number: "03",
          title: "Design & Build",
          desc: "I design and develop the website with a focus on quality, responsiveness, and clean execution.",
        },
        {
          number: "04",
          title: "Delivery",
          desc: "After review and refinements, I deliver the finished website ready for launch or next steps.",
        },
      ],
    },

    cta: {
      badge: "Ready to start?",
      title: "Let’s build a digital project your",
      highlight: "audience will remember",
      description:
        "Whether you need a portfolio website, landing page, or business website, I’m ready to help.",
      primaryButton: "Start Your Project",
      secondaryButton: "Contact Me",
    },
  },
};

export default mock;

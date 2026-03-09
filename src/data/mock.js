const mock = {
  brand: {
    name: "Marina Akter",
    shortName: "Marina",
    highlightName: "PORTFOLIO",
    logoAlt: "Marina Akter logo",
    description:
      "I help brands and businesses grow through premium websites, smart digital marketing, and strategic social media management.",
    copyright: "© 2026 Marina Akter. All rights reserved.",
  },

  navigation: {
    navbar: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
    footerProduct: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
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
    badge: "Premium Personal Portfolio",
    title: {
      line1: "I build brands",
      line2: "through websites,",
      prefix: "marketing, and",
      highlight: "digital presence.",
    },
    description:
      "I’m Marina Akter — a MERN Stack Web Developer, Digital Marketer, and Social Media Manager helping businesses create premium online experiences that look exceptional and perform with purpose.",
    primaryButton: "Explore My Work",
    secondaryButton: "Let’s Work Together",
    stats: [
      { value: "20+", label: "Projects Delivered" },
      { value: "3+", label: "Years Experience" },
      { value: "100%", label: "Client-Focused Approach" },
    ],
    floatingCards: [
      {
        title: "MERN Development",
        subtitle: "Modern, scalable web solutions",
      },
      {
        title: "Brand Growth",
        subtitle: "Marketing with clear strategy",
      },
    ],
  },

  clients: {
    badge: "Trusted across industries",
    title: "Helping businesses elevate their digital presence",
    description:
      "From high-converting websites to strategic marketing and polished social media presence, I support brands that want to stand out online with confidence.",
    logos: [
      { name: "Google", logo: "/logos/logo1.png" },
      { name: "Meta", logo: "/logos/logo2.png" },
      { name: "Microsoft", logo: "/logos/logo3.png" },
      { name: "YouTube", logo: "/logos/logo4.png" },
      { name: "Canva", logo: "/logos/logo5.png" },
    ],
    stats: [
      { value: "20+", label: "Projects completed" },
      { value: "10+", label: "Brands supported" },
      { value: "95%", label: "Client satisfaction" },
    ],
  },

  homeServices: {
    badge: "What I offer",
    title: "Premium services for",
    highlight: "modern brands",
    description:
      "I combine technical development, digital strategy, and content-driven brand management to help businesses grow with a stronger online identity.",
    featured: {
      eyebrow: "Featured expertise",
      title: "Web development, digital marketing, and social media growth",
      description:
        "I create modern websites, build stronger brand positioning, and manage digital channels with a focus on performance, presentation, and long-term value.",
      stats: [
        { value: "20+", label: "Projects launched" },
        { value: "3+", label: "Years of experience" },
      ],
      button: "Start a Project",
    },
    items: [
      {
        number: "01",
        title: "MERN Stack Website Development",
        description:
          "Custom, responsive, and performance-focused websites built with modern technologies and clean architecture.",
      },
      {
        number: "02",
        title: "Personal & Business Portfolio Websites",
        description:
          "Elegant portfolio and business websites designed to present your brand with clarity, professionalism, and style.",
      },
      {
        number: "03",
        title: "Digital Marketing Strategy",
        description:
          "Strategic digital marketing support to help brands improve reach, engagement, and conversion across platforms.",
      },
      {
        number: "04",
        title: "Social Media Management",
        description:
          "Professional social media handling with a focus on brand consistency, audience engagement, and strong visual communication.",
      },
      {
        number: "05",
        title: "Landing Page Design & Optimization",
        description:
          "High-converting landing pages crafted to communicate value clearly and support campaign performance.",
      },
      {
        number: "06",
        title: "Website Updates & Customization",
        description:
          "Targeted improvements for existing websites while preserving the original structure, logic, and overall flow.",
      },
    ],
    bottomStrip: {
      eyebrow: "Why work with me",
      title: "Strategy, design, and execution in one place",
      description:
        "I bring together development skills, marketing understanding, and brand-focused thinking to create digital work that feels premium and performs effectively.",
      items: [
        { title: "Premium", label: "Execution" },
        { title: "Strategic", label: "Thinking" },
        { title: "Reliable", label: "Delivery" },
      ],
    },
  },

  portfolioSection: {
    badge: "Featured Projects",
    title: "Selected work crafted for impact",
    description:
      "A selection of projects that reflect my approach to modern web development, digital branding, and polished online presentation.",
    button: "View Full Portfolio",
    caseStudyButton: "View Details",
    projects: [
      {
        title: "Premium Portfolio Website",
        category: "MERN Development",
        image: "/projects/project1.png",
      },
      {
        title: "Brand Landing Page Campaign",
        category: "Digital Marketing",
        image: "/projects/project2.png",
      },
      {
        title: "Social Media Brand System",
        category: "Social Media Management",
        image: "/projects/project3.png",
      },
    ],
  },

  testimonialsSection: {
    badge: "Client feedback",
    title: "Trusted by clients who value",
    highlight: "quality and growth",
    description:
      "I work with a strong focus on presentation, performance, and communication so every project feels refined and results-driven.",
    items: [
      {
        name: "Sarah Mitchell",
        role: "Marketing Director",
        review:
          "Marina delivered an impressive website and supported the brand with thoughtful digital strategy. Her work felt premium, organized, and highly professional.",
      },
      {
        name: "James Carter",
        role: "Startup Founder",
        review:
          "From development to marketing direction, everything was handled with care. The final result elevated our brand and gave us a much stronger online presence.",
      },
      {
        name: "Ariana Brooks",
        role: "Product Manager",
        review:
          "Excellent communication, polished execution, and a strong eye for both design and strategy. Working with Marina was smooth from start to finish.",
      },
    ],
    stats: [
      { value: "95%", label: "Client satisfaction" },
      { value: "10+", label: "Long-term collaborations" },
      { value: "20+", label: "Projects delivered" },
    ],
  },

  ctaSection: {
    badge: "Let’s build your brand",
    title: "Need a digital presence that feels",
    highlight: "premium and memorable?",
    description:
      "I help businesses and personal brands stand out through modern websites, strategic marketing, and consistent social media presence.",
    primaryButton: "Start Your Project",
    secondaryButton: "Contact Me",
    cards: [
      {
        label: "Typical timeline",
        title: "1–4 Weeks",
        description:
          "Ideal for portfolio websites, landing pages, brand refreshes, and focused digital projects.",
      },
      {
        label: "Work approach",
        title: "Quality-Driven",
        description:
          "Every project is handled with attention to detail, strategic thinking, and a premium execution standard.",
      },
    ],
  },

  footer: {
    productTitle: "Pages",
    companyTitle: "Information",
    newsletterTitle: "Stay connected",
    newsletterDescription:
      "Get occasional updates, marketing insights, and creative ideas from my latest work.",
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
      title: "A curated collection of my digital work",
      description:
        "Explore selected projects across MERN stack development, digital marketing, and social media management.",
    },
    filterTabs: ["All", "Development", "Marketing", "Social Media"],
    items: [
      {
        title: "Personal Brand Portfolio",
        category: "Development",
        image: "/projects/project1.png",
        description:
          "A premium personal portfolio website designed to showcase services, projects, and personal brand identity with clarity.",
        tech: ["React", "MongoDB", "Express"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Business Website Experience",
        category: "Development",
        image: "/projects/project2.png",
        description:
          "A polished business website focused on responsive design, modern layout, and stronger brand presentation.",
        tech: ["React", "Node.js", "Responsive Design"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Marketing Campaign Landing Page",
        category: "Marketing",
        image: "/projects/project3.png",
        description:
          "A campaign-focused landing page designed to improve engagement, communicate value, and support conversions.",
        tech: ["Landing Page", "Conversion Strategy", "Brand Messaging"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Digital Growth Strategy Project",
        category: "Marketing",
        image: "/projects/project1.png",
        description:
          "A brand-focused marketing setup created to improve online visibility, audience targeting, and digital consistency.",
        tech: ["Digital Strategy", "Content Planning", "Campaign Structure"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Social Media Brand Management",
        category: "Social Media",
        image: "/projects/project2.png",
        description:
          "A complete content and social presence plan designed to strengthen audience connection and improve brand communication.",
        tech: ["Content Strategy", "Brand Positioning", "Social Management"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        title: "Creative Social Campaign System",
        category: "Social Media",
        image: "/projects/project3.png",
        description:
          "A premium social media management approach focused on consistency, visual quality, and long-term engagement.",
        tech: ["Creative Direction", "Engagement Strategy", "Content Flow"],
        liveLink: "#",
        githubLink: "#",
      },
    ],
    cta: {
      title: "Want to create a stronger brand presence?",
      description:
        "I can help you build a modern website and a digital strategy that supports real business growth.",
      primaryButton: "Start a Project",
      secondaryButton: "Contact Me",
    },
  },

  contactPage: {
    hero: {
      badge: "Contact me",
      title: "Let’s discuss your next digital project",
      description:
        "Whether you need a premium website, digital marketing support, or social media management, I’d love to hear about your goals.",
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
        "Share your project details and I’ll get back to you with the next steps.",
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
        "Available for website development, digital marketing support, social media management, landing page projects, and brand-focused digital updates.",
      items: [
        "MERN stack website development",
        "Digital marketing support",
        "Social media management",
        "Landing page design and optimization",
      ],
    },
  },

  servicesPage: {
    hero: {
      badge: "Services",
      title: "Premium services for",
      highlight: "digital growth",
      description:
        "I provide a balanced combination of MERN stack development, digital marketing, and social media management to help brands build a stronger and more effective online presence.",
      primaryButton: "Start Your Project",
      secondaryButton: "Book A Free Call",
      stats: [
        { value: "20+", label: "Projects delivered" },
        { value: "10+", label: "Brands supported" },
        { value: "95%", label: "Satisfaction rate" },
      ],
    },

    servicesIntro: {
      badge: "What I do best",
      title: "Solutions built for visibility, credibility, and growth",
      description:
        "Each service is designed to help your brand look better, communicate more clearly, and perform more effectively across digital platforms.",
    },

    services: [
      {
        number: "01",
        title: "MERN Stack Web Development",
        description:
          "Modern websites and web applications developed with clean structure, scalability, and performance in mind.",
        points: ["Responsive UI", "Modern stack", "Clean architecture"],
      },
      {
        number: "02",
        title: "Portfolio & Business Website Design",
        description:
          "Premium website experiences crafted to strengthen your personal or business brand online.",
        points: [
          "Professional layout",
          "Strong branding",
          "Clean presentation",
        ],
      },
      {
        number: "03",
        title: "Digital Marketing",
        description:
          "Strategic digital marketing support to help brands improve awareness, engagement, and conversions.",
        points: [
          "Growth-focused strategy",
          "Audience targeting",
          "Campaign support",
        ],
      },
      {
        number: "04",
        title: "Social Media Management",
        description:
          "Consistent and professional social media handling to maintain a strong and polished brand presence.",
        points: [
          "Content direction",
          "Brand consistency",
          "Audience engagement",
        ],
      },
      {
        number: "05",
        title: "Landing Page Design",
        description:
          "Conversion-focused landing pages designed to support promotions, campaigns, and lead generation.",
        points: ["Clear CTA", "Strategic layout", "Optimized messaging"],
      },
      {
        number: "06",
        title: "Website Customization",
        description:
          "Focused updates and improvements for existing websites without disturbing the original logic or structure.",
        points: ["Safe edits", "Code-aware updates", "Structure preserved"],
      },
    ],

    process: {
      badge: "My process",
      title: "A refined workflow that keeps",
      highlight: "projects on track",
      description:
        "From discovery to delivery, I follow a practical and organized process to ensure every project is handled with clarity and care.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          desc: "We discuss your goals, audience, brand positioning, and what success should look like for the project.",
        },
        {
          number: "02",
          title: "Strategy",
          desc: "I define the structure, messaging direction, and digital approach before moving into design or execution.",
        },
        {
          number: "03",
          title: "Build & Optimize",
          desc: "I create the website or digital system with strong attention to design quality, functionality, and brand consistency.",
        },
        {
          number: "04",
          title: "Launch & Support",
          desc: "After refinements and approval, I deliver the final work ready for use, growth, and future updates.",
        },
      ],
    },

    cta: {
      badge: "Ready to grow?",
      title: "Let’s create something your",
      highlight: "audience will remember",
      description:
        "Whether you need a premium website, stronger marketing, or a polished social media presence, I’m ready to help.",
      primaryButton: "Start Your Project",
      secondaryButton: "Contact Me",
    },
  },
};

export default mock;

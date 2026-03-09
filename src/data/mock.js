const mock = {
  brand: {
    name: "Your IT Solution",
    shortName: "Your",
    highlightName: "IT SOLUTION",
    logoAlt: "logo",
    description:
      "Modern SaaS solutions to help businesses launch faster, automate smarter and scale their digital products.",
    copyright: "© 2026 Your IT Solution. All rights reserved.",
  },

  navigation: {
    navbar: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/service" },
      { name: "Pricing", path: "/pricing" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Blog", path: "/blog" },
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
    badge: "Smart SaaS Solutions For Modern Business",
    title: {
      line1: "Build better",
      line2: "digital systems",
      line3: "with confidence.",
      highlight: "confidence.",
    },
    description:
      "Powerful IT solutions for growing brands. Launch faster, automate smarter, and scale your workflow with a modern SaaS experience.",
    primaryButton: "Try A Live Demo",
    secondaryButton: "See How It Works",
    stats: [
      { value: "15k+", label: "Active Users" },
      { value: "99.9%", label: "Uptime" },
      { value: "24/7", label: "Support" },
    ],
    floatingCards: [
      {
        title: "+28% Growth",
        subtitle: "This month analytics",
      },
      {
        title: "Cloud Sync",
        subtitle: "Secure and real-time",
      },
    ],
  },

  clients: {
    badge: "Trusted by global brands",
    title: "Companies that trust our technology",
    description:
      "Helping businesses scale with powerful SaaS solutions and modern digital systems.",
    logos: [
      { name: "Google", logo: "/logos/logo1.png" },
      { name: "Meta", logo: "/logos/logo2.png" },
      { name: "Microsoft", logo: "/logos/logo3.png" },
      { name: "YouTube", logo: "/logos/logo4.png" },
      { name: "Canva", logo: "/logos/logo5.png" },
    ],
    stats: [
      { value: "120+", label: "Projects delivered" },
      { value: "50+", label: "Happy business clients" },
      { value: "98%", label: "Client satisfaction rate" },
    ],
  },

  homeServices: {
    badge: "Premium digital services",
    title: "Solutions designed for ambitious brands",
    highlight: "ambitious brands",
    description:
      "We blend strategy, design, and technology to craft digital products that look exceptional, perform beautifully, and scale with confidence.",
    featured: {
      eyebrow: "Featured service",
      title: "Custom product development for fast-moving businesses",
      description:
        "From premium websites to scalable SaaS products, we create tailored digital systems that combine strategy, beautiful design, and robust engineering.",
      button: "Explore Services",
    },
    items: [
      {
        number: "01",
        title: "Web Development",
        description:
          "High-performance websites and platforms built for speed, scalability, and strong user engagement.",
      },
      {
        number: "02",
        title: "UI/UX Design",
        description:
          "Clean, conversion-focused interfaces designed to create seamless digital experiences and stronger brand trust.",
      },
      {
        number: "03",
        title: "Mobile App Solutions",
        description:
          "Modern mobile experiences with smooth performance, intuitive journeys, and cross-platform flexibility.",
      },
      {
        number: "04",
        title: "Cloud & Automation",
        description:
          "Secure cloud workflows, system integrations, and business automation to help teams move faster with less friction.",
      },
      {
        number: "05",
        title: "SEO & Growth Strategy",
        description:
          "Data-driven optimization and digital growth strategies that increase visibility, traffic, and qualified leads.",
      },
      {
        number: "06",
        title: "Product Strategy",
        description:
          "From idea to launch, we shape digital products with the right balance of business goals, design thinking, and engineering.",
      },
    ],
  },

  portfolioSection: {
    badge: "Featured Projects",
    title: "Work that drives real business results",
    description:
      "Explore some of our recent digital products built for ambitious companies.",
    button: "View Full Portfolio",
    caseStudyButton: "View Case Study",
    projects: [
      {
        title: "Fintech SaaS Dashboard",
        category: "Web Application",
        image: "/projects/project1.png",
      },
      {
        title: "E-commerce Platform",
        category: "Full Stack Development",
        image: "/projects/project2.png",
      },
      {
        title: "AI Analytics Tool",
        category: "Product Design",
        image: "/projects/project3.png",
      },
    ],
  },

  testimonialsSection: {
    badge: "Client testimonials",
    title: "Trusted by teams that expect premium results",
    highlight: "premium results",
    description:
      "We partner with ambitious businesses to deliver modern digital products that create impact, improve experience, and drive growth.",
    items: [
      {
        name: "Sarah Mitchell",
        role: "Marketing Director, NovaEdge",
        review:
          "Their team transformed our platform into a modern, conversion-focused experience. The process was smooth, strategic, and incredibly professional from start to finish.",
      },
      {
        name: "James Carter",
        role: "Founder, BrightLayer",
        review:
          "We needed a partner who understood both design and business. They delivered a product that not only looked premium but also improved engagement and lead quality.",
      },
      {
        name: "Ariana Brooks",
        role: "Product Manager, CloudSync",
        review:
          "From planning to launch, everything felt intentional and polished. Communication was excellent, timelines were respected, and the final result exceeded expectations.",
      },
    ],
    stats: [
      { value: "98%", label: "Client satisfaction rate" },
      { value: "50+", label: "Long-term partnerships" },
      { value: "120+", label: "Projects successfully launched" },
    ],
  },

  ctaSection: {
    badge: "Let’s build something exceptional",
    title: "Ready to turn your ideas into a premium digital product?",
    highlight: "premium digital product?",
    description:
      "We help ambitious brands design, build, and launch modern digital experiences that perform beautifully and scale with confidence.",
    primaryButton: "Start Your Project",
    secondaryButton: "Book A Free Call",
    cards: [
      {
        label: "Project timeline",
        title: "2–6 Weeks",
        description:
          "Fast and focused delivery for modern websites, platforms, and digital products.",
      },
      {
        label: "Collaboration",
        title: "Strategy First",
        description:
          "Clear communication, premium execution, and a process built around results.",
      },
    ],
  },

  footer: {
    productTitle: "Product",
    companyTitle: "Company",
    newsletterTitle: "Join our newsletter",
    newsletterDescription:
      "Get product updates and SaaS growth tips directly in your inbox.",
    newsletterPlaceholder: "Enter email",
    newsletterButton: "Join",
  },

  aboutPage: {
    title: "About Page",
  },

  caseStudyPage: {
    text: "This iAppRoutes.",
  },

  contactPage: {
    title: "",
  },

  notFoundPage: {
    title: "404 | Page not found",
  },

  servicesPage: {
    hero: {
      badge: "Premium digital services",
      title: "Services built for modern brands",
      highlight: "modern brands",
      description:
        "We design and build premium digital products that help ambitious businesses launch faster, operate smarter, and grow with confidence.",
      primaryButton: "Start Your Project",
      secondaryButton: "Book A Free Call",
      stats: [
        { value: "120+", label: "Projects delivered" },
        { value: "50+", label: "Business clients" },
        { value: "98%", label: "Satisfaction rate" },
      ],
    },

    servicesIntro: {
      badge: "What we do best",
      title: "Solutions crafted with strategy and execution",
      description:
        "Every service is designed to solve real business problems with a balance of design quality, technical performance, and measurable impact.",
    },

    services: [
      {
        number: "01",
        title: "Web Development",
        description:
          "We build modern, high-performance websites and platforms focused on speed, scalability, and a polished user experience.",
        points: ["Responsive UI", "Clean architecture", "Performance focused"],
      },
      {
        number: "02",
        title: "UI/UX Design",
        description:
          "From wireframes to refined interfaces, we design intuitive digital experiences that feel premium and convert better.",
        points: [
          "User-first flows",
          "Modern visual systems",
          "Conversion-focused design",
        ],
      },
      {
        number: "03",
        title: "Mobile App Solutions",
        description:
          "We create smooth and scalable mobile experiences that help brands stay connected with users across devices.",
        points: [
          "Cross-platform thinking",
          "Scalable product design",
          "Smooth user journeys",
        ],
      },
      {
        number: "04",
        title: "Cloud & Automation",
        description:
          "We streamline operations with smart cloud integration and workflow automation built for modern business needs.",
        points: [
          "System integration",
          "Workflow automation",
          "Secure cloud solutions",
        ],
      },
      {
        number: "05",
        title: "SEO & Growth Strategy",
        description:
          "We improve visibility, traffic, and conversion through data-driven digital growth planning and optimization.",
        points: ["Technical SEO", "Growth strategy", "Content optimization"],
      },
      {
        number: "06",
        title: "Product Strategy",
        description:
          "We help shape ideas into scalable digital products with the right mix of strategy, design, and engineering.",
        points: ["Roadmapping", "Feature planning", "Launch strategy"],
      },
    ],

    process: {
      badge: "Our process",
      title: "A clear process that keeps projects moving",
      highlight: "projects moving",
      description:
        "We follow a refined process to ensure strategy, clarity, and premium execution at every stage of the project.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          desc: "We understand your business goals, users, challenges, and opportunities before designing the right solution.",
        },
        {
          number: "02",
          title: "Strategy",
          desc: "We define the product direction, experience, architecture, and execution plan with a clear roadmap.",
        },
        {
          number: "03",
          title: "Design & Build",
          desc: "We craft premium interfaces and build modern, scalable systems with performance and usability in mind.",
        },
        {
          number: "04",
          title: "Launch & Optimize",
          desc: "After launch, we refine, improve, and optimize the product for long-term growth and measurable results.",
        },
      ],
    },

    cta: {
      badge: "Ready to work together?",
      title: "Let’s build a digital product your audience will remember",
      highlight: "audience will remember",
      description:
        "Whether you need a premium website, SaaS platform, or a full product strategy, we’re ready to help you move forward.",
      primaryButton: "Start Your Project",
      secondaryButton: "Contact Us",
    },
  },
};

export default mock;

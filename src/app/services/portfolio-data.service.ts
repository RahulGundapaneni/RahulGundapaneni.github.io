import { Injectable } from '@angular/core';
import {
  Project,
  Skill,
  Experience,
  Certification,
  SocialLink,
  PersonalInfo,
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  private personalInfo: PersonalInfo = {
    name: 'Rahul Gundapaneni',
    title: 'Senior Software Engineer',
    subtitle: 'Full Stack Developer | Cloud Architecture | System Design',
    bio: 'Full-stack engineer passionate about building scalable systems and elegant solutions. I specialize in backend architecture with Java and Spring, modern frontend development with Angular and React, and cloud deployments. Always learning, always building.',
    location: 'Dallas, Texas, United States',
    email: 'rahulgundapaneni9@gmail.com',
    avatar: 'RG',
    yearsOfExperience: 8,
    projectsCompleted: 30,
  };

  private socialLinks: SocialLink[] = [
    {
      platform: 'GitHub',
      url: 'https://github.com/RahulGundapaneni',
      icon: 'github',
      label: 'GH',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rahulgsde',
      icon: 'linkedin',
      label: 'IN',
    },
    {
      platform: 'Email',
      url: 'mailto:rahulgundapaneni9@gmail.com',
      icon: 'email',
      label: '@',
    },
  ];

  private experiences: Experience[] = [
    {
      company: 'Citizens Financial Group',
      role: 'Software Development Engineer',
      period: 'January 2023 - Present',
      location: 'Dallas, TX',
      description:
        'Engineered a credit card origination platform with Java Spring Boot microservices, cutting processing time by 75% and enabling seamless customer onboarding. Built a fraud detection dashboard and integrated Accertify, Experian, ThreatMetrix, and TSYS APIs to automate credit, fraud, and issuance workflows.',
      achievements: [
        'Built reusable Angular micro-frontend components with TypeScript, HTML5, and CSS3, cutting frontend build times by 30%',
        'Delivered secure full-stack apps with Angular, Node.js, and Okta OAuth2, boosting user engagement by 40%',
        'Designed a fraud detection dashboard that reduced fraudulent applications by 25%',
        'Migrated legacy systems to AWS (Lambda, S3, RDS) and containerized services with Docker/Kubernetes, cutting hosting costs by 85%',
        'Automated compliance workflows with SEFAS and built CI/CD pipelines via Jenkins, ensuring 100% regulatory compliance',
      ],
      technologies: [
        'Angular',
        'Spring Boot',
        'Node.js',
        'Okta OAuth2',
        'AWS (Lambda, S3, RDS)',
        'Docker/Kubernetes',
        'Jenkins/CI-CD',
      ],
      icon: '🏦',
      logoUrl: 'assets/logos/citizens-bank.svg',
    },
    {
      company: 'University of Texas at Arlington',
      role: 'Software Engineer',
      period: 'December 2021 - December 2022',
      location: 'Arlington, TX',
      description:
        'Developed full-stack modules for the CEMS Portal using Java, Angular, TypeScript, and SQL, enabling course management for 10,000+ students and driving a 30% enrollment increase.',
      achievements: [
        'Built responsive HTML5/CSS3 and Angular UI components for student-facing workflows, reducing support tickets by 20%',
        'Optimized 50+ SQL stored procedures and tables in SSMS, improving data retrieval speed by 40% and cutting downtime by 25%',
        'Mentored junior developers through SQL Server training sessions, accelerating onboarding for new engineers',
      ],
      technologies: [
        'Java',
        'Angular',
        'TypeScript',
        'SQL Server (SSMS)',
        'HTML5/CSS3',
      ],
      icon: '🎓',
      logoUrl: 'assets/logos/uta.png',
    },
    {
      company: 'Morgan Stanley',
      role: 'Software Engineer',
      period: 'August 2020 - August 2021',
      location: 'Bangalore, India',
      description:
        'Maintained 99.9% uptime for Risk1 trading applications supporting global front-office teams, resolving critical production incidents with zero business-hour downtime breaches.',
      achievements: [
        'Reduced repeat incidents by 30% by leading root cause analysis and implementing permanent fixes',
        'Built automated monitoring pipelines for metrics, logs, and alerts, improving defect detection efficiency by 40%',
      ],
      technologies: [
        'Java',
        'SQL',
        'Monitoring & Alerting',
        'Agile/Scrum',
      ],
      icon: '📊',
      logoUrl: 'assets/logos/morgan-stanley.png',
    },
  ];

  private projects: Project[] = [
    {
      id: 'rate-limiter',
      title: 'Enterprise Rate Limiter',
      description:
        'Production-grade fixed-window rate limiter with Spring Boot, featuring configurable limits and REST API with standard X-RateLimit headers.',
      longDescription:
        'A minimal Spring Boot service demonstrating a fixed-window rate limiter with support for multi-permit requests, configurable windows, and comprehensive testing. Great foundation for distributed rate limiting with Redis.',
      technologies: ['Java 17', 'Spring Boot', 'Maven', 'JUnit'],
      category: 'Backend System',
      year: '2024',
      githubUrl: 'https://github.com/RahulGundapaneni/RateLimitter',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      stars: 1,
      highlights: [
        'Fixed-window algorithm with configurable limits',
        'Multi-permit request support',
        'Standard HTTP 429 responses with Retry-After',
        'Comprehensive test coverage',
        'Ready for Redis integration',
      ],
    },
    {
      id: 'hotel-booking',
      title: 'Hotel Booking System',
      description:
        'Full-featured hotel reservation platform with availability search, booking management, and guest profiles using Spring Boot and JPA.',
      longDescription:
        'A Java Spring Boot backend powering hotel availability searches, room inventory management, and reservations with modular domain architecture for easy extensibility.',
      technologies: [
        'Java 17',
        'Spring Boot',
        'Spring Data JPA',
        'H2 Database',
        'Maven',
      ],
      category: 'Full Stack',
      year: '2024',
      githubUrl: 'https://github.com/RahulGundapaneni/HotelBookingSystem',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop',
      stars: 1,
      highlights: [
        'RESTful APIs with validation',
        'Availability search with date range filtering',
        'Booking conflict detection',
        'Guest profile management',
        'Modular domain-driven design',
      ],
    },
    {
      id: 'redis-performance',
      title: 'Redis Performance Analysis',
      description:
        'Performance benchmarking tool for Redis operations with detailed metrics and optimization recommendations.',
      technologies: ['Python', 'Redis', 'Data Analysis'],
      category: 'Performance Tool',
      year: '2023',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
      githubUrl:
        'https://github.com/RahulGundapaneni/redis-performance-measure',
      highlights: [
        'Comprehensive performance metrics',
        'Operation benchmarking',
        'Optimization insights',
      ],
    },
    {
      id: 'leetcode-journey',
      title: 'LeetCode Journey',
      description:
        'Comprehensive collection of LeetCode solutions with detailed explanations, multiple approaches, and complexity analysis for algorithmic problem-solving.',
      technologies: ['Java', 'Algorithms', 'Data Structures', 'Problem Solving'],
      category: 'Algorithms',
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
      githubUrl: 'https://github.com/RahulGundapaneni/leet-code-journey',
      highlights: [
        'Multiple solution approaches',
        'Detailed complexity analysis',
        'Pattern recognition practice',
        'Interview preparation focused',
        'Continuous learning journey',
      ],
    },
  ];

  private skills: Skill[] = [
    // Languages (5)
    { name: 'Java', category: 'language', proficiency: 'expert', level: 95, iconUrl: 'assets/skill-icons/java.svg' },
    { name: 'TypeScript', category: 'language', proficiency: 'expert', level: 92, iconUrl: 'assets/skill-icons/typescript.svg' },
    { name: 'JavaScript', category: 'language', proficiency: 'expert', level: 90, iconUrl: 'assets/skill-icons/javascript.svg' },
    { name: 'Python', category: 'language', proficiency: 'advanced', level: 85, iconUrl: 'assets/skill-icons/python.svg' },
    { name: 'SQL', category: 'language', proficiency: 'expert', level: 88, iconUrl: 'assets/skill-icons/sql.svg' },

    // Frameworks (4)
    { name: 'Angular', category: 'framework', proficiency: 'expert', level: 93, iconUrl: 'assets/skill-icons/angular.svg' },
    { name: 'React', category: 'framework', proficiency: 'advanced', level: 87, iconUrl: 'assets/skill-icons/react.svg' },
    { name: 'Spring Boot', category: 'framework', proficiency: 'expert', level: 94, iconUrl: 'assets/skill-icons/springboot.svg' },
    { name: 'Node.js', category: 'framework', proficiency: 'advanced', level: 86, iconUrl: 'assets/skill-icons/nodejs.svg' },

    // Cloud & DevOps (6)
    { name: 'AWS', category: 'cloud', proficiency: 'expert', level: 91, iconUrl: 'assets/skill-icons/aws.svg' },
    { name: 'Docker', category: 'cloud', proficiency: 'advanced', level: 88, iconUrl: 'assets/skill-icons/docker.svg' },
    { name: 'Kubernetes', category: 'cloud', proficiency: 'advanced', level: 84, iconUrl: 'assets/skill-icons/kubernetes.svg' },
    { name: 'CI/CD', category: 'cloud', proficiency: 'expert', level: 90, iconUrl: 'assets/skill-icons/cicd.svg' },
    { name: 'Terraform', category: 'cloud', proficiency: 'advanced', level: 80, iconUrl: 'https://cdn.simpleicons.org/terraform/844FBA' },
    { name: 'GCP', category: 'cloud', proficiency: 'intermediate', level: 70, iconUrl: 'https://cdn.simpleicons.org/googlecloud/4285F4' },

    // Databases & Messaging (6)
    { name: 'PostgreSQL', category: 'database', proficiency: 'expert', level: 92, iconUrl: 'assets/skill-icons/postgresql.svg' },
    { name: 'MySQL', category: 'database', proficiency: 'expert', level: 90, iconUrl: 'assets/skill-icons/mysql.svg' },
    { name: 'SQL Server', category: 'database', proficiency: 'expert', level: 89, iconUrl: 'assets/skill-icons/sqlserver.svg' },
    { name: 'MongoDB', category: 'database', proficiency: 'advanced', level: 85, iconUrl: 'assets/skill-icons/mongodb.svg' },
    { name: 'Redis', category: 'database', proficiency: 'advanced', level: 83, iconUrl: 'assets/skill-icons/redis.svg' },
    { name: 'Apache Kafka', category: 'database', proficiency: 'advanced', level: 78, iconUrl: 'https://cdn.simpleicons.org/apachekafka/231F20' },
  ];

  private certifications: Certification[] = [
    {
      title: 'Credo Award – Exceeding Customer Expectations',
      issuer: 'Citizens Bank',
      description: 'Excellence in UI design and customer experience',
      tags: ['Angular', 'Java', 'Customer Experience'],
    },
    {
      title: 'Certified Information Systems Security Professional',
      issuer: 'National Security Agency (NSA/CNSS)',
      description: 'NSTISSI 4011 & CNSSI 4013E training',
      tags: ['Security', 'Compliance'],
    },
    {
      title: 'Wiley Certified Python Programmer',
      issuer: 'Wiley Edge',
      tags: ['Python', 'Programming'],
    },
    {
      title: 'SSL Certificates for Web Developers',
      issuer: 'LinkedIn Learning',
      tags: ['HTTPS', 'SSL', 'Security'],
    },
    {
      title: 'HackerRank Certificates',
      issuer: 'HackerRank',
      description: 'C Basic, C Intermediate, Python Basic, Python Intermediate',
      tags: ['C', 'Python', 'Problem Solving'],
    },
  ];

  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }

  getSocialLinks(): SocialLink[] {
    return this.socialLinks;
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.slice(0, 4);
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((skill) => skill.category === category);
  }

  getCertifications(): Certification[] {
    return this.certifications;
  }
}

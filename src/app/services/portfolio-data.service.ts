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
    email: 'rahulgsde@gmail.com',
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
      url: 'mailto:rahulgsde@gmail.com',
      icon: 'email',
      label: '@',
    },
  ];

  private experiences: Experience[] = [
    {
      company: 'Citizens Financial Group',
      role: 'Senior Software Engineer',
      period: '2023 - Present',
      location: 'Johnston, RI',
      description:
        'Transformed credit card onboarding from multi-day slog to minutes-long win. Built secure, fraud-resistant platforms that cut processing time by 75% and boosted approval accuracy by 20%.',
      achievements: [
        'Architected micro-frontend ecosystems with Angular + Spring Boot (50% faster deployments)',
        'Engineered fraud detection dashboard that cut fraudulent apps by 25% and improved retention 30%',
      ],
      technologies: [
        'Angular',
        'Spring Boot',
        'AWS (Lambda, S3, RDS)',
        'Docker/Kubernetes',
        'PostgreSQL',
      ],
      icon: '🏦',
      logoUrl: 'assets/logos/citizens-bank.svg',
    },
    {
      company: 'Morgan Stanley',
      role: 'Full-Stack Engineer',
      period: '2020 - 2021',
      location: 'New York, NY',
      description:
        'Built analytics tools that made complex risk data digestible for 50+ analysts. Raised efficiency 20% and cut incident resolution times by 30-40% through intelligent data pipelines.',
      achievements: [
        'Designed real-time risk monitoring systems for institutional portfolios',
        'Optimized query performance lifting analyst productivity across trading desks',
      ],
      technologies: [
        'Python',
        'Node.js',
        'React',
        'SQL Server',
        'AWS',
        'Data Pipelines',
      ],
      icon: '📊',
      logoUrl: 'assets/logos/morgan-stanley.png',
    },
    {
      company: 'University of Texas at Arlington',
      role: 'Software Engineer',
      period: '2021 - 2022',
      location: 'Arlington, TX',
      description:
        'Delivered platforms serving 10K+ students with 40% faster queries and 30% enrollment growth. Built a check-in app that halved errors and grew team proficiency 70% through training.',
      achievements: [
        'Created Campus Event Management System handling 5,000+ daily users seamlessly',
        'Engineered mobile check-in system reducing data entry errors by 50%',
      ],
      technologies: [
        'Java',
        'Angular',
        'MySQL',
        'AWS',
        'REST APIs',
        'Mobile Development',
      ],
      icon: '🎓',
      logoUrl: 'assets/logos/uta.png',
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
    { name: 'Java', category: 'language', proficiency: 'expert', level: 95, icon: '☕' },
    { name: 'TypeScript', category: 'language', proficiency: 'expert', level: 92, icon: '🔷' },
    { name: 'JavaScript', category: 'language', proficiency: 'expert', level: 90, icon: '⚡' },
    { name: 'Python', category: 'language', proficiency: 'advanced', level: 85, icon: '🐍' },
    { name: 'SQL', category: 'language', proficiency: 'expert', level: 88, icon: '📊' },

    // Frameworks (4)
    { name: 'Angular', category: 'framework', proficiency: 'expert', level: 93, icon: '⬡' },
    { name: 'React', category: 'framework', proficiency: 'advanced', level: 87, icon: '⚛️' },
    { name: 'Spring Boot', category: 'framework', proficiency: 'expert', level: 94, icon: '🍃' },
    { name: 'Node.js', category: 'framework', proficiency: 'advanced', level: 86, icon: '💚' },

    // Cloud & DevOps (4)
    { name: 'AWS', category: 'cloud', proficiency: 'expert', level: 91, icon: '☁️' },
    { name: 'Docker', category: 'cloud', proficiency: 'advanced', level: 88, icon: '🐳' },
    { name: 'Kubernetes', category: 'cloud', proficiency: 'advanced', level: 84, icon: '⚙️' },
    { name: 'CI/CD', category: 'cloud', proficiency: 'expert', level: 90, icon: '🔄' },

    // Databases (5)
    { name: 'PostgreSQL', category: 'database', proficiency: 'expert', level: 92, icon: '🐘' },
    { name: 'MySQL', category: 'database', proficiency: 'expert', level: 90, icon: '🐬' },
    { name: 'SQL Server', category: 'database', proficiency: 'expert', level: 89, icon: '📊' },
    { name: 'MongoDB', category: 'database', proficiency: 'advanced', level: 85, icon: '🍃' },
    { name: 'Redis', category: 'database', proficiency: 'advanced', level: 83, icon: '⚡' },
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

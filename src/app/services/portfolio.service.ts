import { Injectable } from '@angular/core';
import { Experience, SkillCategory, NavLink } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  getNavLinks(): NavLink[] {
    return [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        role: 'Frontend Angular Developer',
        company: 'ADDINN Group',
        location: 'Tunis, Tunisia',
        period: 'Oct. 2023 – Present',
        type: 'full-time',
        projects: [
          {
            name: 'FreightSure TMS',
            bullets: [
              'Developed UI for the FreightSure TMS platform with responsive dashboards for fleet monitoring and logistics analytics.',
              'Integrated real-time WebSocket connections to display live IoT data from vehicle tracking devices.',
              'Consumed REST APIs and resolved functional/design issues, ensuring optimal performance across modules.',
            ],
          },
          {
            name: 'Digirecouvrement',
            bullets: [
              'Developed a complete workflow management platform for various business processes.',
              'Created customizable workflows for different operational stages.',
              'Built an ergonomic and modern interface using Angular to enhance user interactions.',
              'Enabled activity tracking and interaction monitoring with automated reminders and notifications.',
            ],
          },
          {
            name: 'Ferplay Services',
            bullets: [
              'Built a multi-service home services platform (housekeeping, pressing, gardening, furniture cleaning, alterations, ironing) using Angular.',
              'Integrated UI/UX designs and implemented booking workflows with real-time appointment scheduling and service tracking.',
              'Consumed REST APIs for seamless frontend-backend integration and user management.',
              'Debugged and optimized modules, improving performance and delivering production-ready features on schedule.',
            ],
          },
        ],
        skills: [
          'Angular',
          'TypeScript',
          'RxJS',
          'NgRx',
          'WebSockets',
          'REST APIs',
          'NX Monorepo',
          'Docker',
          'Keycloak',
          'Tailwind CSS',
        ],
      },
      {
        role: 'Full Stack Developer Intern',
        company: 'IJENI',
        location: 'Tunis, Tunisia',
        period: 'Feb. 2023 – Jun. 2023',
        type: 'intern',
        projects: [
          {
            name: 'Real-Time Chat Application',
            bullets: [
              'Designed and developed a real-time chat application using Angular, Node.js, Express.js, and MongoDB.',
              'Implemented WebSocket connections via Socket.io for real-time communication between users.',
              'Facilitated instant messaging capabilities with efficient frontend-backend integration.',
            ],
          },
        ],
        skills: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebSockets'],
      },
    ];
  }

  getSkillCategories(): SkillCategory[] {
    return [
      {
        label: 'Frontend',
        skills: [
          { name: 'Angular', icon: 'angular', category: 'frontend' },
          { name: 'React.js', icon: 'react', category: 'frontend' },
          { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
          { name: 'JavaScript', icon: 'javascript', category: 'frontend' },
          { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
          { name: 'HTML5', icon: 'html5', category: 'frontend' },
          { name: 'SCSS', icon: 'scss', category: 'frontend' },
        ],
      },
      {
        label: 'Backend',
        skills: [
          { name: 'Node.js', icon: 'nodejs', category: 'backend' },
          { name: 'NestJS', icon: 'nestjs', category: 'backend' },
          { name: 'Express.js', icon: 'express', category: 'backend' },
          { name: 'Java', icon: 'java', category: 'backend' },
          { name: 'Python', icon: 'python', category: 'backend' },
          { name: 'Spring Boot', icon: 'spring', category: 'backend' },
        ],
      },
      {
        label: 'State & Real-Time',
        skills: [
          { name: 'NgRx', icon: 'ngrx', category: 'state' },
          { name: 'RxJS', icon: 'rxjs', category: 'state' },
          { name: 'Socket.io', icon: 'socketio', category: 'state' },
          { name: 'WebSockets', icon: 'websockets', category: 'state' },
        ],
      },
      {
        label: 'Infrastructure & DevOps',
        skills: [
          { name: 'Docker', icon: 'docker', category: 'infra' },
          { name: 'Kubernetes', icon: 'kubernetes', category: 'infra' },
          { name: 'Keycloak', icon: 'keycloak', category: 'infra' },
          { name: 'GitLab', icon: 'gitlab', category: 'infra' },
          { name: 'GitHub', icon: 'github', category: 'infra' },
          { name: 'NX Monorepo', icon: 'nx', category: 'infra' },
        ],
      },
      {
        label: 'Databases',
        skills: [
          { name: 'MongoDB', icon: 'mongodb', category: 'db' },
          { name: 'PostgreSQL', icon: 'postgresql', category: 'db' },
          { name: 'MySQL', icon: 'mysql', category: 'db' },
          { name: 'Oracle', icon: 'oracle', category: 'db' },
        ],
      },
    ];
  }

  getSkillIconUrl(icon: string): string {
    const iconMap: Record<string, string> = {
      angular: 'https://img.icons8.com/?size=48&id=6SWtW8hxZWSo&format=png',
      react: 'https://img.icons8.com/?size=48&id=asWSSTBrDlTW&format=png',
      typescript: 'https://img.icons8.com/?size=48&id=uJM6fQYqDaZK&format=png',
      javascript: 'https://img.icons8.com/?size=48&id=108784&format=png',
      tailwind: 'https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png',
      html5: 'https://img.icons8.com/?size=48&id=20909&format=png',
      scss: 'https://img.icons8.com/?size=48&id=QBqFNfPPB2Kx&format=png',
      nodejs: 'https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png',
      nestjs: 'https://img.icons8.com/?size=48&id=9ESZMOeUioJS&format=png',
      express: 'https://img.icons8.com/?size=48&id=kg46nzoJrmTR&format=png&color=ffffff',
      java: 'https://img.icons8.com/?size=48&id=GPfHz0SM85FX&format=png&color=ffffff',
      python: 'https://img.icons8.com/?size=48&id=13441&format=png&color=ffffff',
      spring: 'https://img.icons8.com/?size=48&id=90519&format=png',
      ngrx: 'https://img.icons8.com/?size=48&id=6SWtW8hxZWSo&format=png',
      rxjs: 'https://img.icons8.com/?size=48&id=asWSSTBrDlTW&format=png',
      socketio: 'https://img.icons8.com/?size=48&id=bzf0DqjXFHIW&format=png&color=ffffff',
      websockets: 'https://img.icons8.com/?size=48&id=106836&format=png&color=ffffff',
      docker: 'https://img.icons8.com/?size=48&id=cdYUlRaag9G9&format=png',
      kubernetes: 'https://img.icons8.com/?size=48&id=cvzmaEA4kC0o&format=png',
      keycloak: 'https://img.icons8.com/fluency/48/key-cloak.png',
      gitlab: 'https://img.icons8.com/?size=48&id=34886&format=png',
      github: 'https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png',
      nx: 'https://img.icons8.com/?size=48&id=9ESZMOeUioJS&format=png',
      mongodb: 'https://img.icons8.com/?size=48&id=8rKdRqZFLurS&format=png',
      postgresql: 'https://img.icons8.com/?size=48&id=38561&format=png',
      mysql: 'https://img.icons8.com/?size=48&id=9nLaR5KFGjN0&format=png',
      oracle: 'https://img.icons8.com/?size=48&id=39913&format=png',
    };
    return iconMap[icon] || '';
  }
}

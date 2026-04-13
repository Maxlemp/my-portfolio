import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExpProject {
  name: string;
  bullets: string[];
}
interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'intern';
  projects: ExpProject[];
  skills: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent implements OnInit {
  activeIndex = signal(0);
  experiences: Experience[] = [];

  ngOnInit(): void {
    this.experiences = [
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
            name: 'Ferplay Services',
            bullets: [
              'Built a multi-service home services platform (housekeeping, pressing, gardening, furniture cleaning, alterations, ironing) using Angular.',
              'Integrated UI/UX designs and implemented booking workflows with real-time appointment scheduling and service tracking.',
              'Consumed REST APIs for seamless frontend-backend integration and user management.',
              'Debugged and optimized modules, improving performance and delivering production-ready features on schedule.',
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
}

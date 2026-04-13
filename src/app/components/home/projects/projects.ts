import { Component, ElementRef, ViewChild, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  category: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  url?: string;
  isPrivate: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLDivElement>;

  activeIndex = signal(0);

  projects: Project[] = [
    {
      category: 'Transport Management System',
      title: 'FreightSure TMS',
      description:
        'Enterprise logistics platform with responsive dashboards for fleet monitoring and real-time analytics. Integrates live IoT data from vehicle tracking devices via WebSocket connections.',
      features: [
        'Real-time fleet monitoring dashboards',
        'Live IoT vehicle tracking via WebSockets',
        'Logistics analytics & reporting',
        'REST API integration & performance optimization',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'NgRx',
        'WebSockets',
        'REST APIs',
        'Docker',
        'Keycloak',
      ],
      url: undefined,
      isPrivate: true,
    },
    {
      category: 'Workflow Management Platform',
      title: 'Digirecouvrement',
      description:
        'Complete workflow management platform for debt recovery business processes. Features customizable workflows, activity tracking, automated reminders, and an interactive dashboard.',
      features: [
        'Customizable multi-stage workflows',
        'Activity tracking & interaction monitoring',
        'Automated reminders & notifications',
        'Interactive dashboard & advanced management',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'NgRx',
        'REST APIs',
        'Docker',
        'Keycloak',
        'NX Monorepo',
      ],
      url: undefined,
      isPrivate: true,
    },
    {
      category: 'Home Services Platform',
      title: 'Ferplay Services',
      description:
        'Multi-service home services platform covering housekeeping, pressing, gardening, furniture cleaning, alterations, and ironing. Features real-time booking and appointment scheduling.',
      features: [
        'Multi-service booking workflows',
        'Real-time appointment scheduling & tracking',
        'User management & service history',
        'Production-ready performance optimization',
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Tailwind CSS', 'Docker'],
      url: undefined,
      isPrivate: true,
    },
    {
      category: 'Real-Time Communication',
      title: 'Chat Application',
      description:
        'Real-time messaging application with instant communication between users via WebSocket connections. Built as an end-of-studies project with full-stack JavaScript.',
      features: [
        'Real-time messaging via Socket.io',
        'WebSocket-based instant communication',
        'User authentication & session management',
        'Efficient frontend-backend integration',
      ],
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      url: undefined,
      isPrivate: false,
    },
    {
      category: 'E-Commerce',
      title: 'E-Commerce Web & Mobile App',
      description:
        'Unified shopping experience across web and mobile platforms using the FakeStore API. Built with React.js and React Native for a consistent cross-platform experience.',
      features: [
        'Cross-platform web & mobile experience',
        'FakeStore API integration',
        'Product browsing & cart management',
        'Consistent UI across platforms',
      ],
      technologies: ['React.js', 'React Native', 'JavaScript', 'REST APIs'],
      url: undefined,
      isPrivate: false,
    },
    {
      category: 'Booking System',
      title: 'Hotel Management System',
      description:
        'Hotel booking system with streamlined reservation management, an intuitive interface, and a robust API architecture built with Spring Boot and Angular.',
      features: [
        'Hotel reservation management',
        'Intuitive booking interface',
        'Robust REST API architecture',
        'Spring Boot & Angular integration',
      ],
      technologies: ['Spring Boot', 'Angular', 'TypeScript', 'Java', 'REST APIs'],
      url: undefined,
      isPrivate: false,
    },
  ];

  canPrev = computed(() => this.activeIndex() > 0);
  canNext = computed(() => this.activeIndex() < this.projects.length - 1);

  prev(): void {
    if (this.canPrev()) {
      this.activeIndex.update((i) => i - 1);
      this.scrollToActive();
    }
  }

  next(): void {
    if (this.canNext()) {
      this.activeIndex.update((i) => i + 1);
      this.scrollToActive();
    }
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
    this.scrollToActive();
  }

  private scrollToActive(): void {
    setTimeout(() => {
      const slider = this.sliderRef?.nativeElement;
      if (!slider) return;
      const card = slider.children[this.activeIndex()] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 30);
  }

  getTechSlice(techs: string[]): string[] {
    return techs.slice(0, 6);
  }

  getOverflow(techs: string[]): number {
    return Math.max(0, techs.length - 6);
  }
}

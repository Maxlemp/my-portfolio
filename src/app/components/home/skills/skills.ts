import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
}
interface SkillCategory {
  label: string;
  index: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      label: 'Frontend',
      index: '01',
      skills: [
        { name: 'Angular', icon: 'https://img.icons8.com/?size=48&id=6SWtW8hxZWSo&format=png' },
        { name: 'React.js', icon: 'https://img.icons8.com/?size=48&id=asWSSTBrDlTW&format=png' },
        { name: 'TypeScript', icon: 'https://img.icons8.com/?size=48&id=uJM6fQYqDaZK&format=png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/?size=48&id=108784&format=png' },
        {
          name: 'Tailwind CSS',
          icon: 'https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png',
        },
        { name: 'HTML5', icon: 'https://img.icons8.com/?size=48&id=20909&format=png' },
        { name: 'SCSS', icon: 'https://img.icons8.com/?size=48&id=QBqFNfPPB2Kx&format=png' },
      ],
    },
    {
      label: 'Backend',
      index: '02',
      skills: [
        { name: 'Node.js', icon: 'https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png' },
        { name: 'NestJS', icon: 'https://img.icons8.com/?size=48&id=9ESZMOeUioJS&format=png' },
        {
          name: 'Express.js',
          icon: 'https://img.icons8.com/?size=48&id=kg46nzoJrmTR&format=png&color=ffffff',
        },
        {
          name: 'Java',
          icon: 'https://img.icons8.com/?size=48&id=GPfHz0SM85FX&format=png&color=ffffff',
        },
        {
          name: 'Python',
          icon: 'https://img.icons8.com/?size=48&id=13441&format=png&color=ffffff',
        },
        { name: 'Spring Boot', icon: 'https://img.icons8.com/?size=48&id=90519&format=png' },
      ],
    },
    {
      label: 'State & Real-Time',
      index: '03',
      skills: [
        { name: 'NgRx', icon: 'https://img.icons8.com/?size=48&id=6SWtW8hxZWSo&format=png' },
        { name: 'RxJS', icon: 'https://img.icons8.com/?size=48&id=asWSSTBrDlTW&format=png' },
        {
          name: 'Socket.io',
          icon: 'https://img.icons8.com/?size=48&id=bzf0DqjXFHIW&format=png&color=ffffff',
        },
        {
          name: 'WebSockets',
          icon: 'https://img.icons8.com/?size=48&id=106836&format=png&color=ffffff',
        },
      ],
    },
    {
      label: 'Infrastructure & DevOps',
      index: '04',
      skills: [
        { name: 'Docker', icon: 'https://img.icons8.com/?size=48&id=cdYUlRaag9G9&format=png' },
        { name: 'Kubernetes', icon: 'https://img.icons8.com/?size=48&id=cvzmaEA4kC0o&format=png' },
        { name: 'Keycloak', icon: 'https://img.icons8.com/fluency/48/key-cloak.png' },
        { name: 'GitLab', icon: 'https://img.icons8.com/?size=48&id=34886&format=png' },
        { name: 'GitHub', icon: 'https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png' },
        { name: 'NX Monorepo', icon: 'https://img.icons8.com/?size=48&id=9ESZMOeUioJS&format=png' },
      ],
    },
    {
      label: 'Databases',
      index: '05',
      skills: [
        { name: 'MongoDB', icon: 'https://img.icons8.com/?size=48&id=8rKdRqZFLurS&format=png' },
        { name: 'PostgreSQL', icon: 'https://img.icons8.com/?size=48&id=38561&format=png' },
        { name: 'MySQL', icon: 'https://img.icons8.com/?size=48&id=9nLaR5KFGjN0&format=png' },
        { name: 'Oracle', icon: 'https://img.icons8.com/?size=48&id=39913&format=png' },
      ],
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '3+', label: 'Enterprise Projects' },
    { value: '10+', label: 'Technologies Mastered' },
    { value: 'META', label: 'Certified' },
    { value: 'AWS', label: 'Certified' },
  ];

  certifications = [
    { name: 'React & React Native', issuer: 'Meta', year: '2024' },
    { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Responsive Web Design', issuer: 'FreeCodeCamp', year: '2024' },
    {
      name: "Master's in Software Engineering & DevOps",
      issuer: 'Horizon School of Digital Technologies',
      year: '2025',
    },
  ];
}

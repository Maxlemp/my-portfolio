import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubApiService } from '../../../lib/github/github-api.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMeComponent implements OnInit {
  github = inject(GithubApiService);

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

  ngOnInit(): void {
    this.github.fetchStats();
  }

  get stats() {
    return [
      { value: '2+', label: 'Years Experience' },
      { value: '3+', label: 'Enterprise Projects' },
      { value: String(this.github.stats().followers), label: 'GitHub Followers' },
      { value: String(this.github.stats().repos), label: 'Public Repos' },
    ];
  }
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };
  submitted = signal(false);
  sending = signal(false);

  links = [
    {
      label: 'GitHub',
      href: 'https://github.com/Maxlemp',
      icon: 'github',
      handle: '@Maxlemp',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohamed-fahd-benamara/',
      icon: 'linkedin',
      handle: 'mohamed-fahd-benamara',
    },
    {
      label: 'Email',
      href: 'mailto:mohamedfahdbenamara02@gmail.com',
      icon: 'mail',
      handle: 'mohamedfahdbenamara02@gmail.com',
    },
    {
      label: 'Location',
      href: 'https://maps.google.com/?q=Tunis,Tunisia',
      icon: 'location',
      handle: 'Tunis, Tunisia',
    },
  ];

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.formData = { name: '', email: '', message: '' };
    }, 1500);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ContactItem {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  contacts: ContactItem[] = [
    {
      label: 'Email',
      value: 'rahulgsde@gmail.com',
      href: 'mailto:rahulgsde@gmail.com'
    },
    {
      label: 'Phone',
      value: '682-529-1305',
      href: 'tel:+16825291305'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/rahulgsde',
      href: 'https://linkedin.com/in/rahulgsde',
      external: true
    },
    {
      label: 'GitHub',
      value: 'github.com/RahulGundapaneni',
      href: 'https://github.com/RahulGundapaneni',
      external: true
    }
  ];
}

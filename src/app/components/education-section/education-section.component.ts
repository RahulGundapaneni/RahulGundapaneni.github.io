import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface EducationItem {
  school: string;
  degree: string;
  location: string;
  date: string;
}

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss'
})
export class EducationSectionComponent {
  education: EducationItem[] = [
    {
      school: 'The University of Texas at Arlington',
      degree: 'Master of Science in Computer Science',
      location: 'Arlington, Texas',
      date: 'Dec 2022'
    },
    {
      school: 'Joginpally Institute of Engineering and Technology',
      degree: 'Bachelor of Science in Computer Science',
      location: 'Hyderabad, India',
      date: 'May 2020'
    }
  ];
}

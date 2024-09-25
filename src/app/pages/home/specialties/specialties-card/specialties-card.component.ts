import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specialties-card',
  standalone: true,
  imports: [],
  templateUrl: './specialties-card.component.html',
  styleUrl: './specialties-card.component.css'
})
export class SpecialtiesCardComponent {
  @Input() title: string = '';
  @Input() cardClass: string = '';
}

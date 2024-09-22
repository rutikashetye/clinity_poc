import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specialties-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() cardClass: string = '';
}

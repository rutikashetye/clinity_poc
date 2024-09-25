import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  @Input() title: string = '';
  @Input() value1: string = '';
  @Input() value2: string = '';
  @Input() cardColor: string = '';
  @Input() iconClass: string = '';
}

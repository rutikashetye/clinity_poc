import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.css'
})
export class ServicesCardComponent {

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() isImageRight: boolean = false;
  @Input() imageUrl: string = '';

}

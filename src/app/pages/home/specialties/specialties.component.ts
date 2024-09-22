import { Component } from '@angular/core';
import { CardComponent as CardComponent } from "./card/card.component";

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.css'
})
export class SpecialtiesComponent {

}

import { Component } from '@angular/core';
import { SpecialtiesCardComponent } from "./specialties-card/specialties-card.component";

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [SpecialtiesCardComponent],
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.css'
})
export class SpecialtiesComponent {

}

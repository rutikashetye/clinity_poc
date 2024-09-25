import { Component } from '@angular/core';
import { SpecialtiesCardComponent } from "../home/specialties/specialties-card/specialties-card.component";
import { ServicesCardComponent } from "./services-card/services-card.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SpecialtiesCardComponent, ServicesCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}

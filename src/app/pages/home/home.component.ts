import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { SpecialtiesComponent } from "./specialties/specialties.component";
import { HomeTileComponent } from "./home_tile/home_tile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent, AppointmentComponent, SpecialtiesComponent, HomeTileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

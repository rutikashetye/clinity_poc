import { Component } from '@angular/core';
import { HeaderTileComponent } from "./header-tile/header-tile.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderTileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}

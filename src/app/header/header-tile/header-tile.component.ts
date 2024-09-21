import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-tile',
  standalone: true,
  imports: [],
  templateUrl: './header-tile.component.html',
  styleUrl: './header-tile.component.css'
})
export class HeaderTileComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() imageUrl: string = ''; 
}

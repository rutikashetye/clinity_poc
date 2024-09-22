import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-tile',
  standalone: true,
  imports: [],
  templateUrl: './home_tile.component.html',
  styleUrl: './home_tile.component.css'
})
export class HomeTileComponent {
  @Input() title : string = '';
  @Input() iconClass: string = '';
}


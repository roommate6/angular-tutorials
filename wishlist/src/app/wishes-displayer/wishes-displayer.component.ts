import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wish } from '../../shared/models/Wish';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wishes-displayer',
  standalone: true,
  imports: [CommonModule, WishListItemComponent],
  templateUrl: './wishes-displayer.component.html',
  styleUrl: './wishes-displayer.component.css',
})
export class WishesDisplayerComponent {
  @Input() wishes!: Wish[];
}

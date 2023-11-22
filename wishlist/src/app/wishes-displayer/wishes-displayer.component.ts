import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wish, WishState } from '../../shared/models/Wish';

@Component({
  selector: 'wishes-displayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishes-displayer.component.html',
  styleUrl: './wishes-displayer.component.css',
})
export class WishesDisplayerComponent {
  @Input() wishes: Wish[] = [];

  verifyThatWishIsCompleted(wish: Wish): boolean {
    return wish.state === WishState.Completed;
  }

  toggleWishState(wish: Wish): void {
    if (wish.state == WishState.Uncompleted) {
      wish.state = WishState.Completed;
      return;
    }
    wish.state = WishState.Uncompleted;
  }
}

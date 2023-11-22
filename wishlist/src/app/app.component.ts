import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Wish, WishState } from '../shared/models/Wish';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  wishes: Wish[] = [
    // new Wish('I want to learn Angular.', WishState.Uncompleted),
    // new Wish('I want to help my family.', WishState.Uncompleted),
    // new Wish('Drink coffe.', WishState.Completed),
    // new Wish('Find grass that cuts itself.', WishState.Uncompleted),
  ];
  newWishContent: string = '';
  title = 'wishlist';

  addNewWish(): void {
    this.wishes.push(new Wish(this.newWishContent, WishState.Uncompleted));
    this.newWishContent = '';
  }

  wishIsCompleted(wish: Wish): boolean {
    return wish.state === WishState.Completed;
  }

  toggledWishCheckbox(wish: Wish): void {
    if (wish.state == WishState.Uncompleted) {
      wish.state = WishState.Completed;
      return;
    }
    wish.state = WishState.Uncompleted;
  }
}

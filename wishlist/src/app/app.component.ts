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
  title: string = 'wishlist';
  wishes: Wish[] = [
    new Wish('I want to learn Angular.', WishState.Uncompleted),
    new Wish('I want to help my family.', WishState.Uncompleted),
    new Wish('Drink coffe.', WishState.Completed),
    new Wish('Find grass that cuts itself.', WishState.Uncompleted),
  ];
  wishesWithFilterApplied: Wish[] = this.wishes;
  newWishContent: string = '';
  wishFilter: string = 'all';

  addNewWish(): void {
    this.wishes.push(new Wish(this.newWishContent, WishState.Uncompleted));
    this.newWishContent = '';
  }

  verifyThatWishIsCompleted(wish: Wish): boolean {
    return wish.state === WishState.Completed;
  }

  toggledWishCheckbox(wish: Wish): void {
    if (wish.state == WishState.Uncompleted) {
      wish.state = WishState.Completed;
      return;
    }
    wish.state = WishState.Uncompleted;
  }

  handleTheChangeOfTheWishFilter(event: any) {
    if (event === 'all') {
      this.wishesWithFilterApplied = this.wishes;
      return;
    }
    if (event === 'completed') {
      this.wishesWithFilterApplied = this.wishes.filter((wish) => {
        return wish.state === WishState.Completed;
      });
      return;
    }
    if (event === 'uncompleted') {
      this.wishesWithFilterApplied = this.wishes.filter((wish) => {
        return wish.state === WishState.Uncompleted;
      });
      return;
    }
  }
}

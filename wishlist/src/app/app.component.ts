import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Wish, WishState } from '../shared/models/Wish';
import { FormsModule } from '@angular/forms';
import { WishesDisplayerComponent } from './wishes-displayer/wishes-displayer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishesDisplayerComponent],
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
  newWishContent: string = '';
  wishFilter: string = 'all';

  get wishesWithFilterApplied(): Wish[] {
    let wishFilter = this.wishFilter;

    if (wishFilter === 'all') {
      return this.wishes;
    }
    if (wishFilter === 'completed') {
      return this.wishes.filter((wish) => {
        return wish.state === WishState.Completed;
      });
    }
    if (wishFilter === 'uncompleted') {
      return this.wishes.filter((wish) => {
        return wish.state === WishState.Uncompleted;
      });
    }
    return [];
  }

  addNewWish(): void {
    this.wishes.push(new Wish(this.newWishContent, WishState.Uncompleted));
    this.newWishContent = '';
  }
}

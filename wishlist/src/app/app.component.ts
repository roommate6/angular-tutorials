import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wish, WishState } from '../shared/models/Wish';
import { FormsModule } from '@angular/forms';
import { WishesDisplayerComponent } from './wishes-displayer/wishes-displayer.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    WishesDisplayerComponent,
    AddWishFormComponent,
  ],
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

  handleOnNewWishCreateEvent(wish: Wish) {
    this.wishes.push(wish);
  }
}

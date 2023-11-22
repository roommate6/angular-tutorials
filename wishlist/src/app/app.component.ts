import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishesDisplayerComponent } from './wishes-displayer/wishes-displayer.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

import { Wish, WishState, WishFilterCallback } from '../shared/models/Wish';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    WishesDisplayerComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  wishes: Wish[] = [
    new Wish('I want to learn Angular.', WishState.Uncompleted),
    new Wish('I want to help my family.', WishState.Uncompleted),
    new Wish('Drink coffe.', WishState.Completed),
    new Wish('Find grass that cuts itself.', WishState.Uncompleted),
  ];
  wishFilterCallback: WishFilterCallback | undefined;

  get wishesWithFilterApplied(): Wish[] {
    if (this.wishFilterCallback === undefined) {
      return this.wishes;
    }
    return this.wishes.filter(this.wishFilterCallback);
  }

  handleOnNewWishCreateEvent(wish: Wish) {
    this.wishes.push(wish);
  }
  handleOnWishFilterChangeEvent(wishFilterCallback: WishFilterCallback) {
    this.wishFilterCallback = wishFilterCallback;
  }
}

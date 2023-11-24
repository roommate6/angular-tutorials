import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishesDisplayerComponent } from './wishes-displayer/wishes-displayer.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

import { Wish, WishState, WishFilterCallback } from '../shared/models/Wish';
import { EventService } from '../shared/services/EventService';
import { WishService } from './wish.service';

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
export class AppComponent implements OnInit {
  wishes: Wish[] = [];
  wishFilterCallback: WishFilterCallback = (_wish: Wish) => {
    return true;
  };

  constructor(eventService: EventService, private wishService: WishService) {
    eventService.addListener('deleteWishButtonClick', (wish: Wish) => {
      const indexOfTheWish: number = this.wishes.indexOf(wish);
      if (indexOfTheWish === -1) {
        return;
      }
      this.wishes.splice(indexOfTheWish, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((wishes: any) => {
      wishes.forEach((wish: any) => {
        this.wishes.push(
          new Wish(
            wish.content,
            WishState[wish.state as keyof typeof WishState]
          )
        );
      });

      console.log(wishes);
    });
  }

  get wishesWithFilterApplied(): Wish[] {
    return this.wishes.filter(this.wishFilterCallback);
  }

  handleOnNewWishCreateEvent(wish: Wish) {
    this.wishes.push(wish);
  }
}

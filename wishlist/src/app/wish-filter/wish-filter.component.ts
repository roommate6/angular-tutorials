import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  Wish,
  WishState,
  WishFilter,
  WishFilterCallback,
} from '../../shared/models/Wish';

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent implements OnInit {
  @Output() onWishFilterChange = new EventEmitter<WishFilterCallback>();

  readonly wishFilters: WishFilter[] = [
    new WishFilter('All', (_wish: Wish) => {
      return true;
    }),
    new WishFilter('Completed', (wish: Wish) => {
      return wish.state === WishState.Completed;
    }),
    new WishFilter('Uncompleted', (wish: Wish) => {
      return wish.state === WishState.Uncompleted;
    }),
  ];
  selectedWishFilterIndex: string = '0';

  ngOnInit(): void {
    this.onWishFilterChange.emit(
      this.wishFilters[Number.parseInt(this.selectedWishFilterIndex)].callback
    );
  }

  handleOnSelectedWishFilterIndexChange(wishFilterIndex: string) {
    this.onWishFilterChange.emit(
      this.wishFilters[Number.parseInt(wishFilterIndex)].callback
    );
  }
}

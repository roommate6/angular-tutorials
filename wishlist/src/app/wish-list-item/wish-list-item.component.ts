import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Wish, WishState } from '../../shared/models/Wish';
import events from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: Wish;

  get cssClasses(): object {
    return {
      'strikeout text-muted': this.verifyThatWishIsCompleted(),
    };
  }

  verifyThatWishIsCompleted(): boolean {
    return this.wish.state === WishState.Completed;
  }

  toggleWishState(): void {
    if (this.wish.state === WishState.Uncompleted) {
      this.wish.state = WishState.Completed;
      return;
    }
    this.wish.state = WishState.Uncompleted;
  }

  handleDeleteWishButtonClickEvent() {
    events.emit('deleteWishButtonClick', this.wish);
  }
}

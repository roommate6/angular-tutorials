import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Wish, WishState } from '../../shared/models/Wish';
import { EventService } from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: Wish;

  constructor(private eventService: EventService) {}

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
    this.eventService.emit('deleteWishButtonClick', this.wish);
  }
}

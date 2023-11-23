import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishState } from '../../shared/models/Wish';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wishContent!: string;
  @Input() wishState!: WishState;
  @Output() wishStateChange: EventEmitter<WishState> =
    new EventEmitter<WishState>();

  get cssClasses(): object {
    return {
      'strikeout text-muted': this.verifyThatWishIsCompleted(),
    };
  }

  verifyThatWishIsCompleted(): boolean {
    return this.wishState === WishState.Completed;
  }

  toggleWishState(): void {
    if (this.wishState === WishState.Uncompleted) {
      this.wishState = WishState.Completed;
    } else if (this.wishState === WishState.Completed) {
      this.wishState = WishState.Uncompleted;
    }

    this.wishStateChange.emit(this.wishState);
  }
}

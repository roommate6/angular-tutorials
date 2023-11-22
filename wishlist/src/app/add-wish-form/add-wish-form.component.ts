import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wish, WishState } from '../../shared/models/Wish';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
  @Output() onNewWishCreate = new EventEmitter<Wish>();

  newWishContent: string = '';

  addNewWish(): void {
    this.onNewWishCreate.emit(
      new Wish(this.newWishContent, WishState.Uncompleted)
    );
    this.newWishContent = '';
  }
}

import { Component } from '@angular/core';
import { Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  nameControl: FormControl = new FormControl('');
  emailControl: FormControl = new FormControl('');
  messageControl: FormControl = new FormControl('');

  submitForm() {
    if (this.nameControl.dirty) {
      alert('dirty name!');
    }
  }
}

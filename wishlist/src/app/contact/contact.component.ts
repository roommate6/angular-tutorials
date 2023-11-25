import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  submitForm() {
    console.log(this.contactForm.value);
    console.log(this.contactForm.valid);
    // if (this.nameControl.dirty) {
    //   alert('dirty name!');
    // }
  }
}

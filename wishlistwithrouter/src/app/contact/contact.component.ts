import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { createInvalidEmailDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidEmailDomainValidator([
  'yahoo.com',
  'outlook.com',
]);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      invalidEmailDomain,
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  submitForm() {
    console.log(this.contactForm.value);
    console.log(this.contactForm.valid);
    // if (this.nameControl.dirty) {
    //   alert('dirty name!');
    // }
  }
}

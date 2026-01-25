import { Component, signal } from '@angular/core';
import { form, pattern, required, submit, FormField } from '@angular/forms/signals';
import { ValidationErrorsComponent } from '../shared/validation-errors/validation-errors.component';

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  imports: [FormField, ValidationErrorsComponent],
})
export class AddressFormComponent {
  readonly model = signal<Address>({
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  readonly form = form(this.model, s => {
    required(s.street, { message: 'Street is required' });
    required(s.city, { message: 'City is required' });
    required(s.state, { message: 'State is required' });
    required(s.zip, { message: 'ZIP code is required' });
    pattern(s.zip, /^\d{5}$/, { message: 'ZIP code must be 5 digits' });
  });

  protected reset() {
    this.model.set({
      street: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  protected onSubmit(event: SubmitEvent) {
    event.preventDefault();
    submit(this.form, async data => {
      console.log('Form submitted:', data().value());
      // Return undefined if submission is successful
      // Return validation errors if there are server-side errors
      return undefined;
    });
  }
}


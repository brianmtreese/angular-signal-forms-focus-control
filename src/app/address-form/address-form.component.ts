import { Component, ElementRef, signal, viewChildren } from '@angular/core';
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
  readonly inputs = viewChildren<ElementRef<HTMLInputElement>>('input');
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
    this.form().reset();

    // Before
    // this.inputs()[0]?.nativeElement.focus();

    // 1.
    // this.form().focusBoundControl();

    // 3.
    this.form().focusBoundControl({ preventScroll: true });
  }

  protected nextInvalidField() {
    // Before
    // const fields = [
    //   this.form.street,
    //   this.form.city,
    //   this.form.state,
    //   this.form.zip
    // ];
    
    // const invalidIndex = fields.findIndex(field => !field().valid());
    // if (invalidIndex !== -1) {
    //   this.inputs()[invalidIndex]?.nativeElement.focus();
    // }

    // 2.
    // const nextInvalidField = this.form().errorSummary()[0];
    // if (nextInvalidField) {
    //   nextInvalidField.fieldTree().focusBoundControl();
    // }
  }

  protected onSubmit(event: SubmitEvent) {
    event.preventDefault();
    submit(this.form, async data => {
      console.log('Form submitted:', data().value());
      return undefined;
    });
  }
}


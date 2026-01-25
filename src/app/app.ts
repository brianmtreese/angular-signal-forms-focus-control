import { Component } from '@angular/core';
import { AddressFormComponent } from './address-form/address-form.component';

@Component({
  selector: 'app-root',
  imports: [AddressFormComponent],
  template: `<app-address-form />`
})
export class App {
}

import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Address } from "../address";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.css"]
})
export class AddressFormComponent implements OnChanges {
  @Input() address: Address;
  addressForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.addressForm = formBuilder.group({
      address: ["", Validators.required],
      address2: [""],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zipcode: ["", Validators.required]
    });
  }

  // address input is async so when it becomes avail it will populate the form
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.address && this.address) {
      this.addressForm.setValue(this.address);
    }
  }

  verifyAddress(): void {
    console.log("verifying...");
  }
}

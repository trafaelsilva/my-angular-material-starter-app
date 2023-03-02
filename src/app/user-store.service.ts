import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Address } from "./address";

@Injectable()
export class UserStoreService {
  constructor() {}

  public address(): Observable<Address> {
    return of({ address: "", address2: "", city: "", state: "", zipcode: "" });
  }
}

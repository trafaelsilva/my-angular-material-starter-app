import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Address } from "./address";
import { UserStoreService } from "./user-store.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent implements OnInit {
  address: Observable<Address>;
  constructor(private UserStore: UserStoreService) {}

  ngOnInit(): void {
    this.getAddress();
  }

  getAddress(): void {
    this.address = this.UserStore.address();
  }
}

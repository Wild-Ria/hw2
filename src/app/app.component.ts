import { Component, ViewEncapsulation } from "@angular/core";
import { data } from "./data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public hotels$ = data;

}

import { Component, OnInit, Input } from "@angular/core";
import { Contact } from "src/classes/Contact";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent {
  @Input() contacts: Contact[];
}

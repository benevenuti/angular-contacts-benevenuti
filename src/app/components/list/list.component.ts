import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Contact } from "src/classes/Contact";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent {
  @Input() contacts: Contact[];
  @Output() editContactEvent: EventEmitter<Contact> = new EventEmitter();
  @Output() deleteContactEvent: EventEmitter<Contact> = new EventEmitter();

  doEdit(contact: Contact): void {
    this.editContactEvent.emit(contact);
  }

  doDelete(contact: Contact): void {
    this.deleteContactEvent.emit(contact);
  }
}

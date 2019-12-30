import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Contact } from "src/classes/Contact";
import { ContactsService } from "src/app/services/contacts.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = this.contacts;
  filter: String = "";
  constructor(private contactsService: ContactsService) {}
  @Output() searchInputEvent = new EventEmitter();
  doSearch(e) {
    this.searchInputEvent.emit(e.target.value);
  }
  ngOnInit() {
    this.contactsService.getAllContacts().then(res => {
      console.info(res);
      this.contacts = this.filteredContacts = res;
    });
  }

  filterContacts = (word: string) => {
    this.filteredContacts = this.contacts.filter(
      contact =>
        contact.name.includes(word) ||
        contact.email.includes(word) ||
        contact.tel.includes(word)
    );
  };
}

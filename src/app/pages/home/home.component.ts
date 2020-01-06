import { Component, OnInit, Input } from "@angular/core";
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
  filter: string = "";
  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    console.info("ngOnInit - app-home");
    this.contactsService.getAllContacts().then(res => {
      this.contacts = this.filteredContacts = res;
    });
  }

  filterContacts = (word: string) => {
    console.info(`filterContacts - [${word}]`);
    this.filter = word;
    this.filteredContacts = this.contacts.filter(
      contact =>
        contact.name.toUpperCase().includes(word.toUpperCase()) ||
        contact.email.toUpperCase().includes(word.toUpperCase()) ||
        contact.tel.toUpperCase().includes(word.toUpperCase())
    );
  };

  alteredContactListener = e => {
    console.info(`alteredContactListener - [${e}]`);
    this.ngOnInit();
    this.filterContacts(this.filter);
  };
}

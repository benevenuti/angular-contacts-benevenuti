import { Injectable } from "@angular/core";
import { Contact } from "src/classes/Contact";

const CONTACTS = "contacts";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  getAllContacts = () => {
    return new Promise<Contact[]>((resolve, reject) => {
      try {
        resolve(JSON.parse(localStorage.getItem(CONTACTS) || "[]"));
      } catch (ex) {
        reject(ex);
      }
    });
  };
  clearContacts = () => {
    return new Promise<Contact[]>((resolve, reject) => {
      try {
        localStorage.clear();
        this.getAllContacts().then(res => {
          resolve([]);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };
  saveContact = contact => {
    return new Promise<Contact[]>((resolve, reject) => {
      try {
        this.getAllContacts().then(contacts => {
          contacts.push(contact);
          contacts.forEach((value, index) => {
            value.id = index + 1;
          });
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };
  saveAllContacts = contacts => {
    return new Promise<Contact[]>((resolve, reject) => {
      try {
        localStorage.setItem(CONTACTS, JSON.stringify(contacts));
        this.getAllContacts().then(contacts => {
          resolve(contacts);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };

  constructor() {}
}

import { Injectable } from "@angular/core";
import { Contact } from "src/classes/Contact";

const CONTACTS = "contacts";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  generateDummyData = () => {
    let contacts: Contact[] = [];
    let contact = new Contact();
    contact.id = 1;
    contact.name = "Samuel Leroy Jackson";
    contact.email = "sammy@hollywood.com";
    contact.tel = "54999998888";
    contacts.push(contact);
    return contacts;
  };
  getAllContacts = () => {
    console.info(`getAllContacts`);
    return new Promise<Contact[]>((resolve, reject) => {
      try {
        let contacts: Contact[] = JSON.parse(
          localStorage.getItem(CONTACTS) || "[]"
        );
        resolve(contacts);
      } catch (ex) {
        reject(ex);
      }
    });
  };
  clearContacts = () => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.clear();
        this.getAllContacts().then(res => {
          resolve(true);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };
  saveContact = (contact: Contact) => {
    console.info(`saveContact`);
    console.log(contact);
    return new Promise((resolve, reject) => {
      try {
        this.getAllContacts().then(contacts => {
          let r_list: Contact[] = [];
          if (contact.id) {
            contacts.forEach((cont, index) => {
              if (contact.id == cont.id) {
                r_list.push(contact);
              } else {
                r_list.push(cont);
              }
            });
          } else {
            contacts.push(contact);
            contacts.forEach((contact, index) => {
              contact.id = index + 1;
              r_list.push(contact);
            });
          }
          this.saveAllContacts(r_list)
            .then(res => resolve(res))
            .catch(err => reject(err));
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };
  saveAllContacts = (contacts: Contact[]) => {
    console.dir(`saveAllContacts`);
    console.log(contacts);
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(CONTACTS, JSON.stringify(contacts));
        resolve(true);
      } catch (ex) {
        reject(ex);
      }
    });
  };

  deleteContact = (id: Number) => {
    console.info(`deleteContact - ${id}`);
    return new Promise((resolve, reject) => {
      try {
        this.getAllContacts().then((contacts: Contact[]) => {
          let r_list: Contact[] = [];
          contacts.forEach((contact: Contact, index: Number) => {
            if (contact.id != id) {
              r_list.push(contact);
            }
          });
          this.saveAllContacts(r_list).then(res => {
            resolve(res);
          });
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };

  constructor() {}
}

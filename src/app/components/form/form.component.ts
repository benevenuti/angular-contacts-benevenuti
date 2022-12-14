import {
  Component,
  Optional,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Contact } from "src/classes/Contact";
import { FormDialogComponent } from "../form-dialog/form-dialog.component";
import { ContactsService } from "src/app/services/contacts.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent {
  contact: Contact;
  @Input() @Output() contacts: Contact[];
  @Output() alterContactsEvent = new EventEmitter();

  constructor(public dialog: MatDialog, public service: ContactsService) {}

  saveContact = () => {
    this.service.saveContact(this.contact).then(() => {
      this.signalChange();
    });
  };

  private signalChange() {
    this.alterContactsEvent.emit(true);
  }

  onEditContactEvent(contact: Contact): void {
    this.openDialog(contact);
  }

  onDeleteContactEvent(contact: Contact): void {
    this.service.deleteContact(contact.id).then(() => {
      this.signalChange();
    });
  }

  openDialog(@Optional() param: Contact): void {
    if (param) {
      this.contact = param;
    } else {
      this.contact = new Contact();
    }

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.contact;

    const dialogRef = this.dialog.open(FormDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(contact => {
      if (contact) {
        this.contact = contact;
        this.saveContact();
      }
    });
  }
}

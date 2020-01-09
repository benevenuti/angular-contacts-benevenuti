import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  SimpleChanges
} from "@angular/core";
import { Contact } from "src/classes/Contact";
import { MatSort, MatTableDataSource, MatTable } from "@angular/material";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "email", "tel", "actions"];

  @Input() contacts: Contact[];
  @Output() editContactEvent: EventEmitter<Contact> = new EventEmitter();
  @Output() deleteContactEvent: EventEmitter<Contact> = new EventEmitter();

  dataSource = new MatTableDataSource(this.contacts);

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  ngOnInit(): void {
    this.dataSource.data = this.contacts;
    this.dataSource.sort = this.sort;
  }

  doEdit(contact: Contact): void {
    this.editContactEvent.emit(contact);
  }

  doDelete(contact: Contact): void {
    this.deleteContactEvent.emit(contact);
  }
}

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild

} from "@angular/core";
import { Contact } from "src/classes/Contact";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

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

  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    this.dataSource.data = this.contacts;
    this.dataSource.sort = this.sort;
    this.dataSource = new MatTableDataSource(this.contacts);
  }

  doEdit(contact: Contact): void {
    this.editContactEvent.emit(contact);
  }

  doDelete(contact: Contact): void {
    this.deleteContactEvent.emit(contact);
  }
}

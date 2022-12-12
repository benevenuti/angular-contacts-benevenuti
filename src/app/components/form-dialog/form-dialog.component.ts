import { Component, Inject, Optional, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Contact } from "src/classes/Contact";
import { ShowOnDirtyErrorStateMatcher } from "@angular/material/core";

@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.scss"]
})
export class FormDialogComponent implements OnInit {
  form: FormGroup;
  matcher = new ShowOnDirtyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) { id, name, email, tel }: Contact
  ) {
    this.form = this.fb.group({
      id: [id],
      name: [
        name,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100)
        ]
      ],
      email: [
        email,
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]
      ],
      tel: [
        tel,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20)
        ]
      ]
    });
  }

  ngOnInit(): void {}

  save() {
    console.info(this.form.value);
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}

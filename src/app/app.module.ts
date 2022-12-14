// Angular básico
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// App básico
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// Material
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";

// mask
import { NgxMaskModule, IConfig } from "ngx-mask";
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

// Components do App
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { SearchComponent } from "./components/search/search.component";
import { ListComponent } from "./components/list/list.component";
import { FormComponent } from "./components/form/form.component";
import { CardComponent } from "./components/card/card.component";
import { FormDialogComponent } from "./components/form-dialog/form-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    ListComponent,
    FormComponent,
    CardComponent,
    FormDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormControlExampleComponent } from './form-control-example/form-control-example.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookManagementComponent } from './book-management/book-management.component';
import { BookItemComponent } from './book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlExampleComponent,
    FormGroupExampleComponent,
    FormBuilderExampleComponent,
    FormArrayExampleComponent,
    BookManagementComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

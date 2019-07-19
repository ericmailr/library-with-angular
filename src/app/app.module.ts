import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewBookFormComponent } from './new-book-form/new-book-form.component';
import { BooksTableComponent } from './books-table/books-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookFormComponent,
    BooksTableComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

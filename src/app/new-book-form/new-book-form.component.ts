import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../../library.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css']
})
export class NewBookFormComponent implements OnInit {
  
  show = false;

  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    pages: new FormControl(''),
    readStatus: new FormControl(''),
  });

  toggleShow() {
    this.show = !this.show;
  }

  onSubmit() {
      this.libraryService.addBook(this.bookForm.value);
      this.toggleShow();
  }

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

}

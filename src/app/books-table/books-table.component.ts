import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../../library.service';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {

  books: Book[];

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.getBooks();
  }
  
  getBooks(): void {
    this.libraryService.getBooks()
      .subscribe(books => this.books = books);
  }

  deleteBook(i) {
    this.books.splice(i,1);
  }

  toggleReadStatus(i) {
    this.books[i].readStatus = !this.books[i].readStatus;
  }
}

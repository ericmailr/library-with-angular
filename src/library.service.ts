import { Injectable } from '@angular/core';
import { Book } from './app/book';
import { BOOKS } from './app/initial-library'; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
    
  books = BOOKS;

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  addBook(book: Book) {
    this.books.push(book);
  }
}

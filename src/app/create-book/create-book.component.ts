import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent {
  constructor(private myBookService: BookService) {}
  addBook(book: Book) {
    this.myBookService.addBook(book).subscribe((response: Book) => {
      console.log('Bok skapades: ', response);
    });
  }
}

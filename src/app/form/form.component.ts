import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  book!: Book;
  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    isbn: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  constructor(private myBookService: BookService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const title = this.bookForm.controls['title'].value as string;
    const author = this.bookForm.controls['author'].value as string;
    const isbn = this.bookForm.controls['isbn'].value as string;
    const date = this.bookForm.controls['date'].value as string;
    this.book = {
      id: 0,
      title: title,
      author: author,
      isbn: isbn,
      date: date,
    };

    this.myBookService.addBook(this.book).subscribe((response: Book) => {
      console.log('Skapade bok: ', response);
      this.router.navigate(['/']);
    });
  }
}

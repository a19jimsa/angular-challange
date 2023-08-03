import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit, OnDestroy {
  book!: Book;
  myForm!: FormGroup;

  constructor(private myBookService: BookService, private router: Router) {
    console.log('Update');
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      isbn: new FormControl(''),
      date: new FormControl(''),
    });
    let subscribe = this.myBookService.sharedObject$.subscribe(
      (response: Book) => {
        this.myForm.patchValue({
          title: response.title,
          author: response.author,
          isbn: response.isbn,
          date: response.date,
        });
        this.book = response;
      }
    );
    if (this.book === undefined) {
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
    //this.subscribe.unsubscribe();
    console.log('destroy update');
  }

  onSubmit() {
    this.book.title = this.myForm.controls['title'].value;
    this.book.author = this.myForm.controls['author'].value;
    this.book.isbn = this.myForm.controls['isbn'].value;
    this.book.date = this.myForm.controls['date'].value;
    this.myBookService
      .updateBook(this.book.id, this.book)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['/']);
      });
  }
}

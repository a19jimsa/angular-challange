import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  token: any;

  constructor(private myBookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
    if (this.token !== null) {
      this.myBookService.getAllBooks().subscribe((response: Book[]) => {
        this.books = response;
      });
      this.myBookService.sharedObject$.subscribe((response: Book) => {
        console.log(response);
      });
    }
  }

  ngOnDestroy(): void {
    this.books = [];
  }

  update(book: Book) {
    this.myBookService.updateSharedObject(book);
    this.router.navigate(['/update-book']);
  }

  remove(i: number) {
    this.myBookService.removeBook(i).subscribe((response: Book) => {
      console.log('Tog bort bok: ', response);
      this.ngOnInit();
    });
  }
}

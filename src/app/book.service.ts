import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private sharedObjectSource = new ReplaySubject<Book>();
  sharedObject$ = this.sharedObjectSource.asObservable();
  constructor(private http: HttpClient) {
    console.log('BookService');
  }

  updateSharedObject(data: Book) {
    this.sharedObjectSource.next(data);
  }

  getAllBooks() {
    const headers = {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    };
    console.log(headers);
    return this.http.get<Book[]>('https://localhost:7053/Book/', { headers });
  }

  getBook(id: number) {
    const headers = {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    };
    return this.http.get<Book>('https://localhost:7053/Book/' + id, {
      headers,
    });
  }

  addBook(book: Book) {
    const headers = {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    };
    return this.http.post<Book>('https://localhost:7053/Book/', book, {
      headers,
    });
  }

  removeBook(id: number) {
    const headers = {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    };
    return this.http.delete<Book>('https://localhost:7053/Book/' + id, {
      headers,
    });
  }

  updateBook(id: number, book: Book) {
    const headers = {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    };
    return this.http.put<Book>('https://localhost:7053/Book/' + id, book, {
      headers,
    });
  }
}

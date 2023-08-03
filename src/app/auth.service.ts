import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post<any>('https://localhost:7053/Auth/login/', user);
  }
  token() {
    return this.http.get<any>('https://localhost:7053/Auth/token/');
  }
  register(user: User) {
    return this.http.post<any>('https://localhost:7053/Auth/register/', user);
  }
}

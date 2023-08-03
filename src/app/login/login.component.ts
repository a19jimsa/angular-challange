import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  show = false;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  onLogin() {
    let user: User = {
      username: this.loginForm.controls.username.value?.toString(),
      password: this.loginForm.controls.password.value?.toString(),
    };
    this.authService.login(user).subscribe({
      next: (response) => window.localStorage.setItem('token', response.value),
      error: () => alert('Inloggning misslyckades!'),
      complete: () => (this.show = true),
    });
  }

  onRegister() {
    let user: User = {
      username: 'Jimmy',
      password: 'Bajs',
    };
    console.log(user);
    this.authService.register(user).subscribe({
      next: () => console.log('Bajs'),
      error: () => alert('Registering misslyckades!'),
      complete: () => console.log('Finished request'),
    });
  }

  logOut() {
    window.localStorage.clear();
  }
}

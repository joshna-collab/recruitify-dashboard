import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  userId: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.userId === 'admin' && this.password === '1234') {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMsg = 'Invalid User ID or Password';
    }
  }
}
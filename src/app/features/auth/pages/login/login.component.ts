import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === '1234') {
      // Session ذخیره‌سازی موقتی
      sessionStorage.setItem('user', this.username);
      this.router.navigate(['/products']);
    } else {
      alert('Invalid credentials');
    }
  }
}

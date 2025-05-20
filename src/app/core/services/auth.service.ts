import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    // فعلاً فرضی: مثلا تو localStorage نگاه می‌کنه
    return !!localStorage.getItem('session_token');
  }
}

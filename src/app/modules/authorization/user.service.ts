import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../entities/user.entity';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {
  }

  registerUser(user: User) {
    return this.http.post('/api/users/register', user)
      .toPromise();
  }
}

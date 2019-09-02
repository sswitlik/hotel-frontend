import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.entity';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {
  }

  registerUser(user: User) {
    return this.http.post('/api/users/register', user)
      .toPromise();
  }

  login(user: { username: string, password: string }): Promise<{ access_token, user: User }> {
    return this.http.post<any>('/api/login', user)
      .toPromise();
  }

}

import { Injectable } from '@angular/core';
import { UserService } from '../../entities/user/user.service';
import { LocalStorageService } from '../storage/local-storage.service';
import { User } from '../../entities/user/user.entity';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActiveUserService {

  user: User;

  token: string;

  private subject = new BehaviorSubject<User>(null);

  constructor(private userService: UserService,
              private localStorageService: LocalStorageService) {
  }

  login(username: string, password: string) {
    return this.userService.login({ username, password })
      .then(res => {
        console.log(res);
        this.token = res.access_token;
        this.user = User.instance<User>(res.user);
        this.subject.next(this.user);
      });
  }

  getObservable() {
    return this.subject.asObservable();
  }

  logout() {
    this.user = null;
    this.token = null;
    this.subject.next(this.user);
  }
}

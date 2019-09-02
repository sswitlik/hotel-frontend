import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { LocalStorageService } from '../storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class ActiveUserService {
  constructor(private userService: UserService,
              private localStorageService: LocalStorageService) {
  }

  login(username: string, password: string) {
    
  }

  logout() {

  }
}

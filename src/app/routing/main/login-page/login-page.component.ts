import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../entities/user.entity';
import { UserService } from '../../../modules/authorization/user.service';
import { ActiveUserService } from '../../../modules/authorization/active-user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private activeUserService: ActiveUserService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  loginUser(value: User) {
    this.activeUserService.login(value.username, value.password);
  }
}

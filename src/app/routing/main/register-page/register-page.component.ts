import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../../../entities/user/user.entity';
import { getWithDefault } from '../../../modules/functions/get-with-default.function';
import { UserService } from '../../../entities/user/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;

  value: User;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      client: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
      }),
    }, { validators: [this.getConfirmPasswordValidator()] });
  }

  private getConfirmPasswordValidator(): ValidatorFn {
    return (control: FormGroup): { [key: string]: any } | null => {
      return getWithDefault<any>(() => control.get('password').value
        === control.get('confirmPassword').value, false)
        ? null
        : { passwordValid: true };
    };
  }

  registerUser(value: User & { confirmPassword: string }) {
    if (this.registerForm.invalid) {
      throw new Error('invalid');
    }

    this.userService.registerUser(value);
  }
}

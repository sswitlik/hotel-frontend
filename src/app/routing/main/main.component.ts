import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../entities/user/user.entity';
import { ActiveUserService } from '../../modules/authorization/active-user.service';
import { AutoUnsubscribe } from '../../modules/auto-unsubscribe/auto-unsubscribe';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent extends AutoUnsubscribe implements OnInit {

  items: MenuItem[] = [
    {
      icon: 'pi pi-home',
      routerLink: '/home',
    },
  ];

  user: User;

  constructor(private router: Router,
              private activeUserService: ActiveUserService) {
    super();
  }

  ngOnInit() {
    this.activeUserService.getObservable()
      .pipe(this.takeUntilDestroy())
      .subscribe(val => {
        this.user = val;
      });
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  logout() {
    this.activeUserService.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActiveUserService } from '../../../../modules/authorization/active-user.service';
import { User } from '../../../../entities/user/user.entity';
import { AutoUnsubscribe } from '../../../../modules/auto-unsubscribe/auto-unsubscribe';

@Component({
  selector: 'app-personal-data-page',
  templateUrl: './personal-data-page.component.html',
  styles: [],
})
export class PersonalDataPageComponent extends AutoUnsubscribe implements OnInit {

  user: User;

  constructor(private activeUserService: ActiveUserService) {
    super();
  }

  ngOnInit() {
    this.activeUserService.getObservable()
      .pipe(this.takeUntilDestroy())
      .subscribe(val => this.user = val);
  }

}

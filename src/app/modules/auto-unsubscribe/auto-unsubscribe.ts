import { OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';

export class AutoUnsubscribe implements OnDestroy {

  private destroyTrigger = new Subject();

  takeUntilDestroy<T>(): MonoTypeOperatorFunction<T> {
    return takeUntil(this.destroyTrigger);
  }

  ngOnDestroy(): void {
    this.destroyTrigger.next();
  }
}

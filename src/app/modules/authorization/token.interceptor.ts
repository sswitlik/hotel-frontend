import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActiveUserService } from './active-user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private activeUserService: ActiveUserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeUserService.user) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.activeUserService.token}`,
        },
      });
    }
    return next.handle(req);
  }
}

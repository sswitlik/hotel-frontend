import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacation } from './vacation.entity';

@Injectable({ providedIn: 'root' })
export class VacationService {
  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<Vacation[]>('/api/vacation').toPromise();
  }
}

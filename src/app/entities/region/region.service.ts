import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from './region.entity';

@Injectable({ providedIn: 'root' })
export class RegionService {
  constructor(private http: HttpClient) {
  }

  getRegions() {
    return this.http.get<Region[]>('/api/region').toPromise();
  }
}

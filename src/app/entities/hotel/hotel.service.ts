import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from './hotel.entity';

export interface SearchHotelInput {
  regions: string,
  from?: string,
  to?: string,
  persons?: number,
  page: number,
  pageSize: number
}

@Injectable({ providedIn: 'root' })
export class HotelService {
  constructor(private http: HttpClient) {
  }

  searchHotels(input: SearchHotelInput) {
    return this.http.get<Hotel[]>(`api/hotel/search?${parseToQuery(input)}`).toPromise();
  }

}

function parseToQuery(options: any) {
  let params = new URLSearchParams();
  for (let key in options) {
    params.set(key, options[key]);
  }
  return params;
}

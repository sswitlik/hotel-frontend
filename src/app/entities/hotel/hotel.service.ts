import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SearchHotelInput {
  regions: string[],
  from?: Date,
  to?: Date,
  persons?: number,
  page: number,
  pageSize: number
}

@Injectable({ providedIn: 'root' })
export class HotelService {
  constructor(private http: HttpClient) {
  }

  searchHotels(input: SearchHotelInput) {
    console.log(input);

    return this.http.get(`api/hotel/search?${parseToQuery(input)}`).toPromise();
  }

}

function parseToQuery(options: any) {
  let params = new URLSearchParams();
  for (let key in options) {
    params.set(key, Array.isArray(options[key]) ? options[key].join() : options[key]);
  }
  return params;
}

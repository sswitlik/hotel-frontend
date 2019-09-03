import { Injectable } from '@angular/core';
import { Hotel } from '../../entities/hotel/hotel.entity';
import { SearchHotelInput } from '../../entities/hotel/hotel.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class BuyHotelService {
  hotel: Hotel;
  searchData: SearchHotelInput;

  constructor(private localStorageService: LocalStorageService) {
  }

  setData(hotel: Hotel, searchData: SearchHotelInput) {
    this.localStorageService.set('buy-hotel', { hotel, searchData });
  }

  getData() {
    return this.localStorageService.get('buy-hotel');
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../../../../entities/hotel/hotel.entity';
import { HotelService, SearchHotelInput } from '../../../../entities/hotel/hotel.service';
import { BuyHotelService } from '../../../../modules/storage/buy-hotel.service';

@Component({
  selector: 'app-search-vacations-page',
  templateUrl: './search-vacations-page.component.html',
  styles: [],
})
export class SearchVacationsPageComponent implements OnInit {

  hotels: Hotel[];

  searchData: SearchHotelInput;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private hotelService: HotelService,
              private buyHotelService: BuyHotelService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(val => {
      this.searchData = val as SearchHotelInput;
      this.hotelService.searchHotels(this.searchData)
        .then(res => {
          this.hotels = res;
          console.log(this.hotels);
        });
    });
  }

  onSelectHotel(hotel: Hotel) {
    this.buyHotelService.setData(hotel, this.searchData);
    this.router.navigate(['buy-hotel']);
  }
}

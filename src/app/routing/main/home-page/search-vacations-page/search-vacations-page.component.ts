import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../../../../entities/hotel/hotel.entity';
import { HotelService, SearchHotelInput } from '../../../../entities/hotel/hotel.service';

@Component({
  selector: 'app-search-vacations-page',
  templateUrl: './search-vacations-page.component.html',
  styles: [],
})
export class SearchVacationsPageComponent implements OnInit {

  hotels: Hotel[];

  constructor(private route: ActivatedRoute,
              private hotelService: HotelService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(val => {
      this.hotelService.searchHotels(val as SearchHotelInput)
        .then(res => {
          this.hotels = res;
          console.log(this.hotels);
        });
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../../../../entities/hotel/hotel.entity';

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styles: [],
})
export class HotelViewComponent implements OnInit {

  @Input()
  hotel: Hotel;

  constructor() {
  }

  ngOnInit() {
  }

}

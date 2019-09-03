import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../../../../entities/hotel/hotel.entity';

@Component({
  selector: 'app-hotel-view-item',
  templateUrl: './hotel-view-item.component.html',
  styles: [],
})
export class HotelViewItemComponent implements OnInit {

  @Input()
  hotel: Hotel;

  constructor() {
  }

  ngOnInit() {
  }

}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Hotel } from '../../../../../entities/hotel/hotel.entity';
import { Room } from '../../../../../entities/room/room.entity';
import { SearchVacationsPageComponent } from '../search-vacations-page.component';
import { Purchase } from '../../../../../entities/purchase/purchase.entity';
import { SearchHotelInput } from '../../../../../entities/hotel/hotel.service';

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styles: [],
})
export class HotelViewComponent implements OnChanges, OnInit {

  @Input()
  hotel: Hotel;

  private searchData: SearchHotelInput;

  constructor(private searchMainComponent: SearchVacationsPageComponent) {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('change');
    this.searchData = this.searchMainComponent.searchData;
    if (changes.hotel && this.hotel) {
      this.prepareHotel(this.hotel);
    }
  }

  ngOnInit(): void {
  }

  private prepareHotel(hotel: Hotel) {
    let freeSpaceInHotel = 0;
    hotel.rooms.forEach(room => {
      this.prepareRoom(room);
      if (room.t_isAvailable) {
        freeSpaceInHotel += room.personNumber;
      }
    });

    hotel.t_availableRooms = (freeSpaceInHotel > this.searchData.persons) ? 1 : 0;
    console.log(hotel);
  }

  private prepareRoom(room: Room) {
    room.t_isAvailable = !room.purchases.some(roomPurchase => {
      roomPurchase.termTo = new Date(roomPurchase.termTo);
      roomPurchase.termFrom = new Date(roomPurchase.termFrom);
      
      return Purchase.isCollision({
        termFrom: new Date(this.searchData.from),
        termTo: new Date(this.searchData.to),
      }, roomPurchase);
    });
  }
}

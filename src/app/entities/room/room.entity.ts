import { Hotel } from '../hotel/hotel.entity';
import { BaseEntity } from '../base.entity';
import { Purchase } from '../purchase/purchase.entity';

export class Room extends BaseEntity {
  personNumber: number;
  hotel: Hotel;
  equipment: any[];
  purchases: Purchase[];

  t_isAvailable: boolean;
}

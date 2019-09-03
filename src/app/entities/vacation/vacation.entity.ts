import { Purchase } from '../purchase/purchase.entity';
import { BaseEntity } from '../base.entity';

export class Vacation extends BaseEntity {
  purchases: Purchase[];
  accomodations: any[];
}

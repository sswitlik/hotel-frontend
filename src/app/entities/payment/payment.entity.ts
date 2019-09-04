import { Purchase } from '../purchase/purchase.entity';
import { BaseEntity } from '../base.entity';

export class Payment extends BaseEntity {

  purchase: Purchase;

  quantity: string;
}

import { BaseEntity } from '../base.entity';
import { Client } from '../client.entity';
import { Room } from '../room/room.entity';
import { Payment } from '../payment/payment.entity';

export type PurchaseTerm = Pick<Purchase, 'termFrom' | 'termTo'>;

export class Purchase extends BaseEntity {

  static paymentsSum(purchase: Purchase): number {
    return purchase.payments.reduce((previousValue, currentValue) => previousValue + Number(currentValue.quantity), 0);
  }

  static isCollision(purchase1: PurchaseTerm, purchase2: PurchaseTerm) {
    return !(purchase1.termFrom > purchase2.termTo || purchase1.termTo < purchase2.termFrom);
  }

  participants: any[];
  termFrom: Date;
  termTo: Date;
  status: any;
  client: Client;
  product: any;
  rooms: Room[];
  payments: Payment[];
  price: string;
}

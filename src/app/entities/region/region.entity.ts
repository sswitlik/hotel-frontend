import { BaseEntity } from '../base.entity';

export class Region extends BaseEntity {
  name: string;
  description: string;
  accomodations: any[];
  hotels: any[];
}

import { BaseEntity } from '../base.entity';
import { Region } from '../region/region.entity';

export class Hotel extends BaseEntity {
  name: string;
  description: string;
  rooms: any[];
  locations: any[];
  region: Region;
}

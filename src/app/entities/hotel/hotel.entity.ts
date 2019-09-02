import { BaseEntity } from '../base.entity';
import { Region } from '../region/region.entity';
import { Room } from '../room/room.entity';

export class Hotel extends BaseEntity {
  name: string;
  description: string;
  rooms: Room[];
  locations: any[];
  region: Region;

  t_availableRooms: number;
}

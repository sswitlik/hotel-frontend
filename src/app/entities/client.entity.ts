import { User } from './user.entity';
import { BaseEntity } from './base.entity';

export class Client extends BaseEntity {
  address: string;
  email: string;
  // purchases: Purchase[];
  user: User;
}

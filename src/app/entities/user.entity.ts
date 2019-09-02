import { UserRole } from './user-role.enum';
import { BaseEntity } from './base.entity';
import { Client } from './client.entity';

export class User extends BaseEntity {
  username: string;
  password: string;
  role: UserRole;
  client: Client;
}

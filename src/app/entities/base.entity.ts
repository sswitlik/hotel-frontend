export class BaseEntity {

  static instance<T extends BaseEntity>(source: Partial<T> = {}): T {
    return Object.assign(new this(), source) as T;
  }

  id: number;
}

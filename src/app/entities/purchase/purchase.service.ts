import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from './purchase.entity';

@Injectable({ providedIn: 'root' })
export class PurchaseService {
  constructor(private http: HttpClient) {
  }

  buyProduct(input: any) {
    return this.http.post<any>('/api/purchase/buy-product', input).toPromise();
  }

  findPurchasesByClient(clientId: number) {
    return this.http.get<Purchase[]>(`/api/purchase?filter=client.id||eq||${clientId}`).toPromise();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PurchaseService {
  constructor(private http: HttpClient) {
  }

  buyProduct(input: any) {
    return this.http.post<any>('/api/purchase/buy-product', input).toPromise();
  }
}

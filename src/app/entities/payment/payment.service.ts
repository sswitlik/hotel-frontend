import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './payment.entity';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(private http: HttpClient) {
  }

  registerPayment(payment: Payment) {
    return this.http.post<Payment>('/api/payment/register-payment', payment).toPromise();
  }
}

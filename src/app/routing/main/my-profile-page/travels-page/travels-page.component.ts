import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../../../entities/purchase/purchase.service';
import { ActiveUserService } from '../../../../modules/authorization/active-user.service';
import { Purchase } from '../../../../entities/purchase/purchase.entity';
import { PaymentService } from '../../../../entities/payment/payment.service';
import { Payment } from '../../../../entities/payment/payment.entity';
import * as _ from 'lodash';

@Component({
  selector: 'app-travels-page',
  templateUrl: './travels-page.component.html',
  styles: [],
})
export class TravelsPageComponent implements OnInit {

  travels: Purchase[];

  dialogVisible: boolean = false;
  dialogPurchase: Purchase;

  constructor(private purchaseService: PurchaseService,
              private activeUserService: ActiveUserService,
              private paymentService: PaymentService) {
  }

  ngOnInit() {
    this.purchaseService.findPurchasesByClient(this.activeUserService.user.client.id)
      .then(res => this.travels = res);
  }

  paymentSum(purchase: Purchase) {
    return purchase.payments.reduce((prev, curr) => prev + Number(curr.quantity), 0);
  }

  showDialog(purchase: Purchase) {
    this.dialogVisible = true;
    this.dialogPurchase = purchase;
  }

  payForProduct(payment: Payment) {
    console.log('kupa');
    this.paymentService.registerPayment(payment)
      .then((res: Payment) => {
        const index = this.travels.findIndex(el => el.id === res.purchase.id);
        this.travels[index] = res.purchase;
        this.travels = _.clone(this.travels);
      });
  }
}

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Purchase } from '../../../../../entities/purchase/purchase.entity';
import { Payment } from '../../../../../entities/payment/payment.entity';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormComponentType } from '../../../../../modules/form/form-field/form-field.component';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styles: [],
})
export class PaymentFormComponent implements OnChanges, OnInit {
  FormComponentType = FormComponentType;

  @Input()
  purchase: Purchase;

  @Output()
  whenSubmit = new EventEmitter<Payment>();

  @Output()
  cancel = new EventEmitter<void>();

  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.purchase && this.purchase) {
      this.paymentForm.patchValue({});
    }
  }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      quantity: ['', [Validators.required, this.getCurrencyValidator()]],
    });
  }

  onSubmit(value: Payment) {
    console.log('submit');
    value.purchase = this.purchase;
    this.whenSubmit.emit(value);
    this.paymentForm.reset();
  }

  onCancel() {
    console.log('cancel');
    this.cancel.emit();
    this.paymentForm.reset();

  }

  private getCurrencyValidator() {
    return (control: FormControl) => {
      console.log(typeof control.value);
      return /^\d+[,\.]?\d?\d?$/.test(control.value) ? null : { currency: true };
    };
  }

  click(...args) {
    console.log(...args);
  }
}

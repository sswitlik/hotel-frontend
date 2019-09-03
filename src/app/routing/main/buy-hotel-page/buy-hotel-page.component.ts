import { Component, OnInit } from '@angular/core';
import { BuyHotelService } from '../../../modules/storage/buy-hotel.service';
import { Hotel } from '../../../entities/hotel/hotel.entity';
import { SearchHotelInput } from '../../../entities/hotel/hotel.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { FormComponentType } from '../../../modules/form/form-field/form-field.component';

@Component({
  selector: 'app-buy-hotel-page',
  templateUrl: './buy-hotel-page.component.html',
  styles: [],
})
export class BuyHotelPageComponent implements OnInit {
  FormComponentType = FormComponentType;

  hotel: Hotel;
  searchData: SearchHotelInput;

  purchaseForm: FormGroup;

  participantsHtmlControl: any[];

  constructor(private router: Router,
              private fb: FormBuilder,
              private buyHotelService: BuyHotelService) {
  }

  private getPraticipantsControls(quantity: number) {
    const result = [];
    _.range(quantity).forEach(() => {
      result.push(this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthDate: [null, Validators.required],
        sex: ['M'],
      }));
    });
    return result;
  }

  ngOnInit() {
    const data = this.buyHotelService.getData();
    if (!data) {
      return this.router.navigate(['home']);
    }

    this.hotel = data.hotel;
    this.searchData = data.searchData;
    this.participantsHtmlControl = _.range(this.searchData.persons);

    this.purchaseForm = this.fb.group({
      purchase: this.fb.group({
        participants: this.fb.array(
          this.getPraticipantsControls(this.searchData.persons)),
      }),
      clientData: this.fb.group({
        email: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),
    });
  }

  orderHotel(purchase: any) {
    console.log(purchase);
  }
}

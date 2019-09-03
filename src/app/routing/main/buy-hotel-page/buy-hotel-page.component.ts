import { Component, OnInit } from '@angular/core';
import { BuyHotelService } from '../../../modules/storage/buy-hotel.service';
import { Hotel } from '../../../entities/hotel/hotel.entity';
import { SearchHotelInput } from '../../../entities/hotel/hotel.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { FormComponentType } from '../../../modules/form/form-field/form-field.component';
import { ActiveUserService } from '../../../modules/authorization/active-user.service';
import { VacationService } from '../../../entities/vacation/vacation.service';
import { Vacation } from '../../../entities/vacation/vacation.entity';
import { Client } from '../../../entities/client.entity';
import { Purchase } from '../../../entities/purchase/purchase.entity';

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

  vacations: Vacation[];

  constructor(private router: Router,
              private fb: FormBuilder,
              private buyHotelService: BuyHotelService,
              private activeUserService: ActiveUserService,
              private vacationService: VacationService) {
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
    this.vacationService.getProducts()
      .then(res => this.vacations = res);
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
        id: [''],
      }),
    });

    const user = this.activeUserService.user;
    console.log(user);
    if (user) {
      this.purchaseForm.patchValue({ clientData: user.client });
    }
  }

  orderHotel(value: { purchase: Purchase, clientData: Client }) {
    const product = this.vacations.find(el => el.accomodations.some(acc => acc.region.name === this.hotel.region.name));
    value.purchase.product = product;
    value.purchase.rooms = [this.hotel.rooms.find(room => room.t_isAvailable)];
    console.log(value);
  }
}

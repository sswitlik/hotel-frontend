import { Component, Input, OnInit } from '@angular/core';
import { Region } from '../../../../../entities/region/region.entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormComponentType } from '../../../../../modules/form/form-field/form-field.component';
import { HotelService, SearchHotelInput } from '../../../../../entities/hotel/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-vacation',
  templateUrl: './search-vacation.component.html',
  styles: [],
})
export class SearchVacationComponent implements OnInit {
  readonly DAY = 24 * 3600 * 1000;

  FormComponentType = FormComponentType;

  @Input()
  regions: Region[];

  searchForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private hotelService: HotelService) {
  }

  ngOnInit() {
    const startDate = new Date();
    this.searchForm = this.fb.group({
      region: [null, [Validators.required]],
      persons: [2, [Validators.required, Validators.min(1)]],
      fromTo: [[dateToZero(new Date(Date.now() + this.DAY))], [Validators.required]],
    });
  }

  search(value: { region: Region, persons, fromTo: Date[] }) {
    const searchInput: SearchHotelInput = {
      regions: value.region.name,
      from: dateToZero(value.fromTo[0]).toJSON(),
      to: dateToZero(value.fromTo[1] || value.fromTo[0]).toJSON(),
      persons: value.persons,
      pageSize: 10,
      page: 0,
    };

    this.router.navigate(['home', 'search-vacation'], { queryParams: searchInput });
  }
}

export function dateToZero(date: Date) {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
}

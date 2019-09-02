import { Component, Input, OnInit } from '@angular/core';
import { Region } from '../../../../../entities/region/region.entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormComponentType } from '../../../../../modules/form/form-field/form-field.component';
import { HotelService, SearchHotelInput } from '../../../../../entities/hotel/hotel.service';

@Component({
  selector: 'app-search-vacation',
  templateUrl: './search-vacation.component.html',
  styles: [],
})
export class SearchVacationComponent implements OnInit {
  FormComponentType = FormComponentType;

  @Input()
  regions: Region[];

  searchForm: FormGroup;

  constructor(private fb: FormBuilder,
              private hotelService: HotelService) {
  }

  ngOnInit() {
    console.log(this.regions);
    this.searchForm = this.fb.group({
      region: [null, [Validators.required]],
      persons: [2, [Validators.required, Validators.min(1)]],
      fromTo: [[new Date(), new Date()], [Validators.required]],
    });
  }

  search(value: { region: Region, persons, fromTo }) {
    console.log(value);
    const searchInput: SearchHotelInput = {
      regions: [value.region.name],
      from: value.fromTo.from,
      to: value.fromTo.to,
      persons: value.persons,
      pageSize: 20,
      page: 0,
    };

    this.hotelService.searchHotels(searchInput)
      .then(res => {
        console.log(res);
      });
  }

}

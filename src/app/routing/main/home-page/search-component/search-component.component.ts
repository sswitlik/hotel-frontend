import { Component, OnInit } from '@angular/core';
import { RegionService } from '../../../../entities/region/region.service';
import { Region } from '../../../../entities/region/region.entity';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styles: [],
})
export class SearchComponentComponent implements OnInit {

  regions: Region[];

  constructor(private regionService: RegionService) {
  }

  ngOnInit() {
    this.regionService.getRegions()
      .then(res => {
        this.regions = res;
      });
  }

}

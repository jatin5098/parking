import { Component, OnInit, OnChanges, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-overlay-grid',
  templateUrl: './overlay-grid.component.html',
  styleUrls: ['./overlay-grid.component.scss']
})
export class OverlayGridComponent implements OnInit {

  @Input('data') data: any;

  public gridFilter: string;
  public filterData: any;
  public isActiveOverlay: boolean;

  constructor() {
    this.gridFilter = ''; 
  }

  ngOnInit() {
    this.filterData = Object.assign({}, this.data);
  }
  
  ngOnChanges() {
    this.isActiveOverlay = this.data.isActiveOverlay;
  }
  filterGridData() {
    this.filterData = Object.assign({}, this.data);
    
      this.filterData.features = this.filterData.features.filter((point) => {
        if (this.gridFilter !== '') {
          return point.properties.title.toLowerCase().includes(this.gridFilter);
        }
        else {
          this.filterData = Object.assign({}, this.data);
        }
      });
  }
  closeOverlay() {
    this.data.isActiveOverlay = false;
  }
}

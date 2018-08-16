import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from  '@angular/common/http';


@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements OnInit {

  private lat: number = 52.3702;
  private lng: number = 4.8952;
  private zoom: number = 12;
  private label: string = '';

  private data: any;
  private selectedPoint:any;
  // markers
  private markers: any[] = [];
  private points: any = {};

  constructor(
    private http: Http,
    private  httpClient:  HttpClient
  ) { }

  ngOnInit() {
    this.details();
  }

  getParkingDetails() {
    return this.httpClient.get(
      "http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=100"
    );
  }

  showData(points) {
    this.points = points;
    // this.selectedPoint = points;
    console.log(this.points);
  }

  details() {
    this.getParkingDetails().subscribe(
      res => {
        this.data = res;
        console.log(this.data.features);
        this.selectedPoint = this.data.features[0]; 
      },
      error => {
       
      },
      () => {
       
      }
    );
  }

  getLocation(points) {
    let shortAvailable = points.properties.layers['parking.garage'].data.FreeSpaceShort;
    let longAvailable = points.properties.layers['parking.garage'].data.FreeSpaceLong;

    if( shortAvailable > 0 && longAvailable > 0 ) {
      return '../../../assets/images/sAlA.png';
    }
    else if ( (!shortAvailable || shortAvailable == 0) && (!longAvailable || longAvailable == 0) ) {
      return '../../../assets/images/sUlU.png';
    }
    else if ( (!shortAvailable || shortAvailable == 0) && longAvailable > 0 ) {
      return '../../../assets/images/sUlA.png';
    }
    else if ( shortAvailable > 0 && (!longAvailable || longAvailable == 0) ) {
      return '../../../assets/images/sAlU.png';
    }
  }
}

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
  // markers
  private markers: any[] = [];
  private points: any;

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
    console.log(this.points);
  }

  details() {
    this.getParkingDetails().subscribe(
      res => {
        this.data = res;
        console.log(this.data.features);       
      },
      error => {
       
      },
      () => {
       
      }
    );
  }
}

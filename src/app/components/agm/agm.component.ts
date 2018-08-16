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
  styles:any = [];

  constructor(
    private http: Http,
    private  httpClient:  HttpClient
  ) { }

  ngOnInit() {
    this.details();
    this.styles= [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#CFD8DC"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#607D8B"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#607D8B"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#607D8B"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#b0bec5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#607D8B"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#607D8B"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#607D8B"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#607D8B"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#D4EEFF"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#607D8B"
          }
        ]
      }
    ]   
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

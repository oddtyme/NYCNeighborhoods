import { Component, ElementRef } from '@angular/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
import { ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NYCNeighborhoods';
  lat: number = 40.7128;
  lng: number = -74.0060;
  zoom: number = 10.75;
}

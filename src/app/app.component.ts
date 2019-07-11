import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NYCNeighborhoods';
  lat: number = 40.7128;
  lng: number = -74.0060;
}

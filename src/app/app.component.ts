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

  onMapReady(map) {
    this.initPolygon(map);
  }

  initPolygon(map: any) {
    var woodlawnCoords = [
      {lat: 40.895262, lng: -73.876929},
      {lat: 40.902674, lng: -73.867595},
      {lat: 40.901068, lng: -73.861630},
      {lat: 40.895213, lng: -73.863412}
    ];

    var woodLawn = new google.maps.Polygon({
      path:woodlawnCoords,
      strokeColor: '#99badd',
      fillColor: '#99badd',
    });

    woodLawn.setMap(map);
   

    function smoothZoom(map, max, cnt) {
      console.log(cnt);
      console.log(max);

      if (cnt >= max) {
        return;
      } 
      else {
          google.maps.event.addListenerOnce(map, 'zoom_changed', function(event) {
	  smoothZoom(map, max, cnt + 1);
        });

        setTimeout(function(){map.setZoom(cnt)}, 80);
      }
    }

    woodLawn.addListener('click', function() {
      map.panTo({lat: 40.899284, lng: -73.874}, true);
      smoothZoom(map, 17, map.getZoom());
    });

    google.maps.event.addListener(woodLawn, "mouseover",function() {
      this.setOptions({fillColor: "#4997d0", strokeColor: "#4997d0"});
    });

    google.maps.event.addListener(woodLawn, "mouseout",function() {
      this.setOptions({fillColor: "#99badd", strokeColor: "#99badd"});
    });
  }

}


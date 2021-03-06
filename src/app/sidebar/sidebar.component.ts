import { Component, OnInit, Input } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
    
  }

  private intro: boolean;
  app: AppComponent = new AppComponent();

  showSummary() {
      this.intro = this.app.getIntro();
      console.log(this.intro);

      if (!this.intro) {
        var content = document.getElementById('content-box');
        content.childNodes[0].textContent = "Woodlawn";
        content.childNodes[1].textContent = "Woodlawn, also known as Woodlawn Heights, is a predominantly Irish-American working class neighborhood at the very north end of the Bronx.";
        content.childNodes[2].textContent = "Bearing the name 'Little Ireland', Woodlawn is the primary center of Irish culture in New York.";
        content.childNodes[3].textContent = "The neighborhood has a suburban, small-town feel that favors family life."
      }
  }
  showLiving() {
      this.intro = this.app.getIntro();
      console.log(this.intro);

      if (!this.intro) {
        var content = document.getElementById('content-box');
        content.childNodes[0].textContent = "Woodlawn";
        content.childNodes[1].textContent = "A majority of the houses in the neighborhood are brick and wood-frame colonials and date to the early part of the 20th century";
        content.childNodes[2].textContent = "The turnover of houses is slow, and properties often change hands within families or through friends of friends without officially going to market.";
        content.childNodes[3].textContent = "The median income is $52,510."
      }
  }
  
  showFood() {
      this.intro = this.app.getIntro();
      console.log(this.intro);

      if (!this.intro) {
        var content = document.getElementById('content-box');
        content.childNodes[0].textContent = "Woodlawn";
        content.childNodes[1].textContent = "Despite its heavily Irish population, Woodlawn offers a diverse array of quality food options from cultures across the globe.";
        content.childNodes[2].textContent = "Highlights include Ripe Kitchen & Bar, Rincon Latino Restaurant, and H.I.M Ital Health Food Market.";
        content.childNodes[3].textContent = "Many locations offer delivery, with even more offering takeout."
      }
  }
  showRec() {
      this.intro = this.app.getIntro();
      console.log(this.intro);

      if (!this.intro) {
        var content = document.getElementById('content-box');
        content.childNodes[0].textContent = "Woodlawn";
        content.childNodes[1].textContent = "Directly adjacent to Van Cortlandt park, Woodlawn offers ample space for outdoor recreation.";
        content.childNodes[2].textContent = "The exhilarating Irish sports of Hurling and Gaelic Football are exhibited at nearby Gaelic Park.";
        content.childNodes[3].textContent = "The Woodlawn Cemetery and Conservancy offers a tranquil escape from the city noise."
      }
  }
  showTransit() {
      this.intro = this.app.getIntro();
      console.log(this.intro);

      if (!this.intro) {
        var content = document.getElementById('content-box');
        content.childNodes[0].textContent = "Woodlawn";
	content.childNodes[1].textContent = "Woodlawn is served by the Bx16, Bx31, Bx34, and BxM4 buses operated by MTA Regional Bus Operations.";
        content.childNodes[2].textContent = "Two trains stations -- on New York City Subway's 4 train and the Metro-North Railroad's Harlem Line -- provide easy access to the bigger city.";
        content.childNodes[3].textContent = "Manhattan is a mere $3 away."
      }
  }
  showSchools() {
      this.intro = this.app.getIntro();
      console.log(this.intro);

      if (!this.intro) {
        var content = document.getElementById('content-box');
        content.childNodes[0].textContent = "Woodlawn";
        content.childNodes[1].textContent = "Woodlawn generally has a lower rate of college-educated residents than the rest of the city.";
        content.childNodes[2].textContent = "Its rate of elementary school absenteeism is also slightly higher than the rest of NYC, while timely HS graduation is lower.";
        content.childNodes[3].textContent = "Of note is the St. Barnabas Elementary School, run by the parish of the same name."
      }
  }
  showCrime() {
      this.intro = this.app.getIntro();
      console.log(this.intro);

      if (!this.intro) {
        var content = document.getElementById('content-box');
        content.childNodes[0].textContent = "Woodlawn";
        content.childNodes[1].textContent = "Woodlawn is patrolled by the 47th Preceinct of the NYPD, located at 4111 Lanonia Avenue.";
        content.childNodes[2].textContent = "This precinct ranked as the 35th safest out of 69 for per-capita crime in 2010.";
        content.childNodes[3].textContent = "The incarceration rate of 577 per 100,000 people is higher than the city as a whole, as is the non-fatal assault rate at 82 per 100,000 people.";
      }
  }
}

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
  
}

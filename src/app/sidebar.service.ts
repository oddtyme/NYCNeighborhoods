import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  showSummary(intro) {
    if (!intro) {
      document.getElementById('content-box').innerHTML = "Test";
    }
  }
}

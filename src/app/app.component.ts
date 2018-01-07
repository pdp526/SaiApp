import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navigateLink='home';
  isCollapse=true;

  avtiveItem(selectedLink){
    this.navigateLink=selectedLink;
    
  }
}

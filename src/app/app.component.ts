import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeTask2';
  home="";
  active="";
  deleted="";
  manage="";

  fontChange(weight:string)
  {
      this.home="";
      this.active="";
      this.deleted="";
      this.manage="";
      if(weight==="home")
        this.home="bolder";
      else if(weight==="active")
        this.active="bolder";
      else if(weight==="deleted")
        this.deleted="bolder";
      else if(weight==="manage")
        this.manage="bolder";
  }
}

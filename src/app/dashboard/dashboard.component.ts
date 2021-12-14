import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cheminImage:any = 'assets/static/tick.png';

  constructor() { }
  

  ngOnInit() {
  }

}

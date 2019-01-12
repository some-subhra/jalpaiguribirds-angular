import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-trip-reports',
  templateUrl: './all-trip-reports.component.html',
  styleUrls: ['./all-trip-reports.component.scss']
})
export class AllTripReportsComponent implements OnInit {
  public routerUrl:string= "";
  public tripRouteArray: Array<any> = [{
    routerLink: '/all-trip-reports/royal-manas',
    routerText: 'Royal Manas National Park',
  },
  // {
  //   routerLink: '/all-trip-reports/gajoledoba',
  //   routerText: 'Gajoledoba',
  // }
  ]

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.routerUrl = this.router.url.toString();
  }


}

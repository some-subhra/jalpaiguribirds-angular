import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jalpaiguri Birds';
  public articleSlider: Array<any> = [];
  constructor() {

  }

  ngOnInit() {
    this.articleSlider = [
      {
        'caption': 'The Amur Falcon Story',
        'users':'',
        'link': '#',
        'src': '../assets/images/Other-Images/article-slider/amur.jpg'
      },{
        'caption': 'Nesting Green Cochoa in Buxa Tiger Reserve',
        'users':'Biswapriya Rahut',
        'link': '#',
        'src': '../assets/images/Other-Images/article-slider/cochoa.png'
      },{
        'caption': 'First photographic record of Blyth’s Rosefinch',
        'users':'Biswapriya Rahut, Mousumi Dutta & Chewang Rinchen Bonpo',
        'link': '#',
        'src': '../assets/images/Other-Images/article-slider/rosef.png'
      }
    ]
  }

}

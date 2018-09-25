import { Component } from '@angular/core';
// import * as $ from 'jquery';
// import 'popper.js';
// import 'bootstrap';


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
        'caption': 'Nesting of Green Cochoa in Buxa Tiger Reserve',
        'users': 'Biswapriya Rahut',
        'link': '../assets/article-docs/Nesting_Green_Cochoa.pdf',
        'src': '../assets/images/Other-Images/article-slider/cochoa.png'
      }, {
        'caption': 'First record of Rufous-throated Wren-babbler from Buxa Tiger Reserve',
        'users': 'Biswapriya Rahut',
        'link': '../assets/article-docs/Rufous-throated_Wren-babbler.pdf',
        'src': '../assets/images/Other-Images/article-slider/rt-wren-babbler-buxa.png'
      }, {
        'caption': 'Records of Ward’s Trogon in Neora Valley National Park',
        'users': 'Biswapriya Rahut',
        'link': '../assets/article-docs/Wards_Trogon.pdf',
        'src': '../assets/images/Other-Images/article-slider/trogon.png'
      }, {
        'caption': 'First photographic record of Blyth’s Rosefinch',
        'users': 'Biswapriya Rahut, Mousumi Dutta & Chewang Rinchen Bonpo',
        'link': '../assets/article-docs/Blyth_Rosefinch.pdf',
        'src': '../assets/images/Other-Images/article-slider/rosef.png'
      }, {
        'caption': 'Sighting of Northern Long-eared Owl in the Teesta grasslands, Jalpaiguri',
        'users': 'Prateek Choudhury',
        'link': '../assets/article-docs/long-eared-prateek.pdf',
        'src': '../assets/images/Other-Images/article-slider/long-eared.png'
      }, {
        'caption': 'Photographic record of Smew from Gazaldoba, West Bengal',
        'users': 'Some Subhra Patra',
        'link': '../assets/article-docs/some-smew.pdf',
        'src': '../assets/images/Other-Images/article-slider/smew.png'
      }, {
        'caption': 'The status of the Black-rumped Magpie in India',
        'users': 'Robert P. Prŷs-Jones & Pamela C. Rasmussen',
        'link': '../assets/article-docs/Black_Rumped_Magpie.pdf',
        'src': '../assets/images/Other-Images/article-slider/magpie.png'
      }
    ]
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     let carousels: Array<any> = $('.carousel');
  //     carousels = $.makeArray(carousels);
  //     carousels.forEach((carousel) => {
  //       $(carousel).carousel({
  //         keyboard: true
  //       })
  //     });
      
  //   });
  // }



}

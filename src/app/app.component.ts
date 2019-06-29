import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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
  constructor(titleService: Title, router: Router, activatedRoute: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        console.log('title', title);
        titleService.setTitle(title+' | Jalpaiguri Birds');
      }
    });
  }



  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
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


import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home | Jalpaiguri Birds';
  public sightingSlider: Array<any> = [];
  public smallScreenSightingSlider: Array<any> = [];
  public tourSlider: Array<any> = [];
  public latestArticles: Array<any> = [];

  constructor() {

  }
  ngOnInit() {

    this.sightingSlider = [
      {
        'carouselItems': [
          {
            'src': '../../../assets/images/Other-Images/Home-Page Slider Images/Beautiful Nuthatch.jpg',
            'caption': 'Beautiful Nuthatch',
            'user': 'some subhra',
            'location': 'chapramari'
          },
          {
            'src': '../../../assets/images/Other-Images/Home-Page Slider Images/cutia.jpg',
            'caption': 'Himalayan Cutia',
            'user': 'babia',
            'location': 'gajoldoba'
          },
          {
            'src': '../../../assets/images/Other-Images/Home-Page Slider Images/Pitta_net.jpg',
            'caption': 'Hooded Pitta',
            'user': '',
            'location': ''
          }
        ]
      }, {
        'carouselItems': [
          {
            'src': '../../../assets/images/Other-Images/Home-Page Slider Images/ruddy.JPG',
            'caption': 'Ruddy Kingfisher',
            'user': '',
            'location': ''
          },
          {
            'src': '../../../assets/images/Other-Images/Home-Page Slider Images/Sultan tit_sahay.jpg',
            'caption': 'Sultan Tit',
            'user': '',
            'location': ''
          },
          {
            'src': '../../../assets/images/Other-Images/Home-Page Slider Images/yuhina.jpg',
            'caption': 'Striped Yuhina',
            'user': '',
            'location': ''
          }]
      }];

    this.sightingSlider.forEach((items: any, index: any) => {
      items.carouselItems.forEach((item, index) => {
        this.smallScreenSightingSlider.push(item);
      });
    });

    this.tourSlider = [
      {
        'src': '../../../assets/images/Other-Images/Birding Tour-Images/buxa.jpg',
        'location': 'Buxa Tiger Reserve'
      },
      {
        'src': '../../../assets/images/Other-Images/Birding Tour-Images/gajoldoba.JPG',
        'location': 'Gajoldoba'
      },
      {
        'src': '../../../assets/images/Other-Images/Birding Tour-Images/buxa-hills.JPG',
        'location': 'Buxa Hills'
      },
      {
        'src': '../../../assets/images/Other-Images/Birding Tour-Images/lava.jpg',
        'location': 'Lava'
      }
    ];

    this.latestArticles = [
      {
        'location': 'Royal Manas NP',
        'type': 'Trip Report',
        'link': '#',
        'src': '../../../assets/images/Other-Images/Trip-Reports-Images/Royal-Manas/Royal-Manas.jpg'
      },
      {
        'location': 'North Sikkim',
        'type': 'Birding Spot',
        'link': '#',
        'src': '../../../assets/images/Other-Images/Hot - Spots-Images/North-Sikkim/North-Sikkim-Main.jpg'
      },
      {
        'location': 'Buxa TR',
        'type': 'Birding Spot',
        'link': '#',
        'src': '../../../assets/images/Other-Images/Hot - Spots-Images/Buxa Tiger Reserve/Buxa Habitat.jpg'
      },
      {
        'location': 'Zuluk',
        'type': 'Birding Spot',
        'link': '#',
        'src': '../../../assets/images/Other-Images/Hot - Spots-Images/Zuluk-lungthu/zuluk.jpg'
      }
    ]



  }



}

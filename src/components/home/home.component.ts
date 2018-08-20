import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home | Jalpaiguri Birds';
  public sightingSlider: any;
  public tourSlider: any;
  public publicationSlider: any;
  constructor() {

  }
  ngOnInit() {

    this.sightingSlider = [
      {
        'carouselItems': [{
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
        'carouselItems': [{
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
      }]
  }

}

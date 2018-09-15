import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public teamMembers: Array<any> = [];
  constructor() { }

  ngOnInit() {

    this.teamMembers = [
      {
        members: [
          {
            name: 'Biswapriya Rahut',
            src: '../assets/images/Other-Images/Team-Images/babia-thumb-b.jpg',
            fblink: 'https://www.facebook.com/biswapriya.rahut',
            intro: `A businessman by profession, his association with wildlife dates back to his childhood days when he used
                to walk the forests of Baikunthapur Division with their family estate malis.
                He took to birdwatching towards the late 90s after he was gifted with The Book of Indian Birds by Dr. Salim
                Ali on one of his birthdays.
                From the latter half of 2000s he had shifted his focus on the Hill Birds of
                Eastern Himalayas after he met <a class="highlight1" target="_blank" href="https://www.facebook.com/chewang.bonpo">Chewang Bonpo&nbsp;<img src='../../assets/images/Other-Images/logo/fb.png'></a>&nbsp;, another very
                gifted Birding Guide from South Sikkim.
                Now he concentrates his observation mainly on the birds of the Eastern Himalayas and Northeastern Hill
                States with a special emphasis on <span class="highlight2"> Wren Babblers</span>.
                Quite a few of his articles have been published in National and International journals.`
          }, {
            name: 'Mousumi Dutta',
            src: '../assets/images/Other-Images/Team-Images/mousumi-thumb-m.jpg',
            fblink: 'https://www.facebook.com/mousumi.dutta.1610',
            intro: `A Master Degree holder in Physics, she is currently employed with the India Meteorological Department as a
                Scientific Assistant.
                She has also successfully completed Basic and Advanced Mountaineering Course
                from Himalayan Mountaineering Institute and Nehru Institute of Mountaineering. Ms. Dutta started
                birdwatching from the mid-2000s.
                She almost single handedly initiated <i>jalpaiguribirds.org</i>
                only the second of its kind in the state. Currently she is researching on
                the co-relation of <span class="highlight2"> arrival of Jacobian Cuckoo and the arrival of monsoon</span>.`
          }
        ]
      },
      {
        members: [
          {
            name: 'Amit Thakurta',
            src: '../assets/images/Other-Images/Team-Images/amit.jpg',
            fblink: 'https://www.facebook.com/amit.thakurta',
            intro: `A school teacher by profession, he has been actively observing and photographing birds for the last
                <span class="highlight2">15 years</span>. He has been instrumental in recording the occurrence of many
                new species in and around Jalpaiguri town.
                He is also a <span class="highlight2">major contributor</span> to the database of jalpaiguribirds.com.
                Many of his photographs and articles have been published in major Bird books and magazines. He also
                takes keen interest in <span class="highlight2">painting</span>.`
          }, {
            name: 'Biplab Adhikary',
            src: '../assets/images/Other-Images/Team-Images/biplab.jpg',
            fblink: 'https://www.facebook.com/Biplab7',
            intro: `A school teacher by profession, Mr. Adhikary is a passionate <span class="highlight2">Wildlife
                  photographer</span>. He concentrates a major part of his work in the forests of North Bengal. He also
                  takes keen interest in <span class="highlight2">trekking and gardening</span>.
                  He is also closely associated with Jalpaiguri Photographic Association.`
          }, {
            name: 'Supriyo Ghatak',
            src: '../assets/images/Other-Images/Team-Images/supriyo.jpg',
            fblink: 'https://www.facebook.com/supriyo.ghatak.9',
            intro: `A lecturer of Mechanical Engineering, Sri Ghatak is a keen birdwatcher and bird photographer.
                  He is currently in-charge of the Falakata Polytechnic College.
                  He has made some very significant records around the <span class="highlight2">Jalpaiguri landscape</span>
                  and has quite a few major contribution for jalpaiguribirds.com.`
          }, {
            name: 'Debapratim Saha',
            src: '../assets/images/Other-Images/Team-Images/debapratim.jpg',
            fblink: 'https://www.facebook.com/debapratimphotography',
            intro: `A Master Degree holder in Zoology, he is currently engaged in the teaching profession as a senior
                  teacher.Mr. Saha is one of the most inevitable names in the <span class="highlight2">elite panel of Bird
                  Photographers</span> of the current generation.
                  Many of his works have appeared in both <span class="highlight2">National and International magazines</span>.`
          }, {
            name: 'Amitava Basu',
            src: '../assets/images/Other-Images/Team-Images/amiava.jpg',
            fblink: 'https://www.facebook.com/amitava.basu.14',
            intro: `Amitava Basu has taken to Bird Photography only in the recent past, and within a <span class="highlight2">very
                  short time</span> has established name in the birding fraternity.
                  He is currently employed with the Panchayet Department of the state.
                  Mr. Basu&prime;s passion for birds takes him to all parts of <span class="highlight2">North Bengal,
                  Sikkim and Bhutan</span>.`
          }, {
            name: 'Hirak Sarkar',
            src: '../assets/images/Other-Images/Team-Images/hirak.jpg',
            fblink: 'https://www.facebook.com/hirok.sarkar',
            intro: `Currently employed with the Panchayet Department, Hirak Sarkar is a very passionate <span class="highlight2">Wildlife
                  Photographer</span>.
                  He has made some very important contributions in documenting many <span class="highlight2">rare species</span>
                  in the forests of North Bengal.
                  He has also played a very active role to support the cause of <span class="highlight2">conservation in
                  North Bengal</span>.`
          }, {
            name: 'Anupam Mistry',
            src: '../assets/images/Other-Images/Team-Images/anupam.jpg',
            fblink: 'https://www.facebook.com/mranupammistry',
            intro: `This young birdwatcher has almost <span class="highlight2">single-handedly</span> brought the <span
                  class="highlight2">Gormara NP-Chapramari WLS complex into National limelight </span> through his
                  <span class="highlight2">immaculate observation and dedication</span>.
                  He has been instrumental in recording distribution of many <span class="highlight2">rare and poorly
                  understood species</span> in the forests of northern West Bengal.
                  An employee of the State Govt., Anupam spends most of his spare time and holidays in field <span class="highlight2">observing
                  wildlife</span>.`
          }
        ]
      }
    ];

  }

}

import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home | Jalpaiguri Birds';
  constructor() {

  }

  ngOnInit() {
    // $(".close-image").css("display", "none");
    // $(".search-field").css("cursor", "pointer");
    // $(".search-field").css("background-color", "transparent");

    // $(".search-field").focusin(() => {
    //   $(".search-field").css("background-image", "none");
    //   $(".search-field").css("border", "2px solid #fff");
    //   $(".search-field").css("background-color", "#fff");
    //   $(".m-glass").removeClass("m-left");
    //   var width = $(window).width();
    //   if (width <= 767) {
    //     $(".search-field").animate({ width: '250px' }, (event) => {
    //       $(".close-image").css("display", "inline-block");
    //       $(".search-field").css("cursor", "text");
    //     });
    //   } else {
    //     $(".vanish").css("display", "none");
    //     $(".search-field").animate({ width: '580px' }, (event) => {
    //       $(".close-image").css("display", "inline-block");
    //       $(".search-field").css("cursor", "text");
    //     });
    //   }
    // })

    // $(".close-image").click(() => {
    //   $(".search-field").val('');
    //   $(".close-image").css("display", "none");
    //   $(".m-glass").addClass("m-left");

    //   $(".search-field").animate({ width: '0' }, () => {
    //     $(".vanish").css("display", "block");
    //     $(".search-field").css("border", "none");
    //     $(".search-field").css("background-color", "transparent");
    //     $(".search-field").css("background-image", 'url("Other-Images/searchicon2.png")');
    //   });
    //   $(".search-field").css("cursor", "pointer");
    // });

    // $('[data-toggle="tooltip"]').tooltip();

    $(window).scroll(() => {
      if ($(this).scrollTop() >= 1101) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(() => {
      $('html, body').animate({ scrollTop: 0 }, 1000);
      return false;
    });



    $(window).scroll(() => {
      if ($(this).scrollTop() >= 100) {
        $('.scrollToHelp').fadeIn();
      } else {
        $('.scrollToHelp').fadeOut();
      }
    });

    if ($(window).width() < 400) {
      $('#logo').before('<br>');
    }


    if ($(window).width() <= 768) {
      var tripSelectMain = $('.trip-select-main');
      $('.trip-user-main').after(tripSelectMain);
    }

    // $('.pad').on('click', (event) => {
    //   event.preventDefault();
    //   var $target = $(event.target);
    //   window.location = $target.closest('a').prop('href');
    // });

    $('.list-group-item').one("click", this.handler1);


  }

  private handler1() {
    if ($(this).find(".glyphicon-triangle-bottom")) {
      $(this).find(".glyphicon-triangle-bottom").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");
    }
    $(this).one("click", this.handler2);
  }

  private handler2() {
    if ($(this).find(".glyphicon-triangle-top")) {
      $(this).find(".glyphicon-triangle-top").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom").delay(8000).fadeIn();
    }
    $(this).one("click", this.handler1);
  }

}

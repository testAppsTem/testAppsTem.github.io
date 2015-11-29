$(document).ready(function() {
	"use strict";

//----------------------------------------------------
//--------------------Sticky nav----------------------
//----------------------------------------------------

$("#sticker").sticky({topSpacing:0});

//----------------------------------------------------
//-----------Appearence of navigation-----------------
//----------------------------------------------------

  $('.nav-block .nav, footer .nav').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 72 //Height of Navigation Bar
  });

//----------------------------------------------------
//--------------- For navigation----------------------
//----------------------------------------------------

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//----------------------------------------------------
//--------------- SmoothSroll-------------------------
//----------------------------------------------------

var scrollAnimationTime = 1200,
   scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
   event.preventDefault();
   var target = this.hash;
   $('html, body').stop().animate({
       'scrollTop': $(target).offset().top
   }, scrollAnimationTime, scrollAnimation, function () {
       window.location.hash = target;
   });
});

//----------------------------------------------------
//------------Scroll to Next Section------------------
//----------------------------------------------------
  
  $('.next-arrow a').click(function() {
    $('html,body').animate({scrollTop:$('#story').offset().top - 76}, 750);
 return false;
  });
   $('a[href="#contact"]').click(function() {
    $('html,body').animate({scrollTop:$('#contact').offset().top - 76}, 750);
 return false;
  });
   $('a[href="#map"]').click(function() {
    $('html,body').animate({scrollTop:$('#map').offset().top - 77}, 750);
 return false;
  });

//----------------------------------------------------
//--------------------Countdown-----------------------
//----------------------------------------------------

$("#count-down").TimeCircles(
   {   
     circle_bg_color: "#b782c9",
     use_background: true,
     bg_width: 1,
     fg_width: 0.03,
     time: {
          Days: { color: "#fefeee" },
          Hours: { color: "#fefeee" },
          Minutes: { color: "#fefeee" },
          Seconds: { color: "#fefeee" }
      }
   }
);

$(".greyscale #count-down").TimeCircles(
   {   
     circle_bg_color: "#454545",
     use_background: true,
     bg_width: 1,
     fg_width: 0.03,
     time: {
          Days: { color: "#fefeee" },
          Hours: { color: "#fefeee" },
          Minutes: { color: "#fefeee" },
          Seconds: { color: "#fefeee" }
      }
   }
);

//---------------------------------------------------
//---------------- Scroll to top --------------------
//---------------------------------------------------

$(window).scroll(function() {
   if ($(this).scrollTop() > 200) {
      $('#go-to-top').fadeIn('slow');
      } else {
      $('#go-to-top').fadeOut('slow');
    }
});

  
$('#go-to-top a').click(function(){
  $("html,body").animate({ scrollTop: 0 }, 750);
  return false;
});

//---------------------------------------------------
//------------------- Massonary ---------------------
//---------------------------------------------------

var container = document.querySelector('#photo-gallery');
var msnry = new Masonry( container, {
  // options
  columnWidth: 0,
  itemSelector: '.item',
  "gutter": 30
});

//---------------------------------------------------
//------------------- Placeholder -------------------
//---------------------------------------------------

$(function() {
    // Invoke the plugin
    $('input, textarea').placeholder();
});

//---------------------------------------------------
//------------------- Selectbox -------------------
//---------------------------------------------------

$(function () {
  $("#country_id").selectbox();
  $("#country_id2").selectbox();
});

//---------------------------------------------------
//---------------- Magnific Image Popup--------------
//---------------------------------------------------

  $('.gallery-popup').magnificPopup({
        type:'image',
        closeBtnInside:true,
        // Delay in milliseconds before popup is removed
        removalDelay: 300,
    
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        //mainClass: 'mfp-fade',
        gallery: {
          enabled: true, // set to true to enable gallery
    
          preload: [0,2], // read about this option in next Lazy-loading section
    
          navigateByImgClick: true,
    
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
    
          closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',
    
          tPrev: 'Previous (Left arrow key)', // title for left button
          tNext: 'Next (Right arrow key)', // title for right button
          //tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
  });
//---------------------------------------------------------
//--------------- Animate and WOW Animation----------------
    var wow = new WOW(
        {
            //offset: 50,
            mobile: false
           // live: true
        }
    );
    wow.init();


/* =================================
===  IE10 ON WINDOWS 8 FIX      ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}
  
});
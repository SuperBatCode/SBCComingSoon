// makes sure the whole site is loaded
// Code Courtesy (http://w3lessons.info/2013/07/18/jquery-preloader/)
jQuery(window).load(function() {

    jQuery(".hidden-row").hide(); // Hide the page-2 elements (that is the elements which have the comic and all

    // will first fade out the loading animation
    jQuery("#status").delay(1000).fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").fadeOut("slow");

    jQuery(".ui360").hide(); //Hide the MP3 Player


    jQuery(".top-button").css({"opacity":"0"}); // set the opacity to 0 of top SBC logo on second page (even though the opacity is set to 0 in css :)
    jQuery(".mp3-player-display").css({"opacity":"0"}); // set the opacity to 0 of top mp3 player bg on second page (even though the opacity is set to 0 in css :)

    jQuery(".bg-arrow-resize").css({"opacity":"0"}); // set the opacity to 0 of top arrow on first page page (even though the opacity is set to 0 in css :)
    jQuery(".bg-arrow-resize").delay(1000).fadeTo(3000,1); // then fade in the arrow with a delay of 1000 milliseconds, and 3000 millisecond fade in time, were the opacity is changed from 0 to '1'

    jQuery(".bg-arrow-bottom-resize").css({"opacity":"0"});// set the opacity to 0 of bottom arrow on first page page (even though the opacity is set to 0 in css :)
    jQuery(".bg-arrow-bottom-resize").delay(2000).fadeTo(3000,1)// then fade in the arrow with a delay of 2000 milliseconds, and 3000 millisecond fade in time, were the opacity is changed from 0 to '1'
    jQuery(".bg-panel-fade").css({"opacity":"0"}); //set opacity of hover over panel indicating png to 0
    jQuery(".bg-scroll-fade").css({"opacity":"0"}); // set the opacity of the scroll indication png to 0
    jQuery(".bg-superbatawesome-fade").css({"opacity":"0"}); // set the logo pointing png opacity to 0

    jQuery(".comic-bg-div-fade").css({"opacity":"0"}); //set comic bg and all its inner panel elements opacity to 0
    jQuery(".img-1-fade").css({"opacity":"0"});
    jQuery(".img-2-fade").css({"opacity":"0"});
    jQuery(".img-3-fade").css({"opacity":"0"});
    jQuery(".img-4-fade").css({"opacity":"0"});
    jQuery(".img-5-fade").css({"opacity":"0"});
    jQuery(".img-6-fade").css({"opacity":"0"});
    jQuery(".img-7-fade").css({"opacity":"0"});

    jQuery(".epic-shit").css({"opacity":"0"}); //set coming soon text opacity to 0
    jQuery(".bg-arrow-music-fade").css({"opacity":"0"}); //set arrow pointing to mp3 player opacity to 0




});


$(document).ready(function() { //when the page is ready (not loaded, ready, just search jQuery documentation and you will get the difference )

   $("a.trans").click(function () { // on click of anchor tag with class trans, do the follwoing...
      $(".menu").delay(1000).fadeOut(); //fade out the menu class div (that is front page div) with a delay of 1000
      $(".bg-color").animate({backgroundColor:"#000000"},3000); //using jQuery UI animate the background color to black with a delay of 3000 milliseconds
      $(".top-button").delay(3000).fadeTo("slow",1); //fade in the top button on second page with a delay of 3000 millieseconds

       // fade to opacity 1 for the different elements with different delays so that they fade in one after the other
      $(".hidden-row").delay(3000).fadeIn("slow");// fade in the hidden row
      $(".bg-panel-fade").delay(4000).fadeTo("slow",1);
      $(".bg-scroll-fade").delay(5000).fadeTo("slow",1);
      $(".bg-superbatawesome-fade").delay(6000).fadeTo("slow",1);

       //fade to opacity 1 of the comic book elemets, with incrementing delays so that they fade in one after the other
      $(".comic-bg-div-fade").delay(4000).fadeTo("slow",1);
       $(".img-1-fade").delay(4500).fadeTo("slow",1);
       $(".img-2-fade").delay(5500).fadeTo("slow",1);
       $(".img-3-fade").delay(6500).fadeTo("slow",1);
       $(".img-4-fade").delay(7500).fadeTo("slow",1);
       $(".img-5-fade").delay(8500).fadeTo("slow",1);
       $(".img-6-fade").delay(9500).fadeTo("slow",1);
       $(".img-7-fade").delay(10500).fadeTo("slow",1);

       $(".epic-shit").delay(12000).fadeTo("slow",1);
       $(".bg-arrow-music-fade").delay(13000).fadeTo("slow",1);
       $(".mp3-player-display").delay(14000).fadeTo("slow",1);
       $(".ui360").delay(14000).fadeIn("slow");




   });
});


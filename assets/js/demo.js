/*
 * Bootstrap Image Gallery JS Demo 3.0.1
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global blueimp, $ */

$.ajax({
  url: "assets/gallery/grim/",
  success: function(data){
     $(data).find("a:contains(.jpg)").each(function(){
        // will loop through 
        var images = $(this).attr("href");

        $("<p></p>").html(images).appendTo("#links")

     });
  }
});


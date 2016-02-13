// Toggle Navigation 

(function($) {
  "use strict";
  
jQuery( function ( $ ) {

    var $window = $( window ),
        windowWidth = $window.width(),
        $navigation = $( '#nav-primary' );

    $navigation
    // toggle the menu items' visiblity
        .on( 'click focus', 'h3', function () {

            $( this ).parent().toggleClass( 'expanded' );

        })
        .on( 'click', 'a', function() {

            if ( windowWidth < 767 ) {

                $navigation.toggleClass( 'expanded' );

            }

        });
});
})(jQuery);



// Preloader
(function($) {
  "use strict";
  jQuery(window).load(function () {
    //Preloader
    setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",800);
    setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",800);

});
})(jQuery);






// Scroll nav
(function($) {
  "use strict";
  
  $(document).ready(function() {
                  $('#nav-primary').onePageNav({
                        scrollSpeed: 750, // Speed to scroll the page when the navigation is clicked
                        scrollOffset: 30,
                        scrollThreshold: 0.5,
                        filter: '',
                        easing: 'swing',
                        begin: function() {
                        console.log('start')
                        },
                        end: function() {
                        console.log('stop')
                        }
                  });                  
            });
})(jQuery);





//mailchimp 
(function($) {
  "use strict";
  
  $(function () {
            var $form = $('#mc-embedded-subscribe-form');

            $('#mc-embedded-subscribe').on('click', function(event) {
              if(event) event.preventDefault();
              register($form);
            });
          });

          function register($form) {
            $.ajax({
              type: $form.attr('method'),
              url: $form.attr('action'),
              data: $form.serialize(),
              cache       : false,
              dataType    : 'json',
              contentType: "application/json; charset=utf-8",
              error       : function(err) { $('#notification_container').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
              success     : function(data) {
               
                if (data.result != "success") {
                  var message = data.msg.substring(4);
                  $('#notification_container').html('<span class="alert">'+message+'</span>');
                } 

                else {
                  var message = data.msg;
                  $('#notification_container').html('<span class="success">'+message+'</span>');
                }
              }
            });
          }
})(jQuery);




//Screenshot slider
(function($) {
  "use strict";
  
          $(document).ready(function() {
          $("#owl-slider").owlCarousel();
          });
})(jQuery);
      



//google fonts          
(function($) {
  "use strict";
  
            WebFontConfig = {
            google: { families: [ 'Dosis::latin', 'Fjalla+One::latin' ] }
          };
          (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
              '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
          })(); 
})(jQuery);




       
//nice scroll

(function($) {
  "use strict";
  
    $(document).ready(
            function() {  
              $("html").niceScroll({cursorborder:"",cursorcolor:"#f4b400",cursorwidth:"8px", boxzoom:true, autohidemode:false});
            }
          );
})(jQuery);

           


//scroll reveal

(function($) {
  "use strict";
  window.scrollReveal = new scrollReveal();
})(jQuery);



            
    




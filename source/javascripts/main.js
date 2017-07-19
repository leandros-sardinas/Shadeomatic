$(document).ready(function(){
      
      //Slider
      $('.bxslider').bxSlider({
          autoHover: true,
          pause: 6000,
          mode: 'fade',
          auto: true,
          controls: false,          
          onSlideAfter: function(item, index) {              
              $(item).addClass('active');              
          }
      });

      //Main repsonsive menu
      $('#navigation-menu').on('click', function() {
        $('.navbar-collapse').slideToggle();
        $(this).toggleClass('open');
        //$('.navbar-collapse').toggleClass('collapse');
      });

        /*
        $('.dropToggle').on("click",function(){

        if ($(this).hasClass('open')) {
            $(this).children('ul').fadeOut('fast');
            return;
        }

        $(this).children('ul').fadeIn('fast');
        });
        */

        //Affix sidebar
        $(".stay").affix({
            offset: {
                top: 154,
                bottom: 495
            }
        })
});

    
    
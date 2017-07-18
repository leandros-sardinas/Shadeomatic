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

      //Hover drop down menu
      $('.dropToggle').hover(
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn('fast');
            $(this).toggleClass('open');            
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeOut('fast');
            $(this).toggleClass('open');            
        });

        //Affix sidebar
        $(".stay").affix({
            offset: {
                top: 154,
                bottom: 495
            }
        })
});

    
    
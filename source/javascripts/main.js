$(document).ready(function(){
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

      $(".dropToggle").hover(
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
            $(this).toggleClass('open');            
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
            $(this).toggleClass('open');            
        });
});

    
    
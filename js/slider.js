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
});
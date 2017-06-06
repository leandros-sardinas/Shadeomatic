$(document).ready(function(){
      $('.bxslider').bxSlider({
          mode: 'fade',
          auto: true,
          pause: 5000,
          controls: false,
          onSliderLoad: function() {
              $('.bxslider li').eq(1).addClass('active');
          },
          onSlideAfter: function(item, index) {              
              $(item).addClass('active');
          }
      });
});
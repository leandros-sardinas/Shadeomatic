$(document).ready(function() {
    //Slider
    $('.bxslider').bxSlider({
        autoHover: false,
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
    });

    //Affix sidebar
    $(".stay").affix({
        offset: {
            top: 154,
            bottom: 495
        }
    })
});

    
    
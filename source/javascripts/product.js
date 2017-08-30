$(document).ready(function() {

    var $bxWrapper = $(".bx-wrapper");
    var $productToolbar = $('.product-toolbar');
    var $highlightImg = $('.product-highlight img');
    var $productFeature = $('.product-feature-image');

    $bxWrapper.appear();
    $bxWrapper.on("appear", function(event){
        $productToolbar.fadeOut('fast');
    })
    
    $bxWrapper.on("disappear", function(event) {        
        $productToolbar.fadeIn('slow');        
    })

    $highlightImg.appear();
    $highlightImg.on("appear", function(event, $all_appeared_elements) {
        for(var i=0; i<$all_appeared_elements.length; i++) {
            $($all_appeared_elements[i]).animate({opacity: 1},500)                
        }
    })

    $productFeature.appear();
    $productFeature.on("appear", function(event, $all_appeared_elements) {
        for(var i=0; i<$all_appeared_elements.length; i++) {
            $($all_appeared_elements[i]).addClass('product-feature-image_up');
        }
    })
    
    function resizeSlider(height) {
        $(".bx-viewport").css({'height': height});
        $('.bx-wrapper').css({'height': height});            
        $(".product-slider").css({'height': height});
        $(".product-slider > li").css({
            'height': height,
            'overflow': 'visible'
        });       
    }

    
    //Slider
    $('.product-slider').bxSlider({
            pager: false,
            controls: true,
            mode: 'fade',
            onSliderLoad: function() {
                var sliderHeight = $(window).height() - 154;
                resizeSlider(sliderHeight);

                $(window).on("resize", function(){
                    var sliderHeight = $(window).height() - 154;
                    resizeSlider(sliderHeight);
                })
            }
        }        
    );

})
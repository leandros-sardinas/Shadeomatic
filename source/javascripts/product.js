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

})
$(document).ready(function() {    
    $(".bx-wrapper").appear();
    $(".bx-wrapper").on("appear", function(event){
        $('.product-toolbar').fadeOut('fast');
    })
    
    $('.bx-wrapper').on("disappear", function(event) {        
        $('.product-toolbar').fadeIn('slow');        
    })

    $('.product-highlight img').appear();
    $('.product-highlight img').on("appear", function(event, $all_appeared_elements) {
        for(var i=0; i<$all_appeared_elements.length; i++) {
            $($all_appeared_elements[i]).animate({opacity: 1},500)                
        }
    })

    $('.product-feature-image').appear();
    $('.product-feature-image').on("appear", function(event, $all_appeared_elements) {
        for(var i=0; i<$all_appeared_elements.length; i++) {
            $($all_appeared_elements[i]).addClass('product-feature-image_up');
        }
    })

})
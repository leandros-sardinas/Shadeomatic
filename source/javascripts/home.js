$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,        
        dots: true,
        dotsEach: true,
        dotData: '-',
        margin: 0,
        responsive: {
            0: {
                items:1
            },
            992: {
                items:2
            }
        }
    });
})

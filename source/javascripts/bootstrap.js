/*Bootstrap Plugins*/
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function i(i){i&&3===i.which||(t(o).remove(),t(s).each(function(){var n=t(this),o=e(n),s={relatedTarget:this};o.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(o[0],i.target)||(o.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new a(this)),"string"==typeof e&&n[e].call(i)})}var o=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(n){var o=t(this);if(!o.is(".disabled, :disabled")){var s=e(o),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(n=t.Event("show.bs.dropdown",r)),n.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=t(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var o=e(n),a=o.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&o.find(s).trigger("focus"),n.trigger("click");var r=" li:not(.disabled):visible a",l=o.find(".dropdown-menu"+r);if(l.length){var d=l.index(i.target);38==i.which&&d>0&&d--,40==i.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.affix"),s="object"==typeof e&&e;o||n.data("bs.affix",o=new i(this,s)),"string"==typeof e&&o[e]()})}var i=function(e,n){this.options=t.extend({},i.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.7",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,n){var o=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>o?"top":!1;if("bottom"==this.affixed)return null!=i?o+this.unpin<=s.top?!1:"bottom":t-n>=o+a?!1:"bottom";var r=null==this.affixed,l=r?o:s.top,d=r?a:e;return null!=i&&i>=o?"top":null!=n&&l+d>=t-n?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),n=this.options.offset,o=n.top,s=n.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof n&&(s=o=n),"function"==typeof o&&(o=n.top(this.$element)),"function"==typeof s&&(s=n.bottom(this.$element));var r=this.getState(a,e,o,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),d=t.Event(l+".bs.affix");if(this.$element.trigger(d),d.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var n=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),n=i.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),e.call(i,n)})})}(jQuery),+function(t){"use strict";function e(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(n)}function i(e){return this.each(function(){var i=t(this),o=i.data("bs.collapse"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!o&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),o||i.data("bs.collapse",o=new n(this,s)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};n.VERSION="3.3.7",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(e=o.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){o&&o.length&&(i.call(o,"hide"),e||o.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(n.TRANSITION_DURATION):o.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,n){var o=t(n);this.addAriaAndCollapsedClass(e(o),o)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var o=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var o=t(this);o.attr("data-target")||n.preventDefault();var s=e(o),a=s.data("bs.collapse"),r=a?"toggle":o.data();i.call(s,r)})}(jQuery);

//Lazy load images
var ImgLoader = {
    types: {
        Background: "bg",
        Image: "src"
    },    
    loadImages: function() {
        var self = this;
        var images = $('img.lazy');
        var bgs = $('.lazy-bg');

        images.each(function(index, item){
            self.loadImage(item, self.types.Image);
        });

        bgs.each(function(index, item){
            self.loadImage(item, self.types.Background);
        })
    },    
    loadImage: function(item, type) {
        var self = this;
        var image = new Image();
        image.src = $(item).attr('data-lazy');        
        image.onload = function() {
            if(type==self.types.Background) {
                var url = 'url(' + image.src + ')';
                $(item).css({'background-image': url});                
            }
            if(type==self.types.Image) {
                $(item).attr('src', image.src);
            }
        };
    }
}

//Resize Slider
var sliderSize = {    
    windowHeight: 0,
    calculateHeight: function() {
        var currentWindowHeight = $(window).height();
        if(currentWindowHeight === undefined) {
            console.log("Undefined window height");
        }

        if(this.windowHeight !== currentWindowHeight) {            
            this.windowHeight = currentWindowHeight;                        
            sliderHeight = (this.windowHeight - 158);

            if(sliderHeight < 414) {
                sliderHeight = 414;
            }

            $("#home-slider").css('height', sliderHeight);
            $("#home-slider .bx-viewport").css({'height': sliderHeight});
            $('#home-slider .bx-wrapper').css({'height': sliderHeight});            
            $("#home-slider .bxslider").css({'height': sliderHeight});
            $("#home-slider .bxslider li").css({
                'height': sliderHeight,
                'overflow': 'visible'
            });
        }
    }
};

$(document).ready(function() {
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

    //Load font
    var fontLink = document.createElement("link");
    fontLink.href = "//fonts.googleapis.com/css?family=Lora|Roboto:400,400i,700";
    fontLink.rel = "stylesheet";    
    document.head.appendChild(fontLink);

    $(".social-share").on("click", function(e){
        var $this = $(this);
        var next = $this.next();
        $this.fadeOut(250, function(){
            next.fadeIn(250);
        });

        e.preventDefault();
    });
    
    //lazy load images
    ImgLoader.loadImages();

    //Slider
    $('.bxslider').bxSlider({
        autoHover: false,
        pause: 6000,
        mode: 'fade',
        auto: true,
        controls: false,          
        onSlideAfter: function(item, index) {              
            $(item).addClass('active');
        },
        onSliderLoad: function() {            
            sliderSize.calculateHeight();
            $(window).on('resize', function(e) {                
                sliderSize.calculateHeight();                
            });

            $('.home-scroll').on("click", function(e) {
                $('html, body').animate({
                    scrollTop: $("#row-slogan").offset().top
                }, 1000);

                e.preventDefault();
            })            
        }
    });    

    $('.top').on("click", function(e) {
        $('html, body').animate({
            scrollTop: $("#row-language").offset().top
        }, 1000);

        e.preventDefault();
    });
});
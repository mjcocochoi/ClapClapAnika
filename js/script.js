// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    var threshold = 629;
    var initialDiff = ($(window).width() >= threshold) ? 1:-1;

    $(window).on('resize',function(e){
        var w = $(window).width();
        var currentDiff = w - threshold;
        if(currentDiff*initialDiff < 0) {
            location.reload();
            initialDiff *= -1;
        }
    });
    
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
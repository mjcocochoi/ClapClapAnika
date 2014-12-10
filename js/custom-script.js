$(function() {
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop != 0)
            $('#main-navbar').stop().animate({'opacity':'0.9'},300);
        else   
            $('#main-navbar').stop().animate({'opacity':'1'},400);
    });
     
    $('#main-navbar').hover(
        function (e) {
            var scrollTop = $(window).scrollTop();
            if(scrollTop != 0){
                $('#main-navbar').stop().animate({'opacity':'1'},200);
            }
        },
        function (e) {
            var scrollTop = $(window).scrollTop();
            if(scrollTop != 0){
                $('#main-navbar').stop().animate({'opacity':'0.9'},400);
            }
        }
    );
});
$( window ).on( "load", function() {
    mainNav();
    $(window).scroll(function() {
        mainNav();
    });
    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.navbar').stop().animate({
            "top": '0'
        });
        else $('.navbar').stop().animate({
            "top": '-70'
        });

	}
});
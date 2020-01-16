

new WOW().init();

$(document).ready(function(){

    $(window).scroll(function(){
        $('.header').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link').click(function(){
        $('.navbar-collapse').removeClass('show');
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).parents('.nav-item').addClass('active');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 700);

    });

});

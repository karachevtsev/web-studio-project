$(document).ready(function() {
    $('.header').removeClass('header_fixed');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('header_fixed').fadeIn('fast');
        } else {
            $('.header').removeClass('header_fixed').fadeIn('fast');
        };
    });
});

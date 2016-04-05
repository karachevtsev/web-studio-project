$(document).ready(function() {
    var headerHeight = $('intro').height();

    $(".navigation__link").click(function(e) {
        e.preventDefault();
        var offsetTop = $("#"+$(this).data("target")).offset().top - headerHeight;
        $('html, body').animate({scrollTop: offsetTop}, 1000);
    });

    $(document).scroll(function() {

        var offsets = [];
        $('.navigation__link').each(function(index, element) {
        offsets.push($("#" + $(element).data('target')).offset().top);
    });

    offsets.push( $(document).height() );

    var docScroll = $(document).scrollTop() + headerHeight + $(window).height() / 2;
        for (var i = 0; i < offsets.length - 1; i++) {
          if (docScroll >= offsets[i] && docScroll < offsets[i+1]) {
            $('.navigation__link_active').removeClass('navigation__link_active');
            $('.navigation__link').eq(i).addClass('navigation__link_active');
            break;
          };
        };
    });
});

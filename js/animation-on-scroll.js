$(window).scroll(function () {
    var elems = document.querySelectorAll(".one"),
        i;

    var top_of_element = $("#headers").offset().top; //top of the need elem on scroll
    var bottom_of_element = $("#headers").offset().top + $("#headers").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();


    for (i = 0; i < elems.length; ++i) {
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            elems[i].className = elems[i].setAttribute('class', 'one logo');
        } else {
            elems[i].className = elems[i].setAttribute('class', 'one hidden');
        }
    }

});

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

'use strict'
let participateLink = document.getElementById('participateLink');

participateLink.addEventListener('click', scrollToRegistrationSection);

function scrollToRegistrationSection() {
    event.preventDefault();
}

(function () {
    $('a.page-scroll').on('click', function (e) {
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top
        }, 800, 'ease-in-out');
    });
}());
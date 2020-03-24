/*
    Make cards clickable
    ====================
*/

$('.video-deck .card-body').on('click', function () {
    $(this).parent().find("a").trigger('click');
});

/*

    Set caption from card text
    ==========================
*/

$('.video-deck a').fancybox({
    caption: function (instance, item) {
        return $(this).parent().find('.card-text').html();
    }
});

// $('a.more').on('click', function(event) {
//     event.preventDefault();
//     $.fancybox({
//         'type' : 'iframe',
//         // hide the related video suggestions and autoplay the video
//         'href' : this.href.replace(new RegExp('watch\\?v=', 'i'), 'embed/') + '?rel=0&autoplay=1',
//         'overlayShow' : true,
//         'centerOnScroll' : true,
//         'speedIn' : 100,
//         'speedOut' : 50,
//         'width' : 640,
//         'height' : 480
//     });
// });
//# sourceMappingURL=video-deck.js.map

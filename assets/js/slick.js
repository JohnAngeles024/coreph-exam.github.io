// $('.video-slider__list').slick({
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     centerMode:true,
//     focusOnSelect:true,
//     prevArrow: '<div class="prev_arrow"><i class="fas fa-chevron-circle-left"></i></span></div>',
//     nextArrow: '<div class="next_arrow"><i class="fas fa-chevron-circle-right"></i></span></div>',
// });

$('.video-slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.video-slider__list'
  });
  $('.video-slider__list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.video-slider-wrapper',
    dots:false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<div class="prev_arrow"><i class="fas fa-chevron-circle-left"></i></span></div>',
    nextArrow: '<div class="next_arrow"><i class="fas fa-chevron-circle-right"></i></span></div>',
  });


var hamburger = $('.hamburger-menu');


$('.hamburger-button').on('click', function() {

  hamburger.toggleClass('hamburger-menu-active');

});


$(window).on('resize', function() {

  hamburger.removeClass('hamburger-menu-active');
});



// ヘッダーナビのカレント表示 //
$(function () {

 $(".header-nav li a").on("click",  function() {
  if( $("[href^='#']") ){
  $(".header-nav   li").removeClass('current');
  $(this).parent().addClass('current');
  return false;
   }
  });
 });

 




  $('.features__slider').slick({
    slidesToShow: 4, // デフォルトは4つ並べて表示
    responsive: [
      {
        breakpoint: 768, // 768px以下になったら
        settings: {
          slidesToShow: 1 ,// スライド1つだけ表示
          arrows: true, 
          prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',
          
        }
      }
    ]
  });


 $('.news__slider').slick({
    slidesToShow: 3, // デフォルトは3つ並べて表示
    responsive: [
      {
        breakpoint: 768, // 768px以下になったら
        settings: {
          slidesToShow: 1 ,// スライド1つだけ表示
          arrows: true, 
          prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',
          
        }
      }
    ]
  });
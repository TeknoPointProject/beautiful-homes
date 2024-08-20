
$(document).ready(function() {
 var $carouselContainer = $('.dreamescarousel-cards');
  // Initialize Slick carousel
  $carouselContainer.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
  

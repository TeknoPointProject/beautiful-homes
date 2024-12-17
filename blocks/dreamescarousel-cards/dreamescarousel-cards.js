$(document).ready(function () {
    var $carouselContainer = $('.dreamescarousel-cards');
    var $videocarousel = $('.video-container');
    var $designgallery = $('.design-gallery .carousel-wrapper');
    
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


    $videocarousel.slick({
        infinite: true,
        slidesToShow: 3.11,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        
      });


      $designgallery.slick({
        infinite: true,
        slidesToShow: 3.11,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        
      });




  });

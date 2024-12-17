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
        infinite: false,
        arrows: true,
        slidesToShow: 3.14,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1.03,
            },
          },
        ],
        
      });


      $designgallery.slick({
        infinite: false,
      arrows: true,
      slidesToShow: 3.14,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1.03,
          },
        },
      ],
        
      });
     




  });

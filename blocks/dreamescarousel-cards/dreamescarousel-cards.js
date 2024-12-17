$(document).ready(function () {
    var $carouselContainer = $('.dreamescarousel-cards');
    var $videocarousel = $('.video-container');
    var $designgallery = $('.design-gallery .carousel-wrapper');
    var $fullhome = $('.fullhome .carousel-wrapper');
    var $centerslide = $('.center-slider .carousel-wrapper');
    
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
     
      $fullhome.slick({
        infinite: false,
        arrows: true,
        slidesToShow: 3.14,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1.03,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              arrows: false,
            },
          },
        ],
        
      });

      $centerslide.slick({
        centerMode: true,
        centerPadding: "280px",
        slidesToShow: 1,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        cssEase: "linear",
        speed: 1800,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              centerPadding: "60px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              centerPadding: "30px",
              slidesToShow: 1,
            },
          },
        ],
        
      });




  });

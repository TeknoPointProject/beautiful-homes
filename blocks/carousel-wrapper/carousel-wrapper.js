$(document).ready(function () {
  // Initialize Slick for video container
  $('.video-container').slick({
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

  // Initialize Slick for design gallery
  $('.design-gallery .carousel-wrapper').slick({
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

  // Initialize Slick for fullhome
  $('.fullhome .carousel-wrapper').slick({
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

  // Initialize Slick for center slider
  $('.center-slider .carousel-wrapper').slick({
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

$(document).ready(function () {
    var $carouselContainer = $('.dreamescarousel-cards');
    var $videocarousel = $('.video-container');
    var $designgallery = $('.design-gallery .carousel-wrapper');
    var $fullhome = $('.fullhome .carousel-wrapper');
    var $centerslide = $('.center-slider .carousel-wrapper');

    if ($carouselContainer.length) {
        $carouselContainer.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }

    if ($videocarousel.length) {
        $videocarousel.slick({
            infinite: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }

    if ($designgallery.length) {
        $designgallery.slick({
            infinite: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }

    if ($fullhome.length) {
        $fullhome.slick({
            infinite: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        });
    }

    if ($centerslide.length) {
        $centerslide.slick({
            centerMode: true,
            centerPadding: "60px", // Adjust padding
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
                        centerPadding: "40px",
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: "30px",
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: "20px",
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }
});

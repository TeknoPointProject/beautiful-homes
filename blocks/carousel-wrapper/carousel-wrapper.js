var scroll = false;

function initiliazeslick() {
    $(".video-container").slick({
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

    $(".design-gallery .carousel-wrapper").slick({
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

    $(".fullhome .carousel-wrapper").slick({
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

    $(".center-slider .carousel-wrapper").slick({
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
}

// Pre-initialize Slick with minimal settings to avoid breaking
function preInitSlick() {
    $(".video-container, .design-gallery .carousel-wrapper, .fullhome .carousel-wrapper, .center-slider .carousel-wrapper").slick({
        slidesToShow: 1, // Minimal setting
        slidesToScroll: 1,
        arrows: false, // Disable arrows for the initial render
        dots: false,
    });
}

// Detect user interaction and initialize Slick with full settings
if (screen.width <= 786) {
    document.addEventListener("touchstart", function () {
        if (!scroll) {
            scroll = true;
            initiliazeslick();
        }
    });
} else {
    document.addEventListener("mousemove", function () {
        if (!scroll) {
            scroll = true;
            initiliazeslick();
        }
    });
    document.addEventListener("scroll", function () {
        if (!scroll) {
            scroll = true;
            initiliazeslick();
        }
    });
}

// Run pre-initialization on page load
preInitSlick();

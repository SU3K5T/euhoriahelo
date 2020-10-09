var hotelSlider = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".hotel-slider__button_next",
        prevEl: ".hotel-slider__button_prev",
    },

    keyboard: {
        enabled: true,
    },

    speed: 500,
});

ymaps.ready(function () {
    var map = new ymaps.Map("map", {
        center: [7.573638, 79.803867],
        zoom: 13,
        controls: [
            "geolocationControl",
            "zoomControl",
            "routeButtonControl",
            "fullscreenControl",
            "typeSelector",
        ],
    });
    control = map.controls.get("routeButtonControl");

    var location = ymaps.geolocation.get();

    location.then(function (res) {
        var userTextLocation = res.geoObjects.get(0).properties.get("text");
        control.routePanel.state.set({
            from: userTextLocation,

            to: [7.573638, 79.803867],
        });
    });
    var myPlacemark = new ymaps.Placemark([7.573638, 79.803867], {
        hintContent: "Grand Hilton Hotel",
    });
    map.geoObjects.add(myPlacemark);
});

var reviewsSlider = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".reviews-slider__button_next",
        prevEl: ".reviews-slider__button_prev",
    },

    keyboard: {
        enabled: false,
    },

    speed: 500,
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
    console.log("Menu button has been clicked");
    document
        .querySelector(".navbar-bottom")
        .classList.toggle("navbar-bottom_visible");
        
});

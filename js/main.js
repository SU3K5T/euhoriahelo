var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".slider-button_next",
        prevEl: ".slider-button_prev",
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

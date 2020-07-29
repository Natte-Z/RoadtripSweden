function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 59.334591,
            lng: 18.063240
            }
        });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
        var locations = [
            { lat: 59.334591, lng: 18.063240 },
            { lat: 59.321743, lng: 17.886305 },
            { lat: 59.6191463, lng: 17.7234191 },
            { lat: 60.012778, lng: 20.039167 },
        ];

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });

        var markerCluster = new MarkerClusterer(map, markers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });
    }
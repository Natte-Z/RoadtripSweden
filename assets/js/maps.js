function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 63.8333644,
            lng: 20.2233067
            }
        });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
        var locations = [
            { lat: 63.8333644, lng: 20.2233067 },
            { lat: 67.8531, lng: 20.2255 },
            { lat: 68.349541, lng: 18.831241 },
            { lat: 68.3591, lng: 18.7753 },
            { lat: 66.5901, lng: 19.9012 },
            { lat: 68.261817, lng: 17.253792 },
            { lat: 68.1960, lng: 14.395999 },
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
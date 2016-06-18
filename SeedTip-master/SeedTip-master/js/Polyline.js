<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=geometry"></script>


var line = new google.maps.Polyline({
    path: [new google.maps.LatLng(37.4419, -122.1419), new google.maps.LatLng(37.4519, -122.1519)],
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 10,
    geodesic: true,
    map: map
});
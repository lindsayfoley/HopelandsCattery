var catteryLatLong = [51.911675, -2.12611];
 
function showGoogleMaps() {
 
var latLng = new google.maps.LatLng(catteryLatLong[0], catteryLatLong[1]);
 
var mapOptions = {
	zoom: 15, // initialize zoom level - the max value is 21
	streetViewControl: false, // hide the yellow Street View pegman
	scaleControl: true, // allow users to zoom the Google Map
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	center: latLng
};
 
map = new google.maps.Map(document.getElementById('maps_background'),mapOptions);
 
// Show the default red marker at the location
var iconBase = 'http://hopelandscattery.com';
marker = new google.maps.Marker({
	position: latLng,
	map: map,
	draggable: false,
	animation: google.maps.Animation.DROP,
	icon: iconBase + '/imagesX/logo_grey.png'
	});
}
google.maps.event.addDomListener(window, 'load', showGoogleMaps);

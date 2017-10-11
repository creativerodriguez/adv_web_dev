//author: Orlando Rodriuez
//ICT4510-1 Advanced Web Development and Maintenance
//app.js
var udCoords = {
    latitude: 39.6766174, 
    longitude: -104.9640852
};
var map;
function initMap(coords) {
	var googleLatAndLong = new google.maps.LatLng(udCoords.latitude, udCoords.longitude);
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var mapOptions = {
		zoom: 15,
		center: googleLatAndLong,
		mapTypeID: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	directionsDisplay.setMap(map);
	window.onload = getMyLocation;
}
function getMyLocation() {
	if (navigator.geolocation) {
		var timeoutVal = 10 * 1000 * 1000;
		navigator.geolocation.getCurrentPosition(
			displayPosition, 
			displayError,
			{ enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
		);
	}
}
function displayPosition(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	document.getElementById('mylocation').innerHTML = "Latitude: " + latitude + ", Longitude: " + longitude;
	// Attempted to display location Address based on 
	//Get an error of undefined object, 
	getReverseGeocodingData(position.coords.latitude, position.coords.longitude);
	var km = computeDistance(position.coords, udCoords);
	document.getElementById('distance').innerHTML = "You are " + km + "/km from the University of Denver";
}
function displayError(err) {
	console.log("error: " + err);
}
function computeDistance(startCoords, destCoords) {
	var startLatRads = degreeToRadians(startCoords.latitude);
	var startLongRads = degreeToRadians(startCoords.longitude);
	var destLatRads = degreeToRadians(destCoords.latitude);
	var destLongRads = degreeToRadians(destCoords.longitude);
	
	var Radius = 6317;
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads)) +
		Math.cos(startLatRads) * Math.cos(destLatRads) *
		Math.cos(startLongRads - destLongRads) * Radius;
	return distance;
}
function degreeToRadians(degrees) {
	var radians = (degrees * Math.PI)/180;
	return radians;
}
function getReverseGeocodingData(lat, lng) {
	var latlng = new google.maps.LatLng(lat, lng);
	// This is making the Geocode request
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({ 'latLng': latlng }, function (results, status) {
		if (status !== google.maps.GeocoderStatus.OK) {
			alert(status);
		}
		// This is checking to see if the Geoeode Status is OK before proceeding
		if (status == google.maps.GeocoderStatus.OK) {
			if (results[0]) {
			var address = "", city = "", state = "", zip = "", country = "";
			for (var i = 0; i < results[0].address_components.length; i++) {
				var addr = results[0].address_components[i];
				// check if this entry in address_components has a type of country
				if (addr.types[0] == 'country')
					country = addr.long_name;
				else if (addr.types[0] == 'street_address') // address 1
					address = address + addr.long_name;
				else if (addr.types[0] == 'establishment')
					address = address + addr.long_name;
				else if (addr.types[0] == 'route')  // address 2
					address = address + addr.long_name;
				else if (addr.types[0] == 'postal_code')       // Zip
					zip = addr.short_name;
				else if (addr.types[0] == ['administrative_area_level_1'])       // State
					state = addr.long_name;
				else if (addr.types[0] == ['locality'])       // City
					city = addr.long_name;
			}
			//console.log(address, city ,state, zip, country);
			document.getElementById('mylocation').innerHTML += "<br/>" + address+', '+city+', '+state+', '+zip+', '+country;
			//return yourLocation;
			}
		}
	});
}
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	directionsService.route({
			origin: udCoords,
			destination: document.getElementById('end').value,
			travelMode: 'DRIVING'
		}, function(response, status) {
			if (status === 'OK') {
				directionsDisplay.setDirections(response);
			} else {
				window.alert('Directions request failed due to ' + status);
		}
	});
}
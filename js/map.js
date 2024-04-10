function init(){
	//alert('it works');
  var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(34.043087, -118.267616);
	var mapOptions = {
		center: {lat: 39.483726, lng: -91.314622},
		zoom: 3,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);
  
  const icon = {
    url: "media/sunshine.png", // url
    scaledSize: new google.maps.Size(75, 75), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };
  
  var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: icon
	});
  
  const triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];
  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(myMap);
  
  const contentString = "<h1>Bermuda triangle</h1>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Bermuda"
  });
  
  const marker2 = new google.maps.Marker({
    position: { lat: 25.774, lng: -80.19 },
    map: myMap,
    title: "Bermuda Triangle",
  });
  
  marker2.addListener("click", () => {
    infowindow.open({
      anchor: marker2,
      myMap,
    });
  });
  
}

google.maps.event.addDomListener(window, 'load', init);
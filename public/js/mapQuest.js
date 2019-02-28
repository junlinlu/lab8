function initMap(){
  L.mapquest.key = 	't2p0deivY5Jm0WNHG7blaWr0LxKEjOwl';

  var map = L.mapquest.map('map', {
    center:[32.878883, -117.235918],
    layers: L.mapquest.tileLayer('map'),
    zoom:12,
    zoomControl:false
  });

  L.marker([32.88, -117.236]).addTo(map);
}

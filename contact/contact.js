function initMap() {
  const myLatLng = { lat: 44.6483278, lng: -63.5728179 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng,
    mapId: "6dc0ed847131e18a",
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControl: false
  });

  setTimeout(() => {
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "I'm here!",
      animation: google.maps.Animation.DROP
    });
  }, 1000);
}

window.initMap = initMap;

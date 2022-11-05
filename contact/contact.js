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

const form = document.querySelector("form");
const successmessage = document.querySelector("#successmessage");
const failuremessage = document.querySelector("#failuremessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const payload = new FormData(form);
  const data = new URLSearchParams(payload);

  fetch("/contact", {
    method: "POST",
    body: data
  })
    .then((res) => res.json())
    .then((data) => {
      if (data === true) {
        successmessage.style.height = "100%";
        successmessage.style.padding = "5px 0";
        failuremessage.style.height = "0";
        failuremessage.style.padding = "0";
      } else {
        failuremessage.style.height = "100%";
        failuremessage.style.padding = "5px 0";
        successmessage.style.height = "0";
        successmessage.style.padding = "0";
      }
      console.log("DATA", data);
    })
    .catch((err) => console.log(err));

  form.reset();
});

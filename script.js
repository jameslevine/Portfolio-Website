//var w = document.getElementById("demo");
var x = document.getElementById("town");
var y = document.getElementById("weather");
var z = document.getElementById("temp");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    w.innerHTML = "Geolocation is not supported by this browser.";
  }
};

function showPosition(position) {
  //w.innerHTML = "Latitude: " + position.coords.latitude +
  //"<br>Longitude: " + position.coords.longitude;
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    x.innerHTML = data.name + ", " + data.sys.country;
    y.innerHTML = data.weather["0"].main;
    z.innerHTML = data.main.temp + "°C";
    if (request.status >= 200 && request.status < 400) {
        console.log("hello");
    } else {
      console.log('error');
    }
  }
  request.send();
  console.log(url);
}

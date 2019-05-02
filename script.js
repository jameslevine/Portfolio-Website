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
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {
    var data = JSON.parse(this.response);
    x.innerHTML = data.name + ", " + data.sys.country;
    y.innerHTML = data.weather["0"].main;
    z.innerHTML = data.main.temp.toString().split(".")[0] + "°C";
    if (request.status >= 200 && request.status < 400) {
        console.log("hello");
    } else {
      console.log('error');
    }
  }
  request.send();
  console.log(url);
};

function myFunction(x) {
  x.classList.toggle("change");
  if (document.getElementById("navbar-list_items__one").style.opacity === "0") {
    console.log("turning on");
  document.getElementById("navbar-list_items__one").style.opacity = "1";
  document.getElementById("navbar-list_items__two").style.opacity = "1";
  document.getElementById("navbar-list_items__three").style.opacity = "1";
  document.getElementById("navbar-list_items__four").style.opacity = "1";
  document.getElementById("navbar-list_items__five").style.opacity = "1";
} else if (document.getElementById("navbar-list_items__one").style.opacity === "1"){
  console.log("turning off");
  document.getElementById("navbar-list_items__one").style.opacity = "0";
  document.getElementById("navbar-list_items__two").style.opacity = "0";
  document.getElementById("navbar-list_items__three").style.opacity = "0";
  document.getElementById("navbar-list_items__four").style.opacity = "0";
  document.getElementById("navbar-list_items__five").style.opacity = "0";
}
};

function personalProjectsFunc() {
  console.log("this is a personal project");
  if (document.getElementById('groupportfolio').style.display === "none") {
    console.log("group none");
    document.getElementById('groupportfolio').style.display = "block";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('personal-button').textContent = "Show Personal Projects";
  } else if (document.getElementById('groupportfolio').style.display === "block"){
    console.log("group block");
    document.getElementById('groupportfolio').style.display = "none";
    document.getElementById('portfolio').style.display = "block";
    document.getElementById('personal-button').textContent = "Show Group Projects";
  }
};

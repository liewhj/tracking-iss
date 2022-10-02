// Get ISS location
const api_url='https://api.wheretheiss.at/v1/satellites/25544';
async function getISS(){
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude, altitude, velocity} = data;
    document.getElementById('lat').textContent =`${latitude.toFixed(2)}°`;
    document.getElementById('lon').textContent =`${longitude.toFixed(2)}°`;
    document.getElementById('alt').textContent =`${altitude.toFixed(2)} KM`;
    document.getElementById('velo').textContent =`${velocity.toFixed(0)} KM/H`;
    console.log(latitude);
    console.log(longitude);
    console.log(altitude);
    console.log(velocity);

    // Add a placemark
    var placemarkLayer = new WorldWind.RenderableLayer();
wwd.addLayer(placemarkLayer);

var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes.imageOffset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.3,
    WorldWind.OFFSET_FRACTION, 0.0);

placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.5,
    WorldWind.OFFSET_FRACTION, 1.0);

placemarkAttributes.imageSource = "/tracker/iss-model/DOOT.png";

var position = new WorldWind.Position(latitude, longitude, altitude/10);

function deleteISS() {
    var position = new WorldWind.Position(latitude, longitude, -2);
}

deleteISS()
setInterval(deleteISS, 1800)
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);

placemark.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark);

}

// Create a WorldWindow for the canvas.
var wwd = new WorldWind.WorldWindow("canvasOne");


wwd.addLayer(new WorldWind.BMNGLayer());

 // wwd.addLayer(new WorldWind.CompassLayer());
    // wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
    wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
    wwd.navigator.range = 30e6;
    wwd.navigator.lookAtLocation.latitude = 0;
    wwd.navigator.lookAtLocation.longitude = 0;

getISS()
setInterval(getISS,1800)

/******************* DO NOT KACAU THIS PART OK?*******************/
function displayDate() {
    var dateNow = Date();
    var slicedDate = dateNow.slice(4, 15);

    document.getElementById("date").textContent = slicedDate;
}

function displayTime() {
    var timeNow = Date();
    var slicedTime = timeNow.slice(16, 24);

    document.getElementById("time").textContent = slicedTime;
}

displayDate();
setInterval(displayDate, 0);

displayTime();
setInterval(displayTime, 0);

function myFunction() {
    var x = document.getElementById('showspeed');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function showup() {
    var x = document.getElementById('showlocation');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
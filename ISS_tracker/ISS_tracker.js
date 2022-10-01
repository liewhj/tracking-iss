/******************* DO NOT KACAU THIS PART *******************/
// Create a WorldWindow for the canvas.
var wwd = new WorldWind.WorldWindow("canvasOne");

wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());
wwd.addLayer(new WorldWind.BMNGLayer());
wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());





// wwd.addLayer(new WorldWind.CompassLayer());
// wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
wwd.navigator.lookAtLocation.latitude = 65;
wwd.navigator.lookAtLocation.longitude = -150;
wwd.navigator.range = 30e6;


// Get ISS location
const api_url='https://api.wheretheiss.at/v1/satellites/25544';
async function getISS(){
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude} = data;document.getElementById('lat').textContent =latitude.toFixed(2);
    document.getElementById('lon').textContent =longitude.toFixed(2);
    console.log(latitude);
    console.log(longitude);

}

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
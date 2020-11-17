//function to start the Leaflet map
function createMap() {
    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' + ' <a href="http://mapbox.com">Mapbox</a>'; //You can add you name to the variable if you want to add yourself to the credits.
    
	var apitoken = 'pk.eyJ1IjoibXN1bGxpdmFuOTQiLCJhIjoiY2toa3c3YmlqMHU4bDJ4cGYyaDB3bmc1dyJ9.zmWrvNbiUWQfNyOjSPMkKg';
	
	var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //URL used for Stanard MaxBox Styles
	
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    //For Custome basemaps - Replace your username and StyleID
    var customeBasemap = L.tileLayer(mbStyleUrl, {id: 'msullivan94/ckhkwolyr013x1amyl15v36ri', token: apitoken,  attribution: mbAttr});
    
	//For MabBox Standard Basemaps
    var standardBasemap = L.tileLayer(mbUrl, {id: 'msullivan94/ckhm8tw5z0poq19o8bvu4fo39', token: apitoken, attribution: mbAttr});
	
    //create the map*/
    var map = L.map('map', {
        center: [37.216916, -108.46726],//Coordinated to center the map
        zoom: 11, //zoom level
        layers: customeBasemap //basemap
	});
	//create the basemap control layer*/
    var baseLayers = {
		"Sattelite": standardBasemap,
        "DEM": customeBasemap
    };
    
    L.control.layers(baseLayers).addTo(map);

}
//calling the funcation
$(document).ready(createMap);
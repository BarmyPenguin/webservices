var gbWS = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var skey = "&key=AIzaSyAqCL-OhWfKu2j_NeYrBLWdiw4PEblL9kk&";

$( init );

function init() {
// Register listeners
$('#gbook').click( findBook );
}

function findBook() {
	findAll();
	return false;
}


function findAll() {
	console.log('findAll');
	surl = gbWS + $('#endereco').val()   + skey;
	$.ajax({
		type: 'GET',
		url: surl,
		dataType: "json", // data type of response
		success: renderList
	});
}

function renderList(data) {
		 coord = "Latitude" + data.results[0].geometry.location.lat + "<BR> Longitude" + data.results[0].geometry.location.lng + "<BR><BR>";
		 $('#resultado').append(coord);
		 
	
       
}



var tempo1 = "https://twcservice.mybluemix.net/api/weather/v1/geocode/";

var tempo2 = "/forecast/daily/3day.json?language=pt-BR&units=m";
var usuario = "7e4baad4-565e-4102-a5d9-7e6647e48e9d";
var senha = "2sWyCBMhgz";


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
	

surl =  tempo1 +  $('#latitude').val()  + "/" +  $('#longitude').val() + tempo2;
console.log(surl);
$.ajax({


type: 'GET',
		
url: surl,
		
dataType: "json", // data type of response

username: usuario,
password: senha,		
success: imprimeDados
	});
}



function imprimeDados(data) 
{
		 
coord = data.forecasts[0].narrative + "<BR><BR>";
		 
$('#resultado').append(coord);
		 
	
       

}



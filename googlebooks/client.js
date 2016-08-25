var gbWS = "https://www.googleapis.com/books/v1/volumes?q=";
var sauthor = "+inauthor:";
var skey = "&key=AIzaSyAqCL-OhWfKu2j_NeYrBLWdiw4PEblL9kk";

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
	surl = gbWS + $('#titulo').val() + sauthor + $('#autor').val()  + skey;
	$.ajax({
		type: 'GET',
		url: surl,
		dataType: "json", // data type of response
		success: renderList
	});
}

function renderList(data) {
	 i=0;
	 $.each( data.items, function() {
		 $('#resultado').append(data.items[i].volumeInfo.title + " ");
		 if(!(data.items[i].volumeInfo.subtitle == undefined))
                       $('#resultado').append(data.items[i].volumeInfo.subtitle);
                 if(data.items[i].saleInfo.listPrice == undefined)
                     valor="NA";
		 else valor=data.items[i].saleInfo.listPrice.amount;
  			
		 $('#resultado').append("<BR>R$:" + valor + "<BR><BR>");
		 i++;	
	});
       
}



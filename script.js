function getAdress(){
	var zipcode = $("#zipcode").val();
	var housenr = $("#housenr").val();

	if(zipcode && housenr){
		$.ajax({
		  url: "https://postcode-api.apiwise.nl/v2/addresses/",
		  headers: {'X-API-Key': 'your-key'},
		  data: {
		    postcode: zipcode,
		    number: housenr
		  },
		  success: function( result ) {
		    $( "#street" ).text(result._embedded.addresses[0].street);
		    $( "#city" ).text(result._embedded.addresses[0].city.label);
		  }
		});
	}
}

function getAdress(){
	var zipcode = $("#zipcode").val();
	var housenr = $("#housenr").val();

	if(zipcode != "" && housenr != ""){
		$.ajax({
		  url: "https://postcode-api.apiwise.nl/v2/addresses/",
		  headers: {'X-API-Key': 'rqNVKLf9Ks4OMr2xL4TtI1sYDvAUkpjB1TjRIeDW'},
		  data: {
		    postcode: zipcode,
		    number: housenr
		  },
		  success: function( result ) {
		  	console.log(result);
		    $( "#street" ).text(result._embedded.addresses[0].street);
		    $( "#city" ).text(result._embedded.addresses[0].city.label);
		  }
		});
	}
}
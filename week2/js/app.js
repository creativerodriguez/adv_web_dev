//author: Orlando Rodriuez
//ICT4510-1 Advanced Web Development and Maintenance
//app.js
//This files contains a onClick function that gets the
//form field values, places them within an array using the getValues method
//and then displays the results using the showValues method

//jQuery OnClick function applied to form submit button
// var formFieldsArray = []
$("#submit" ).click(function() {
	//Invoking called function getValues
	getValues();
	//Invoking called function showValues from array
	showValues();
});

var formFields = []
var firstname = '';
var lastname = '';
var email = '';
var phone = '';
var results = '';
var isValid = true;

//Function used to add form field values to the formFieldsArray
function getValues() {

	formFields = [];
	firstname = document.getElementById('firstname').value;
	lastname = document.getElementById('lastname').value;
	email = document.getElementById('email').value;
	phone = document.getElementById('phone').value;
	$('.form-control').each(function() {
		if ( $(this).val() === '' )
		    isValid = false;
	});
	if (isValid === true) {
		formFields.push(firstname);
		formFields.push(lastname);
		formFields.push(email);
		formFields.push(phone);	
		console.log(formFields);
	} else {
		false;
	}
}
//Function used to display form field values to the results div
function showValues() {
	results = '';
	document.getElementById('results').innerHTML = '';
	for (i = 0; i < formFields.length; i++) { 
		results += formFields[i] + "<br>";
	}
	document.getElementById('results').innerHTML = results;
}

/*
//Alternative way using the serializeArray() method with jQuery
  function showValues() {
    var fields = $( ":input" ).serializeArray();
    console.log(fields);
    $( "#results" ).empty();
    jQuery.each( fields, function( i, field ) {
      $( "#results" ).append( field.name + ": " +field.value + "<br/>" );
    });
  }
showValues();
*/
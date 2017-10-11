//author: Orlando Rodriuez
//ICT4510-1 Advanced Web Development and Maintenance
//app.js
//This files contains a onClick function that gets the
//form field values, places them within an array using the getValues method
//and then displays the results using the showValues method.
//The code has been modified to use jQuery selectors and methods.
//The form now slowly fades once the data is submitted

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
	firstname = $('#firstname').val();
	lastname = $('#lastname').val();
	email = $('#email').val();
	phone = $('#phone').val();
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
	$('#results').empty();
	for (i = 0; i < formFields.length; i++) { 
		results += formFields[i] + "<br>";
	}
	$('#results').append(results);
	$('form').fadeOut("slow");
}
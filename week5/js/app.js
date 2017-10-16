//author: Orlando Rodriuez
//ICT4510-1 Advanced Web Development and Maintenance
//app.js
//This files contains a submitHandler function that gets the
//form field values, places them within an object using the getFormValues method
//and then processes the results within process.php.
//A web server localhost must be active to test results
//View the index.html of this project though the http://localhost url

(function () {

	$('#contact').validate({
		submitHandler: function () {
			var values = getFormValues();
			var url = 'http://localhost/week5/demos/contact-form/process.php';
			//var url = 'http://localhost/adv_web_dev/week5/process.php';
			$.post(url, values, function (json) {
				displayMessage(json);
			});
		}
	});
	

	function getFormValues () {
						
		var formValues = {};
			
		formValues.firstName = $('#firstName').val();
		formValues.lastName = $('#lastName').val();
		formValues.emailAddress = $('#emailAddress').val();
		formValues.phoneNumber = $('#phoneNumber').val();
		
		return formValues;
	}
	
	function displayMessage (json) {
		
		var display = $('#display');
		var data = '<p>' + json.message + '</p>';
		
		display.empty().append(data);
		$('form').fadeOut('slow');
	}
	   
})();
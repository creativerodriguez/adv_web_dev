//author: Orlando Rodriuez
//ICT4510-1 Advanced Web Development and Maintenance
//validation.js
// form.submit() has been commented out
// event.preventDefault() has been placed in to show results

$.validator.addMethod(
	"regex",
	function(value, element, regexp) {
		var re = new RegExp(regexp);
		return this.optional(element) || re.test(value);
	},
	"Please check your input."
);
$('form').validate({
	ignore: ":hidden",
	rules: {
		firstname: {
			required: true
		},
		lastname: {
			required: true
		},
		email: {
			required: true,
			email: true
		},
		phone: {
			required: true,
			regex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
			// usFormat: true,
			minlength: 12
		}
	},
	messages: {
		firstname: {
			required: "Please enter your first name"
		},
		lastname: {
			required: "Please enter your last name"
		},
		email: {
			required: "Please enter your email address",
			email: "Please enter a valid email address"
		},
		phone: {
			required: "Please enter your telephone number",
			regex: "Enter a phone number with the following format xxx-xxx-xxxx",
			minlength: "Check format and/or length"
		}
	},
	errorElement: "small",
	errorPlacement: function(error, element) {
		error.insertAfter(element);
	},
	submitHandler: function(form) {
		//form.submit();
 		event.preventDefault();
	}
});

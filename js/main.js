(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					subject: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Por favor ingrese su nombre",
					subject: "Por favor ingrese el asunto",
					email: "Por favor ingrese su email",
					message: "Por favor ingrese el mensaje"
				},
				submitHandler: function(form) {		
				  form.submit();
		  	}
      });
		}
	};
	contactForm();

})(jQuery);

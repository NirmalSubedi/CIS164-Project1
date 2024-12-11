"use strict";

$(document).ready(() => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	// move focus to first text box
	$("#visits").focus();
	
	// the handler for click event of submit button 
	$("#feedback_form").submit(evt => {
		let isValid = true;
		const visits = $("#visits").val().trim();
		const issue = $("#issue").val().trim();
		const name = $("#name").val().trim();
		const email = $("#email").val().trim();
		const phone = $("#phone").val().trim();

		// validate text box entries 
		if (issue == "") {
			$("#issue").next().text("This field is required.");
            isValid = false;
		} else {
			$("#issue").next().text("");
		}
		$("#issue").val(issue);

		if (visits == "") {
			$("#visits").next().text("This field is required.");
            isValid = false;
			// validate numeric entry
		} else if (isNaN(visits)) {
			$("#visits").next().text("Must be numeric.");
		} else {
			$("#visits").next().text("");
		}
		$("#visits").val(visits);

		if (name == "") {
			$("#name").next().text("This field is required.");
            isValid = false;
		} else {
			$("#name").next().text("");
		}
		$("#name").val(name);

		if (phone == "") {
			$("#phone").next().text("This field is required.");
            isValid = false;
		} else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);


		// validate the email entry with a regular expression
		if (email == "") {
			$("#email").next().text("This field is required.");
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
		$("#email").val(email);

		// prevent the submission of the form if any entries are invalid 
		if (isValid == false) {
			evt.preventDefault();
		}
	}); // end submit

}); // end ready
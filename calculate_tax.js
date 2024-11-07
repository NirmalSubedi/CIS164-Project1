"use strict";
const $ = selector => document.querySelector(selector);

const processEntry = () => {
	const userEntry = parseInt($("#income").value);

	if (userEntry > 0) {
		const calculateTax = userEntry => {
			let tax = 0;
			if (userEntry <= 9875) {
				tax = userEntry * 0.1;
			}
			else if (userEntry <= 40125) {
				tax = (userEntry - 9875) * 0.12 + 987.50;
			}
			else if (userEntry <= 85525) {
				tax = (userEntry - 40125) * 0.22 + 4617.50;
			}
			else if (userEntry <= 163300) {
				tax = (userEntry - 85525) * 0.24 + 14605.50;
			}
			else if (userEntry <= 207350) {
				tax = (userEntry - 163300) * 0.32 + 33271.50;
			}
			else if (userEntry <= 518400) {
				tax = (userEntry - 207350) * 0.35 + 47367.50;
			}
			else {
				tax = (userEntry - 518400) * 0.37 + 156235.00;
			}
			$("#tax").value = tax.toFixed(2);
		};
		calculateTax(userEntry);
	} 
	else {
		alert("Enter a number greater than 0.");
		$("#tax").value = "";
		$("#income").select();
	}
	$("#income").focus();
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
    $("#income").focus();
});
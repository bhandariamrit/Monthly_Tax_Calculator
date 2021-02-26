let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
	let genderStaus = document.querySelector("input[name='gender']:checked")
		.value;

	let monthlyIncome = document.getElementById("monthly_income").value; //monthly income

	let yearlyIncome = (document.getElementById("yearly_income").value = //yearly income
		monthlyIncome * 12);
	let yearlyTax = 0;
	if (genderStaus === "Unmarried") {
		yearlyTax = getYearlyUnmarriedTax(yearlyIncome);
	} else {
		yearlyTax = getMarriedTax(yearlyIncome);
	}
	let totalYearlyTax = (document.getElementById(
		"yearly_tax"
	).value = yearlyTax);

	let monthlyTax = (document.getElementById("monthly_tax").value =
		totalYearlyTax / 12); //monthly tax

	let cashInHand = (document.getElementById("monthly_salary").value =
		monthlyIncome - monthlyTax); // cash in hand
});
//// Reset Function
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
	let monthlyIncome = (document.getElementById("monthly_income").value = "");
	let yearlyIncome = (document.getElementById("yearly_income").value = "");
	let getYearlyTax = (document.getElementById("yearly_tax").value = "");
	let monthlyTax = (document.getElementById("monthly_tax").value = "");
});

//// Unmarried
function getYearlyUnmarriedTax(yearlyIncome) {
	if (yearlyIncome <= 400000) {
		return yearlyIncome * 0.01;
	} else if (yearlyIncome > 400000 && yearlyIncome <= 500000) {
		return 4000 + (yearlyIncome - 400000) * 0.1;
	} else if (yearlyIncome > 500000 && yearlyIncome <= 700000) {
		return 4000 + 10000 + (yearlyIncome - 500000) * 0.2;
	} else if (yearlyIncome > 700000 && yearlyIncome <= 2000000) {
		return 4000 + 10000 + 40000 + (yearlyIncome - 700000) * 0.3;
	} else if (yearlyIncome > 2000000) {
		return 4000 + 10000 + 40000 + 390000 + (yearlyIncome - 2000000) * 0.36;
	}
}
/// Married
function getMarriedTax(yearlyIncome) {
	if (yearlyIncome <= 450000) {
		return yearlyIncome * 0.01;
	} else if (yearlyIncome > 450000 && yearlyIncome <= 550000) {
		let tax = 4500 + (yearlyIncome - 450000) * 0.1;
		return 4500 + (yearlyIncome - 450000) * 0.1;
	} else if (yearlyIncome > 550000 && yearlyIncome <= 750000) {
		return 4500 + 10000 + (yearlyIncome - 550000) * 0.2;
	} else if (yearlyIncome > 750000 && yearlyIncome <= 2000000) {
		return 4500 + 10000 + 40000 + (yearlyIncome - 750000) * 0.3;
	} else if (yearlyIncome > 2000000) {
		return 4500 + 10000 + 40000 + 375000 + (yearlyIncome - 2000000) * 0.36;
	}
}

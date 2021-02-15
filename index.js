let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let monthlyIncome = document.getElementById("monthly_income").value;

  let yearlyIncome = (document.getElementById("yearly_income").value =
    monthlyIncome * 12);

  let monthlyTax = (document.getElementById("monthly_tax").value =
    getYearlyTax(yearlyIncome) / 12);

  let yearlyTax = (document.getElementById("yearly_tax").value = getYearlyTax(
    yearlyIncome
  ));
});

let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  let monthlyIncome = (document.getElementById("monthly_income").value = "");
  let yearlyIncome = (document.getElementById("yearly_income").value = "");
  let getYearlyTax = (document.getElementById("yearly_tax").value = "");
});

function getYearlyTax(yearlyIncome) {
  if (yearlyIncome <= 400000) {
    return (yearlyIncome * 1) / 100;
  } else if (yearlyIncome > 400000 && 500000) {
    return ((yearlyIncome - 400000) * 10) / 100;
  } else if (yearlyIncome > 500000 && yearlyIncome <= 700000) {
    return ((yearlyIncome - 400000) * 20) / 100;
  } else if (yearlyIncome > 700000 && yearlyIncome <= 2000000) {
    return ((yearlyIncome - 400000) * 30) / 100;
  } else if (yearlyIncome > 2000000) {
    return ((yearlyIncome - 400000) * 36) / 100;
  }
}

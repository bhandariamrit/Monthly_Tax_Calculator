let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let month = document.getElementById("total_month");
  let monthlyIncome = document.getElementById("monthly_income").value;
  let yearlyIncome = (document.getElementById("yearly_income").value =
    monthlyIncome * 12);
});

let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  let monthlyIncome = (document.getElementById("monthly_income").value = "");
  let yearly_income = (document.getElementById("yearly_income").value = "");
});


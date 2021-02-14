let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let month = document.getElementById("total_month").value;
  let monthlyIncome = document.getElementById("monthly_income").value;
  let yearlyIncome = (document.getElementById("yearly_income").value =
    monthlyIncome * 12);
});


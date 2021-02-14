                    Employed Individuals

*****************************************************************
Income Level (NPR)   	Tax Rate (FY 2020-21)	 Taxable Amount
Up to 4 Lakh	                1%	                NPR 4,000
Additional 1 Lakh	            10%	                NPR 14,000
Additional 2 Lakhs	            20%	                NPR 54,000
Next 1,300,000	                30%                 NPR 444,000



**********************************
Logic:-

  if (yearlyIncome <= 400000) {
    yearlyTax = (yearlyIncome * 1) / 100;
  }
  if (yearlyIncome > 400000 && 500000) {
    yearlyTax = ((yearlyIncome - 400000) * 10) / 100;
  }
  if (yearlyIncome > 500000 && yearlyIncome <= 700000) {
    yearlyTax = ((yearlyIncome - 400000) * 20) / 100;
  }
  if (yearlyIncome > 700000 && yearlyIncome <= 2000000) {
    yearlyTax = ((yearlyIncome - 400000) * 30) / 100;
  }
  if (yearlyIncome > 2000000) {
    yearlyTax = ((yearlyIncome - 400000) * 36) / 100;
  }

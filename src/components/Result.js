import React from "react";

const Result = ({ data }) => {
  const { downPayment, homeValue, loanAmount, loanTerm, interestRate } = data;
  const totalLoanMonths = loanTerm * 12; //  5 years * 12 month per year = 60 months = 5 years
  const interestPerMonth = interestRate / 100 / 12; // 100 @ 12% for 1 year

  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  
  return <div>Result</div>;
};

export default Result;

import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { downPayment, homeValue, loanAmount, loanTerm, interestRate } = data;
  const totalLoanMonths = loanTerm * 12; //  5 years * 12 month per year = 60 months = 5 years
  const interestPerMonth = interestRate / 100 / 12; // 100 @ 12% for 1 year

  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={2}>
      <Typography textAlign={"center"}>
        Monthly Payment: $ {monthlyPayment.toFixed(2)}
      </Typography>
      <Pie data={pieChartData} />
    </Stack>
  );
};

export default Result;

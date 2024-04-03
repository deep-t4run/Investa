import React from "react";
import Navbar from "./Navbar";

const Services = () => {
  // Dummy data for banks and their services
  const banks = [
    {
      name: "Bank A",
      loanAmount: "$10,000",
      interestRate: "8-10%",
      tenure: "5 years",
      minValue: "$25,000",
      maxRisk: "8-12%",
    },
    {
      name: "Bank B",
      loanAmount: "$15,000",
      interestRate: "7.5-9%",
      tenure: "7 years",
      minValue: "$40,000",
      maxRisk: "6-8%",
    },
    {
      name: "Bank C",
      loanAmount: "$20,000",
      interestRate: "7-8.5%",
      tenure: "10 years",
      minValue: "$50,000",
      maxRisk: "4-5%",
    },
    // Add more banks and their services as needed
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-8 ">
          <h1 className="text-3xl font-semibold mb-4">Services offered</h1>
          <div className="grid grid-cols-1 gap-6">
            {banks.map((bank, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 md:p-6"
              >
                <h2 className="text-xl font-semibold mb-2">{bank.name}</h2>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="py-2">Loan Amount</th>
                      <th className="py-2">Interest Rate</th>
                      <th className="py-2">Tenure</th>
                      <th className="py-2">Min Portfolio Valuation</th>
                      <th className="py-2">Max Portfolio Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border py-2 text-center">
                        {bank.loanAmount}
                      </td>
                      <td className="border py-2 text-center">
                        {bank.interestRate}
                      </td>
                      <td className="border py-2 text-center">{bank.tenure}</td>
                      <td className="border py-2 text-center">
                        {bank.minValue}
                      </td>
                      <td className="border py-2 text-center">
                        {bank.maxRisk}
                      </td>
                    </tr>
                    {/* Add more rows for additional services */}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

const { calculateEMI, validateEMIInput } = require("../utiles/calculateEMI");
const { successResponse, errorResponse } = require("../utiles/responseHandler");

exports.calculate = (req, res) => {
  const { principal, annualInterestRate, tenureYears } = req.body;

  const validationError = validateEMIInput(principal, annualInterestRate, tenureYears);
  if (validationError) {
    return errorResponse(res, validationError, 400);
  }

  const principalValue = Number(principal);
  const interestRateValue = Number(annualInterestRate);
  const tenureValue = Number(tenureYears);
  const numberOfMonths = tenureValue * 12;
  const emi = calculateEMI(principalValue, interestRateValue, tenureValue);
  const totalPayment = emi * numberOfMonths;
  const totalInterest = totalPayment - principalValue;

  return successResponse(res, {
    principal: principalValue,
    annualInterestRate: interestRateValue,
    tenureYears: tenureValue,
    numberOfMonths,
    monthlyEMI: Number(emi.toFixed(2)),
    totalPayment: Number(totalPayment.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
  });
};

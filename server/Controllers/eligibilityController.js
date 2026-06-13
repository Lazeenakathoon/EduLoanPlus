const { successResponse, errorResponse } = require("../utiles/responseHandler");

const validateEligibilityInput = (data) => {
  const {
    fullName,
    mobileNumber,
    email,
    course,
    collegeName,
    loanAmount,
    annualFamilyIncome,
  } = data;

  if (!fullName || !mobileNumber || !email || !course || !collegeName) {
    return "All personal and academic fields are required.";
  }

  if (!loanAmount || !annualFamilyIncome) {
    return "Loan amount and annual family income are required.";
  }

  if (!/^[0-9]{10}$/.test(String(mobileNumber).trim())) {
    return "Enter a valid 10-digit mobile number.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
    return "Enter a valid email address.";
  }

  if (Number(loanAmount) <= 0) {
    return "Loan amount must be a positive number.";
  }

  if (Number(annualFamilyIncome) < 0) {
    return "Annual family income must be a non-negative number.";
  }

  return null;
};

exports.checkEligibility = (req, res) => {
  const validationError = validateEligibilityInput(req.body);
  if (validationError) {
    return errorResponse(res, validationError, 400);
  }

  const {
    fullName,
    course,
    collegeName,
    loanAmount,
    annualFamilyIncome,
  } = req.body;

  const loanAmountValue = Number(loanAmount);
  const incomeValue = Number(annualFamilyIncome);

  const courseRules = {
    "MBA Loan": 2.5,
    "Engineering Loan": 2.0,
    "Medical Loan": 2.2,
    "Study Abroad Loan": 3.0,
  };

  const eligibilityMultiplier = courseRules[course] || 1.8;
  const maxEligibleLoan = incomeValue * eligibilityMultiplier;
  const isEligible = loanAmountValue <= maxEligibleLoan;

  const message = isEligible
    ? `Congratulations ${fullName}! Based on your income and course, you are likely eligible for a loan up to ₹${maxEligibleLoan.toFixed(0)}.`
    : `Based on the details provided, your requested amount is higher than the recommended eligibility limit of ₹${maxEligibleLoan.toFixed(0)} for ${course}. Please reduce the loan amount or share additional documentation.`;

  return successResponse(res, {
    fullName,
    course,
    collegeName,
    loanAmount: loanAmountValue,
    annualFamilyIncome: incomeValue,
    maxEligibleLoan: Number(maxEligibleLoan.toFixed(2)),
    eligible: isEligible,
  }, message);
};

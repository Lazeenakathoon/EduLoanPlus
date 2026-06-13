const calculateEMI = (principal, annualInterestRate, tenureYears) => {
  const monthlyRate = annualInterestRate / 12 / 100;
  const numberOfMonths = tenureYears * 12;

  if (monthlyRate === 0) {
    return principal / numberOfMonths;
  }

  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
    (Math.pow(1 + monthlyRate, numberOfMonths) - 1)
  );
};

const validateEMIInput = (principal, annualInterestRate, tenureYears) => {
  if (principal == null || annualInterestRate == null || tenureYears == null) {
    return "principal, annualInterestRate, and tenureYears are required";
  }

  if (Number(principal) <= 0) {
    return "principal must be a positive number";
  }

  if (Number(annualInterestRate) < 0) {
    return "annualInterestRate cannot be negative";
  }

  if (Number(tenureYears) <= 0) {
    return "tenureYears must be a positive number";
  }

  return null;
};

module.exports = { calculateEMI, validateEMIInput };

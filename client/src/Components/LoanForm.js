import React, { useMemo, useState } from 'react';

const formatCurrency = (value) => {
  if (Number.isNaN(value) || value === Infinity || value === -Infinity) {
    return '-';
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const LoanForm = ({
  initialPrincipal = 100000,
  initialAnnualRate = 7.5,
  initialTenureYears = 5,
  onCalculate,
}) => {
  const [principal, setPrincipal] = useState(initialPrincipal);
  const [annualRate, setAnnualRate] = useState(initialAnnualRate);
  const [tenureYears, setTenureYears] = useState(initialTenureYears);
  const [tenureMonths, setTenureMonths] = useState(initialTenureYears * 12);

  const validInputs = useMemo(() => {
    return (
      principal > 0 &&
      annualRate >= 0 &&
      tenureYears >= 0 &&
      tenureMonths > 0 &&
      Number.isFinite(principal) &&
      Number.isFinite(annualRate) &&
      Number.isFinite(tenureYears) &&
      Number.isFinite(tenureMonths)
    );
  }, [principal, annualRate, tenureYears, tenureMonths]);

  const calculated = useMemo(() => {
    if (!validInputs) {
      return {
        emi: 0,
        totalPayment: 0,
        totalInterest: 0,
        monthlyRate: 0,
        periods: 0,
      };
    }

    const monthlyRate = annualRate / 100 / 12;
    const periods = Math.round(tenureMonths);
    const factor = Math.pow(1 + monthlyRate, periods);
    const emi = monthlyRate === 0
      ? principal / periods
      : (principal * monthlyRate * factor) / (factor - 1);
    const totalPayment = emi * periods;
    const totalInterest = totalPayment - principal;

    return {
      emi,
      totalPayment,
      totalInterest,
      monthlyRate,
      periods,
    };
  }, [principal, annualRate, tenureMonths, validInputs]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validInputs) {
      return;
    }

    if (typeof onCalculate === 'function') {
      onCalculate({
        principal,
        annualRate,
        tenureYears,
        tenureMonths,
        emi: calculated.emi,
        totalPayment: calculated.totalPayment,
        totalInterest: calculated.totalInterest,
      });
    }
  };

  return (
    <div className="loan-form-container" style={{ maxWidth: 700, margin: '0 auto' }}>
      <form onSubmit={handleSubmit} className="loan-form" style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <label htmlFor="principal">Loan Amount</label>
          <input
            id="principal"
            type="number"
            min="0"
            step="100"
            value={principal}
            onChange={(event) => setPrincipal(Number(event.target.value))}
            placeholder="Enter loan amount"
            style={{ width: '100%', padding: '0.75rem', marginTop: '0.25rem' }}
          />
        </div>

        <div>
          <label htmlFor="annualRate">Annual Interest Rate (%)</label>
          <input
            id="annualRate"
            type="number"
            min="0"
            step="0.01"
            value={annualRate}
            onChange={(event) => setAnnualRate(Number(event.target.value))}
            placeholder="Enter annual rate"
            style={{ width: '100%', padding: '0.75rem', marginTop: '0.25rem' }}
          />
        </div>

        <div>
          <label htmlFor="tenureYears">Loan Tenure (Years)</label>
          <input
            id="tenureYears"
            type="number"
            min="0"
            step="1"
            value={tenureYears}
            onChange={(event) => {
              const years = Number(event.target.value);
              setTenureYears(years);
              setTenureMonths(years * 12);
            }}
            placeholder="Enter tenure in years"
            style={{ width: '100%', padding: '0.75rem', marginTop: '0.25rem' }}
          />
        </div>

        <div>
          <label htmlFor="tenureMonths">Loan Tenure (Months)</label>
          <input
            id="tenureMonths"
            type="number"
            min="1"
            step="1"
            value={tenureMonths}
            onChange={(event) => {
              const months = Number(event.target.value);
              setTenureMonths(months);
              setTenureYears(Math.floor(months / 12));
            }}
            placeholder="Enter tenure in months"
            style={{ width: '100%', padding: '0.75rem', marginTop: '0.25rem' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '0.9rem 1.2rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            borderRadius: 4,
            fontSize: '1rem',
          }}
          disabled={!validInputs}
        >
          Calculate EMI
        </button>
      </form>

      {!validInputs && (
        <p style={{ color: '#d93025', marginTop: '1rem' }}>
          Please enter valid loan amount, interest rate, and tenure.
        </p>
      )}

      <div className="loan-results" style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
        <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
          <h3>Monthly EMI</h3>
          <p style={{ fontSize: '1.6rem', margin: 0 }}>{formatCurrency(calculated.emi)}</p>
        </div>

        <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
            <h4>Total Payment</h4>
            <p style={{ margin: 0 }}>{formatCurrency(calculated.totalPayment)}</p>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
            <h4>Total Interest</h4>
            <p style={{ margin: 0 }}>{formatCurrency(calculated.totalInterest)}</p>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
            <h4>Monthly Rate</h4>
            <p style={{ margin: 0 }}>{(calculated.monthlyRate * 100).toFixed(3)}%</p>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
            <h4>Periods</h4>
            <p style={{ margin: 0 }}>{calculated.periods}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanForm;

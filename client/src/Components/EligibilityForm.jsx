import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Hero.css';

function EligibilityForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');

  const onSubmit = async (data) => {
    try {
      const result = await axios.post('/api/eligibility', data);
      setResponseMessage(result.data?.message || 'Application submitted successfully!');
      setResponseType('success');
      reset();
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || 'Something went wrong. Please try again later.'
      );
      setResponseType('error');
    }
  };

  return (
    <div className="eligibility-card">
      <h2>Eligibility Form</h2>
      <p className="hero-form-copy">Fill in the details to check your loan eligibility quickly.</p>
      <form className="hero-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Full Name
          <input
            type="text"
            placeholder="Enter your full name"
            {...register('fullName', { required: 'Full name is required' })}
          />
          {errors.fullName && <span className="field-error">{errors.fullName.message}</span>}
        </label>

        <label>
          Mobile Number
          <input
            type="tel"
            placeholder="Enter your mobile number"
            {...register('mobileNumber', {
              required: 'Mobile number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter a valid 10-digit mobile number',
              },
            })}
          />
          {errors.mobileNumber && <span className="field-error">{errors.mobileNumber.message}</span>}
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.email && <span className="field-error">{errors.email.message}</span>}
        </label>

        <label>
          Course
          <select {...register('course', { required: 'Course is required' })}>
            <option value="MBA Loan">MBA Loan</option>
            <option value="Engineering Loan">Engineering Loan</option>
            <option value="Medical Loan">Medical Loan</option>
            <option value="Study Abroad Loan">Study Abroad Loan</option>
          </select>
          {errors.course && <span className="field-error">{errors.course.message}</span>}
        </label>

        <label>
          College Name
          <input
            type="text"
            placeholder="Your college name"
            {...register('collegeName', { required: 'College name is required' })}
          />
          {errors.collegeName && <span className="field-error">{errors.collegeName.message}</span>}
        </label>

        <label>
          Loan Amount
          <input
            type="number"
            placeholder="Desired loan amount"
            {...register('loanAmount', {
              required: 'Loan amount is required',
              min: { value: 10000, message: 'Loan amount must be at least 10000' },
            })}
          />
          {errors.loanAmount && <span className="field-error">{errors.loanAmount.message}</span>}
        </label>

        <label>
          Annual Family Income
          <input
            type="number"
            placeholder="Your family income"
            {...register('annualFamilyIncome', {
              required: 'Annual family income is required',
              min: { value: 0, message: 'Income must be a positive value' },
            })}
          />
          {errors.annualFamilyIncome && (
            <span className="field-error">{errors.annualFamilyIncome.message}</span>
          )}
        </label>

        <button type="submit" className="hero-form-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Check Eligibility'}
        </button>
      </form>

      {responseMessage && (
        <div className={`hero-status ${responseType === 'success' ? 'success' : 'error'}`}>
          {responseMessage}
        </div>
      )}
    </div>
  );
}

export default EligibilityForm;

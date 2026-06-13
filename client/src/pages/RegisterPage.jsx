import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setResponseType('error');
      setResponseMessage('Passwords do not match!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/auth/register', {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      setResponseType('success');
      setResponseMessage(response.data.message || 'Registration successful! Redirecting...');
      
      // Store token if provided
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }

      // Redirect to login or home after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setResponseType('error');
      setResponseMessage(
        error.response?.data?.message || 'Registration failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        {/* Left Side - Form */}
        <div className="register-form-section">
          <div className="register-header">
            <h1>Create Account</h1>
            <p>Join EduLoan+ to access exclusive education financing</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="register-form">
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                {...register('fullName', {
                  required: 'Full name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
                className={errors.fullName ? 'input-error' : ''}
              />
              {errors.fullName && (
                <span className="error-message">{errors.fullName.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password (min 6 characters)"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                  className={errors.password ? 'input-error' : ''}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input-wrapper">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                  })}
                  className={errors.confirmPassword ? 'input-error' : ''}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword.message}</span>
              )}
            </div>

            {/* Response Message */}
            {responseMessage && (
              <div className={`response-message ${responseType}`}>
                {responseType === 'success' ? '✓ ' : '✕ '}
                {responseMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>

            {/* Login Link */}
            <p className="login-link">
              Already have an account?{' '}
              <a href="/login">Login here</a>
            </p>
          </form>
        </div>

        {/* Right Side - Benefits Panel */}
        <div className="register-benefits-section">
          <div className="benefits-content">
            <h2>Why Join EduLoan+?</h2>
            
            <div className="benefit-item">
              <div className="benefit-icon">📚</div>
              <h3>Education Focused</h3>
              <p>Loans specifically designed for students pursuing higher education</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h3>Fast Approval</h3>
              <p>Get approval in just 24 hours with our streamlined process</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Rates</h3>
              <p>Lowest interest rates in the market for education loans</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <h3>Secure & Trusted</h3>
              <p>Your data is encrypted and secure with industry-leading protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

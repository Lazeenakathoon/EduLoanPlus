import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const result = await axios.post('/api/auth/login', data);
      setResponseMessage(result.data?.message || 'Login successful!');
      setResponseType('success');
      reset();
      // You can store token and redirect here
      localStorage.setItem('authToken', result.data?.token);
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
      setResponseType('error');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Sign in to your EduLoan+ account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
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
              {errors.email && <span className="error-text">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && <span className="error-text">{errors.password.message}</span>}
            </div>

            <button type="submit" className="login-button" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {responseMessage && (
            <div className={`response-message ${responseType}`}>
              {responseMessage}
            </div>
          )}

          <div className="login-footer">
            <a href="#forgot-password">Forgot password?</a>
            <span>•</span>
            <a href="#signup">Create account</a>
          </div>
        </div>

        <div className="login-side">
          <div className="login-side-content">
            <h2>EduLoan+</h2>
            <p>Your trusted partner in education financing</p>
            <ul className="login-benefits">
              <li>✓ Fast approval process</li>
              <li>✓ Competitive interest rates</li>
              <li>✓ 24/7 customer support</li>
              <li>✓ 100% online process</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

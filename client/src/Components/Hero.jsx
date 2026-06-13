import './Hero.css';
import EligibilityForm from './EligibilityForm';

function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('hero-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-badge">Study Loan Simplified</span>
          <h1>Get the Right Education Loan for Your Future</h1>
          <p className="hero-description">
            Fast approvals, smart repayment plans, and support designed for students.
            Apply now and see how much your EMI would be.
          </p>

          <div className="hero-benefits-list">
            <div className="benefit-item">
              <span>Low interest rates</span>
            </div>
            <div className="benefit-item">
              <span>Flexible repayment tenure</span>
            </div>
            <div className="benefit-item">
              <span>Quick eligibility check</span>
            </div>
          </div>

          <button className="hero-action" type="button" onClick={scrollToForm}>
            Apply Now
          </button>
        </div>

        <div className="hero-right" id="hero-form">
          <EligibilityForm />
        </div>
      </div>
    </section>
  );
}

export default Hero;

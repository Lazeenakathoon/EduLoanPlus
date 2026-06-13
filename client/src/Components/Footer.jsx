import './Footer.css';

function Footer() {
  return (
    <footer className="footer-page">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>EduLoan+</h3>
          <p>Helping students fund their education with confidence and clarity.</p>
        </div>

        <div className="footer-links-group">
          <div>
            <h4>Explore</h4>
            <a href="#benefits">Benefits</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#emi-calculator">EMI Calculator</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#faq">FAQ</a>
            <a href="/contact">Contact Us</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 EduLoan+. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;

import Hero from './Hero';
import LoanForm from './LoanForm';
import Navbar from './Navbar';
import Benefits from './Benefits';
import States from './States';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';
import './Homepage.css';

function Homepage() {

  const steps = [
    { title: 'Check Eligibility', description: 'Submit your details and let us determine your loan readiness.' },
    { title: 'Upload Documents', description: 'Share your documents securely for fast verification.' },
    { title: 'Get Loan Approval', description: 'Receive approval quickly and move forward with your studies.' },
  ];

  const faqs = [
    {
      question: 'How quickly can I get loan approval?',
      answer: 'Most applications are reviewed within 2 to 3 business days once all documents are submitted.',
    },
    {
      question: 'What documents are required?',
      answer: 'You need ID proof, admission letter, fee details, and income proof for cosigner if required.',
    },
    {
      question: 'Can I repay early without penalties?',
      answer: 'Yes, many of our partner plans allow early repayment without extra charges.',
    },
  ];

  return (
    <div className="homepage-wrapper">
      <Navbar />

      <main>
        <Hero />

        <Benefits />

        <States />

        <HowItWorks />

        <section id="emi-calculator" className="section emi-section">
          <div className="section-heading">
            <span>EMI Calculator</span>
            <h2>Estimate your monthly payment instantly</h2>
          </div>
          <div className="emi-card">
            <LoanForm />
          </div>
        </section>

        <Testimonials />

        <FAQ />
      </main>


      <Footer />
    </div>
  );
}

export default Homepage;

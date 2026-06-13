import Hero from '../Components/Hero';
import LoanForm from '../Components/LoanForm';
import Navbar from '../Components/Navbar';
import Benefits from '../Components/Benefits';
import States from '../Components/States';
import HowItWorks from '../Components/HowItWorks';
import Testimonials from '../Components/Testimonials';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
import '../Components/Homepage.css';


function HomePage() {

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

export default HomePage;

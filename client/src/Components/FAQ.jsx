import { useState } from 'react';
import './FAQ.css';

const faqItems = [
  {
    question: 'How quickly can I get loan approval?',
    answer: 'Most applications are reviewed within 2 to 3 business days once all documents are submitted.',
  },
  {
    question: 'What documents are required?',
    answer: 'You need ID proof, admission letter, fee details, and income proof for a cosigner if required.',
  },
  {
    question: 'Can I repay early without penalties?',
    answer: 'Yes, many of our partner plans allow early repayment without extra charges.',
  },
  {
    question: 'How much loan can I get?',
    answer: 'Your eligibility depends on income, course, and collateral requirements. We recommend using our eligibility checker to estimate your limit.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-page section">
      <div className="section-heading">
        <span>FAQ</span>
        <h2>Frequently asked questions</h2>
      </div>

      <div className="faq-page-list">
        {faqItems.map((item, index) => (
          <div key={item.question} className={`faq-page-item ${openIndex === index ? 'open' : ''}`}>
            <button type="button" className="faq-page-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span className="faq-page-toggle">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && <p className="faq-page-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;

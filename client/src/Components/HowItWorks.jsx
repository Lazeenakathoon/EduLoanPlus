import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      title: 'Submit your application',
      description: 'Fill in your personal and loan details to start the eligibility check process.',
    },
    {
      title: 'Upload documents',
      description: 'Share your education, identity, and income documents through our secure portal.',
    },
    {
      title: 'Get fast approval',
      description: 'Receive quick loan verification and approval so you can focus on your studies.',
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works-page section">
      <div className="section-heading">
        <span>How It Works</span>
        <h2>Your loan journey in three simple steps</h2>
      </div>

      <div className="how-it-works-grid">
        {steps.map((step, index) => (
          <div key={step.title} className="how-it-works-card">
            <div className="how-it-works-step">{index + 1}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;

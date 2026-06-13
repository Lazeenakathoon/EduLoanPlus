import './States.css';

function States() {
  const stats = [
    { value: '10K+', label: 'Happy Students' },
    { value: '95%', label: 'Approval Rate' },
    { value: '24/7', label: 'Loan Support' },
    { value: '5+', label: 'Partner Banks' },
  ];

  return (
    <section id="stats" className="states-page section">
      <div className="section-heading">
        <span>Stats Counter</span>
        <h2>Trusted by thousands of students</h2>
      </div>

      <div className="states-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="state-card">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default States;

import { FaCheckCircle, FaShieldAlt, FaRegClock, FaUniversity } from 'react-icons/fa';
import './Benefits.css';

function Benefits() {
  const benefits = [
    {
      icon: <FaCheckCircle />,
      title: 'No Collateral Required',
      description: 'Apply for education loans without pledging assets, making funding easier for students.',
    },
    {
      icon: <FaRegClock />,
      title: 'Fast Approval',
      description: 'Get your application reviewed quickly so you can focus on admissions and planning.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Low Interest Rates',
      description: 'Choose loan options designed to keep EMI payments affordable throughout your course.',
    },
    {
      icon: <FaUniversity />,
      title: 'Wide College Support',
      description: 'Our loan plans support top institutions, courses, and study abroad programs.',
    },
  ];

  return (
    <section id="benefits" className="benefits-page section">
      <div className="section-heading">
        <span>Benefits</span>
        <h2>Why students trust our education loans</h2>
      </div>

      <div className="benefits-page-grid">
        {benefits.map((item) => (
          <div key={item.title} className="benefit-page-card">
            <div className="benefit-page-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;

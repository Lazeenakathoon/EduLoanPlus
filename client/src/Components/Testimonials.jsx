import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Aisha Kumar',
      college: 'IIT Delhi',
      image: 'https://i.pravatar.cc/150?img=32',
      quote: 'The loan support was fast, transparent, and tailored to my needs. I received approval quickly and could focus on my MBA preparation.',
    },
    {
      name: 'Rohan Sen',
      college: 'NIT Trichy',
      image: 'https://i.pravatar.cc/150?img=12',
      quote: 'Clear guidance throughout the process helped me choose the best education loan. The team was supportive and very responsive.',
    },
    {
      name: 'Sneha Gupta',
      college: 'St. Xavier’s College',
      image: 'https://i.pravatar.cc/150?img=47',
      quote: 'A great experience from application to approval. The online process was easy and the EMI estimate was very accurate.',
    },
  ];

  return (
    <section id="testimonials" className="testimonials-page section">
      <div className="section-heading">
        <span>Testimonials</span>
        <h2>What our students say</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.name} className="testimonial-card">
            <div className="testimonial-header">
              <img src={item.image} alt={item.name} className="testimonial-avatar" />
              <div>
                <strong>{item.name}</strong>
                <span>{item.college}</span>
              </div>
            </div>
            <p>“{item.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

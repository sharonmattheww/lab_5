import { useState } from 'react';
import Hero from './Hero';
import Carousel from './Carousel';
import Modal from './Modal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      title: "Expert Doctors",
      description: "Our team of experienced doctors provides world-class healthcare services.",
      icon: "👨‍⚕️"
    },
    {
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services for your peace of mind.",
      icon: "🚨"
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art medical equipment for accurate diagnosis.",
      icon: "🏥"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose HealthCare+?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <Carousel />

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your appointment today and experience quality healthcare.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

// Feature Card Component (Props demonstration)
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;
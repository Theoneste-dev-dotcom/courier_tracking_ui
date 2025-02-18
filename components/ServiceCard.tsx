import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; // Icon URL or emoji
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="card-body items-center text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
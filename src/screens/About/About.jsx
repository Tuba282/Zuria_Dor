import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const { description } = useSelector((state) => state.about);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-green-600 mb-4">About Us</h1>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default About;

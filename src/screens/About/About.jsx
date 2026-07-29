import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const { description } = useSelector((state) => state.about);

  return (
    <div className="p-8">
      <p className="text-4xl uppercase text-green-600 mb-4">About Us</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default About;

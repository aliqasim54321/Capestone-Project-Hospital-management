import React from 'react';
import locationImg1 from '../assets/images/location1.jpg'; // Add your image paths here
import locationImg2 from '../assets/images/location2.jpg';
import locationImg3 from '../assets/images/location3.jpg';

const FindLocation = () => {
  const locations = [
    {
      img: locationImg1,
      name: 'Downtown Medical Center',
      address: '123 Main St, Downtown City, CA',
    },
    {
      img: locationImg2,
      name: 'Uptown Health Facility',
      address: '456 Elm St, Uptown City, CA',
    },
    {
      img: locationImg3,
      name: 'Eastside Clinic',
      address: '789 Oak St, Eastside City, CA',
    },
  ];

  return (
    <section className="pt-16 pb-16">
      <div className="container">
        <h2 className="heading text-center mb-8">Find a Location</h2>
        <p className="text-center text__para mb-12">
          Explore our locations across the city. Find the nearest hospital or clinic to you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-4">
              <img
                src={location.img}
                alt={location.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-headingColor font-bold text-xl mt-4">
                {location.name}
              </h3>
              <p className="text-textColor mt-2">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindLocation;

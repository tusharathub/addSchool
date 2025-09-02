"use client"
import React from 'react';
import { MapPinIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

const ShowSchoolsPage: React.FC = () => {
  const schools = useQuery(api.school.getSchools);

  if (schools === undefined) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <p className="text-xl text-gray-500">Loading schools...</p>
      </div>
    );
  }

  if (schools === null) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <p className="text-xl text-red-500">Failed to load schools. Please try again later.</p>
      </div>
    );
  }

  if (schools.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          All Registered Schools
        </h2>
        <p className="text-lg text-gray-500 mb-10">
          No schools have been registered yet.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center mb-4">
          All Registered Schools
        </h2>
        <p className="text-lg text-gray-500 text-center mb-10">
          Browse our list of educational institutions from all around the world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {schools.map((school) => (
            <div key={school._id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
              <img src={school.image} alt={school.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{school.name}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <MapPinIcon className="h-4 w-4 mr-2 text-indigo-500" />
                  <span>{school.address}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <DocumentTextIcon className="h-4 w-4 mr-2 text-indigo-500" />
                  <span>{school.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowSchoolsPage;

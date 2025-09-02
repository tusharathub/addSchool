"use client";

import { AcademicCapIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, DocumentTextIcon, PhotoIcon } from '@heroicons/react/24/outline';

import { useForm } from "react-hook-form";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const addSchool = useMutation(api.school.addSchools);
  const [message, setMessage] = useState("");

  const onSubmit = async (data: any) => {
    const file = data.image[0];
    const imageUrl = URL.createObjectURL(file);

    await addSchool({
      name: data.name,
      address: data.address,
      city: data.city,
      state: data.state,
      contact_number: data.contact_number,
      email_id: data.email_id,
      image: imageUrl,
      createdAt: 0,
    });

    setMessage("School added successfully!");
    reset();
  };

return (
  <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
      <div className="flex flex-col lg:flex-row">

        {/* Left Column: Form Section */}
        <div className="w-full p-10 lg:w-3/5">
          <div className="flex items-center space-x-2 text-gray-400 mb-6">
            <DocumentTextIcon className="h-6 w-6" />
            <span className="text-sm font-semibold">SCHOOL REGISTRATION</span>
          </div>
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900">
            Add a New School
          </h1>
          <p className="mb-8 text-md text-gray-500">
            Please fill out all the required fields to register the school.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">School Name</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AcademicCapIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    {...register("name", { required: true })}
                    placeholder="e.g., Green Valley High School"
                    className="block w-full rounded-md border-gray-300 pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">School name is required.</p>
                )}
              </div>
              
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="contact"
                    type="tel"
                    {...register("contact_number", { required: true })}
                    placeholder="e.g., +91 555-123-4567"
                    className="block w-full rounded-md border-gray-300 pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register("email_id", { required: true })}
                  placeholder="e.g., contact@school.edu"
                  className="block w-full rounded-md border-gray-300 pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="address"
                  {...register("address", { required: true })}
                  placeholder="Street Address"
                  className="block w-full rounded-md border-gray-300 pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="city" className="sr-only">City</label>
                <input
                  id="city"
                  {...register("city", { required: true })}
                  placeholder="City"
                  className="block w-full rounded-md border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="state" className="sr-only">State</label>
                <input
                  id="state"
                  {...register("state", { required: true })}
                  placeholder="State"
                  className="block w-full rounded-md border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">School Logo</label>
              <div className="mt-1 flex items-center space-x-2">
                <PhotoIcon className="h-5 w-5 text-gray-400" />
                <input
                  id="image"
                  type="file"
                  {...register("image", { required: true })}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:rounded-full file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold
                    file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-lg font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="flex items-center space-x-2">
                <DocumentTextIcon className="h-6 w-6" />
                <span>Submit Registration</span>
              </span>
            </button>
            
            {message && (
              <div className="mt-4 p-3 text-center text-sm font-medium rounded-md bg-green-50 text-green-700">
                {message}
              </div>
            )}
          </form>
        </div>

        {/* Right Column: Decorative Section */}
        <div className="relative hidden w-full rounded-r-3xl bg-indigo-600 p-10 lg:block lg:w-2/5">
          <div className="flex flex-col items-center justify-center h-full">
            <AcademicCapIcon className="h-28 w-28 text-indigo-400 opacity-80 mb-6" />
            <h2 className="mb-4 text-3xl font-bold text-white text-center">
              Welcome to the Platform
            </h2>
            <p className="text-lg text-indigo-200 text-center mb-8">
              Connect with a wider network of schools and educators.
            </p>
            
            <div className="space-y-4 w-full max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white font-bold">1</div>
                <span className="text-white text-md">Fill out the form</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white font-bold">2</div>
                <span className="text-white text-md">Upload school logo</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white font-bold">3</div>
                <span className="text-white text-md">Review and submit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

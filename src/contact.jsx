// Contact.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    // Your logic for handling form submission goes here
    console.log('Form submitted:', values);
    // Reset the form after submission
    resetForm();
  };

  return (
    <div className="container mx-auto py-12 text-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center text-green-600">Contact Us</h2>

      <div className="max-w-md mx-auto">
        <p className="mb-4 text-lg text-center">
          We'd love to hear from you! Feel free to reach out using the form below.
        </p>

        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
                Message:
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;

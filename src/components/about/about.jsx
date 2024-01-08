import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactSupport = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Support</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`mt-1 p-2 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            placeholder="John Doe"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`mt-1 p-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            placeholder="john@example.com"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            rows="4"
            className={`mt-1 p-2 border ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            placeholder="How can we assist you?"
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:border-primary-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactSupport;

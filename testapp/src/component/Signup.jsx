import React, { useState } from "react";
import { motion } from "framer-motion";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  const InputField = ({ label, name, type = "text" }) => (
    <div className="mb-4">
      <label className="block text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-[480px] my-8"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <InputField label="First Name" name="firstName" />
            <InputField label="Last Name" name="lastName" />
          </div>
          <InputField label="Email" name="email" type="email" />
          <InputField label="Phone Number" name="phoneNumber" type="tel" />
          <div className="mb-4">
            <label className="block text-gray-600">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              rows="3"
              required
            />
          </div>
          <InputField label="Password" name="password" type="password" />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition mt-4"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
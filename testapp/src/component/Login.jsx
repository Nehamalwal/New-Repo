import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import GoogleAuth from "./GoogleAuth";
import axios from 'axios';
import axiosInstance from '../../axiosInstance';
import { baseURL } from "../../config";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try{
      const response = await axios.post(`${baseURL}/api/login`, formData);
      console.log(response)
       
       if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token); 
        console.log("Token saved:", response.data.access_token);
    } else {
        console.log("Token not found in response");
    }
    } catch(error){
      console.error(error)
    }
   
    // console.log("Login Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>
          <div className="sign-up text-center">Don't have an acoount?<NavLink to="/signup"><span className="text-blue-900"> Register</span></NavLink></div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </motion.button>
          
        </form>
        <GoogleAuth/>
      </motion.div>
    </div>
  );
};

export default Login;

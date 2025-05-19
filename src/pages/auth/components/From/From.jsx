import React, { useState } from "react";
import { Link } from "react-router-dom";

const From = ({ type, onSubmit, user }) => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(data);
  }; // For Register, send all fields
  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">
          {type === "Login"
            ? "Login here to continue ..."
            : "Register here to continue ..."}
        </span><br/>
        {type === "Login" && `Hello , ${user?.username}`}

        <form onSubmit={handleSubmit}>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-purple-400 rounded-t-md" />
            <div className="px-8 py-6 ">
              <label className="block font-semibold"> Email address</label>
              <input
                type="text"
                name="email"
                placeholder="email "
                onChange={handleChange}
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                required
              />
              {type === "Register" && (
                <>
                  <label className="block font-semibold"> Username </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                    required
                  />
                </>
              )}
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                required
              />
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
                >
                  Submit
                </button>
                <a href="#" className="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>{" "}
          <br></br>
          {type === "Register" ? (
            <Link to="/login" style={{ color: "blue" }}>
              Go to login
            </Link>
          ) : (
            <Link to="/register" style={{ color: "blue" }}>
              {" "}
              Go to Register
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default From;

import React from "react";
import Header from "../components/Header";

const Login = () => {
  return (
    <div className="h-screen relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="p-12 absolute w-3/12 bg-black mt-56 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
        <h2 className="font-bold my-4 text-2xl text-center">Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          id=""
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id=""
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Submit
        </button>
        <p className="mt-6 text-white cursor-pointer">
          New to Netflix? Sign Up now.
        </p>
      </form>
    </div>
  );
};

export default Login;

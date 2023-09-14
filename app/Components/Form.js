"use client";
import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All fields are mandatory");
      return;
    }
    const res = await fetch("http://localhost:3000/api/PostData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  };

  return (
    <div>
      <h2 className="flex justify-center text-xl mt-3">
        Please Login to Aceess the To Do List
      </h2>
      <div>
        <input
          type="email"
          placeholder="Enter Your Email"
          className=" mt-14 relative left-[42%] border-2 border-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Your password"
          className=" relative left-[42%] border-2 border-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={HandleSubmit}
        type="submit"
        className="relative left-[47.5%] mt-7 bg-slate-900 text-white">
        LogIn
      </button>
    </div>
  );
};

export default Form;

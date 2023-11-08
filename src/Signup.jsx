import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        localStorage.setItem("flashMessage", "User created successfully!");
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
        setStatus(error.response.status);
      });
  };

  return (
    <div id="signup" className="max-w-sm mx-auto mt-20 pt-16 p-3 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold text-center mb-3">Signup</h1>
      {status ? <img src={`https://http.cat/${status}`} className="mx-auto mb-3" alt="Status" /> : null}
      <ul className="list-disc pl-4 mb-3">
        {errors.map((error) => (
          <li key={error} className="text-red-500 text-xs">
            {error}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-gray-700 font-semibold block mb-1">Name:</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <small className="block text-gray-500 text-xs">{20 - name.length} characters remaining</small>
        </div>
        <div>
          <label className="text-gray-700 font-semibold block mb-1">Email:</label>
          <input
            name="email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="text-gray-700 font-semibold block mb-1">Password:</label>
          <input
            name="password"
            type="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="text-gray-700 font-semibold block mb-1">Password confirmation:</label>
          <input
            name="password_confirmation"
            type="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

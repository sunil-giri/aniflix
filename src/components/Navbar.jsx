import React, { useEffect } from "react";
import axios from "axios";

function Navbar() {
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular")
      .then((data) => console.log("data", data));
  }, []);

  return (
    <div className="bg-slate-800 text-white flex items-center justify-between p-3">
      <h1 className="text-red-600 font-bold text-xl  ">ANIFLIX</h1>
      <div>
        <button className="p-1  rounded mr-2">Sign In</button>
        <button className="p-2 bg-red-600 text-gray-100 rounded-sm text-center">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;

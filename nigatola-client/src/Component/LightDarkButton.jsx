import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import useAuth from "../hooks/useAuth";

export default function LightDarkButton() {
  const {dark,setDark} = useAuth()
  console.log(dark);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);

  return (
    <>
      <label className=" toggle text-base-content transition-all duration-500">
        <input type="checkbox"
         checked={dark}
         onChange={(e) => setDark(e.target.checked)}
        />

        <FaMoon title="Active Light Mood"  />
        <IoSunnySharp title="Active Niga Mood"  />

        
      </label>
    </>
  );
}

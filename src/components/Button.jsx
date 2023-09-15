import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`bg-blue-gradient py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none rounded-xl ${styles}`}
  >
    Get Started
  </button>
);

export default Button;

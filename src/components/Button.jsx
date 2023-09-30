import React from "react";

function Button({ type, className, content }) {
  return (
    <button type={`${type}`} className={`${className}`}>
      {content}
    </button>
  );
}
export default Button;

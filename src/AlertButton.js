import React from "react";

export default function AlertButon({ text }) {
  const clickButton = () => alert(text);
  return (
    <div>
      <button onClick={clickButton}>{text}</button>
    </div>
  );
}

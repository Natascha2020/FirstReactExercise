import React from "react";
import AlertButton from "/src/AlertButton";

export default function ProfileCard({ title, description, age, nationality }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{age}</span>
      <span>{nationality}</span>
      <AlertButton text="Attention" />
    </div>
  );
}

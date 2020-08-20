import React from "react";
import "./styles.css";
import ProfileCard from "/src/ProfileCard";

export default function App() {
  return (
    <div className="App">
      <ProfileCard
        title="Frequent user"
        description="Every day"
        age="30"
        nationality="German"
      />
      <ProfileCard
        title="Normal user"
        description="Every week"
        age="30"
        nationality="German"
      />
      <ProfileCard
        title="No user"
        description="Every month or less"
        age="30"
        nationality="German"
      />
    </div>
  );
}

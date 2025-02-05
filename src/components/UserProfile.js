import React from "react";
import "./UserProfile.css";

export default function UserProfile({ savedProfiles }) {
  return (
    <div className="profile-container">
      <h2>Saved Profiles</h2>
      {savedProfiles.length === 0 ? <p>No profiles saved yet.</p> : (
        <ul>
          {savedProfiles.map((profile, index) => (
            <li key={index}>
              <strong>Age:</strong> {profile.age}, 
              <strong> Gender:</strong> {profile.gender}, 
              <strong> Skin Type:</strong> {profile.skinType}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
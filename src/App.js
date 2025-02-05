import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Recommendations from "./components/Recommendations";
import UserProfile from "./components/UserProfile";
import "./index.css";

export default function SkincareApp() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [skinType, setSkinType] = useState("oily");
  const [recommendations, setRecommendations] = useState({});
  const [savedProfiles, setSavedProfiles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/api/skincare?gender=${gender}&skinType=${skinType}&age=${age}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setRecommendations(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [age, gender, skinType]);

  const saveProfile = () => {
    const profile = { age, gender, skinType, recommendations };
    setSavedProfiles([...savedProfiles, profile]);
  };

  return (
    <div className="container">
      <h1 className="title">Personalized Skincare Routine</h1>
      <Form 
        age={age} 
        setAge={setAge} 
        gender={gender} 
        setGender={setGender} 
        skinType={skinType} 
        setSkinType={setSkinType} 
      />
      <button className="save-btn" onClick={saveProfile}>Save Profile</button>
      <Recommendations recommendations={recommendations} gender={gender} skinType={skinType} />
      <UserProfile savedProfiles={savedProfiles} />
    </div>
  );
}

const skinCareRoutine = {
  male: {
    oily: {
      morning: ["Oil-Control Face Wash", "Oil-Free Moisturizer", "Sunscreen SPF 50"],
      afternoon: ["Blotting Paper", "Oil-Free Hydration Mist"],
      evening: ["Gentle Cleanser", "Light Refreshing Moisturizer"],
      night: ["Charcoal Cleanser", "Retinol Serum", "Light Moisturizer"],
      preOutdoor: ["Mattifying Sunscreen SPF 50", "Oil-Control Primer"],
      postOutdoor: ["Soothing Cleanser", "Aloe Vera Gel"]
    },
    dry: {
      morning: ["Hydrating Cleanser", "Hyaluronic Acid Serum", "SPF 30 Moisturizer"],
      afternoon: ["Hydration Mist", "SPF Touch-Up Stick"],
      evening: ["Gentle Cleanser", "Nourishing Face Oil"],
      night: ["Shea Butter Night Cream", "Lip Balm"],
      preOutdoor: ["Moisturizing Sunscreen", "Hydrating Lip Balm"],
      postOutdoor: ["Aloe-Infused Cleanser", "Deep Moisture Cream"]
    },
    combination: {
      morning: ["Balanced Face Wash", "Hydrating Gel", "Sunscreen SPF 40"],
      afternoon: ["Mattifying Powder", "Soothing Face Mist"],
      evening: ["Mild Cleanser", "Vitamin C Serum"],
      night: ["Balancing Night Cream", "Lip Balm"],
      preOutdoor: ["SPF Moisturizer", "Hydrating Sunscreen"],
      postOutdoor: ["Cooling Aloe Gel", "Skin Recovery Balm"]
    }
  },
  female: {
    oily: {
      morning: ["Salicylic Acid Cleanser", "Mattifying Moisturizer", "Sunscreen SPF 50"],
      afternoon: ["Oil-Control Face Mist", "SPF Compact Powder"],
      evening: ["Gentle Foaming Cleanser", "Hydrating Toner"],
      night: ["Oil-Free Face Wash", "Niacinamide Serum", "Gel-Based Night Cream"],
      preOutdoor: ["Sunscreen SPF 50", "Matte Primer"],
      postOutdoor: ["Cooling Face Pack", "Soothing Toner"]
    },
    dry: {
      morning: ["Creamy Hydrating Cleanser", "Hyaluronic Acid Serum", "SPF 30 Moisturizer"],
      afternoon: ["Hydrating Spray", "SPF Balm"],
      evening: ["Moisturizing Cleanser", "Brightening Serum"],
      night: ["Soothing Cleanser", "Rich Night Cream", "Overnight Hydrating Mask"],
      preOutdoor: ["SPF 50 Hydrating Sunscreen", "Lip Balm"],
      postOutdoor: ["Aloe Vera Mask", "Calming Night Serum"]
    },
    combination: {
      morning: ["Balancing Cleanser", "Hydrating Serum", "SPF 40 Moisturizer"],
      afternoon: ["Skin Refreshing Mist", "Mattifying Powder"],
      evening: ["Toning Gel", "Vitamin C Booster"],
      night: ["Overnight Hydration Cream", "Lip Treatment"],
      preOutdoor: ["Protective SPF 50", "Oil-Free Base"],
      postOutdoor: ["Nourishing Face Mask", "Cooling Moisturizer"]
    }
  }
};

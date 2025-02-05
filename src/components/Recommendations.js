import React from "react";
import "./Recommendations.css";

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

export default function Recommendations({ gender, skinType }) {
  // Get the full list of products based on gender and skin type
  const fullRoutine = skinCareRoutine[gender][skinType];

  return (
    <div className="recommendations-container">
      <h2>Full Day Recommendations</h2>
      <ul>
        {Object.entries(fullRoutine).map(([time, products]) => (
          <li key={time}>
            <h3>{time.charAt(0).toUpperCase() + time.slice(1)}</h3>
            <ul>
              {Array.isArray(products) ? (
                products.map((item, index) => (
                  <li key={index}>{item}</li> // Display the product name
                ))
              ) : (
                Object.entries(products).map(([category, items]) => (
                  <li key={category}>
                    <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                    <ul>
                      {items.map((item, index) => (
                        <li key={index}>
                          {item.name} {/* Display the product name */}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

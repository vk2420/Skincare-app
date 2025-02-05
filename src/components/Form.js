import React from "react";
import "./Form.css";

export default function Form({ age, setAge, gender, setGender, skinType, setSkinType, handleSubmit }) {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label> Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </label>
      <label> Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label> Skin Type:
        <select value={skinType} onChange={(e) => setSkinType(e.target.value)}>
          <option value="oily">Oily</option>
          <option value="dry">Dry</option>
          <option value="normal">Normal</option>
          <option value="combination">Combination</option>
          <option value="sensitive">Sensitive</option>
        </select>
      </label>
      <button className="submit-btn" type="submit"> Get Recommendations </button>
    </form>
  );
}

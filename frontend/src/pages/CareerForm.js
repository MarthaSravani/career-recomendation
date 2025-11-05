import { useState } from "react";
import { getCareerRecommendation } from "../api/apiClient";

export default function CareerForm() {
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getCareerRecommendation({ skills });
      setResult(response.career); // the Flask API returns a single "career"
    } catch (error) {
      console.error("Error fetching recommendation:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Enter Your Skills</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Example: Python, Communication, Data Analysis"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        ></textarea>

        <button type="submit">Get Career Recommendation</button>
      </form>

      {result && (
        <div className="result">
          <h3>Recommended Career:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

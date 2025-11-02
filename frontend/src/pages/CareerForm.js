import { useState } from "react";
import { getCareers } from "../api";

export default function CareerForm() {
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getCareers({ skills });
    setResult(response.careers || []);
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

        <button type="submit">Get Career Recommendations</button>
      </form>

      {result.length > 0 && (
        <div className="result">
          <h3>Recommended Careers:</h3>
          <ul>
            {result.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// frontend/src/api/apiClient.js
const API_BASE_URL = "http://127.0.0.1:5000";

export async function getCareerRecommendation(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/recommend`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Server error");
    return await res.json();
  } catch (error) {
    console.error("Error fetching career recommendation:", error);
    return { career: "Error connecting to backend" };
  }
}

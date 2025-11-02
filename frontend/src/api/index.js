const API_BASE = "http://127.0.0.1:5000"; // backend URL

export async function getCareers(data) {
  const res = await fetch(`${API_BASE}/api/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function getSkills() {
  const res = await fetch(`${API_BASE}/skills`);
  return res.json();
}

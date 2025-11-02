from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/recommend", methods=["POST"])
def recommend_career():
    data = request.get_json()
    skills = data.get("skills")

    # Dummy logic (later we will improve AI recommendation)
    if "programming" in skills.lower():
        career = "Software Developer"
    elif "communication" in skills.lower():
        career = "HR / Management"
    else:
        career = "Data Analyst"

    return jsonify({"career": career})

@app.route("/skills", methods=["GET"])
def get_skills():
    skills = ["programming", "communication", "leadership", "data analysis", "design"]
    return jsonify({"skills": skills})

if __name__ == "__main__":
    app.run(debug=True)

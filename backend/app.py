# backend/app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # toestaan dat de browser (frontend) fetch verzoeken mag doen

# Eenvoudige in-memory "database"
rooms = [
    {"id": 1, "stad": "Amsterdam", "prijs": 650},
    {"id": 2, "stad": "Rotterdam",  "prijs": 550},
    {"id": 3, "stad": "Utrecht",    "prijs": 600}
]

@app.route("/api/rooms", methods=["GET"])
def get_rooms():
    # Geeft de lijst kamers terug als JSON
    return jsonify(rooms)

@app.route("/api/rooms", methods=["POST"])
def add_room():
    # Verwacht JSON body zoals {"stad":"Eindhoven","prijs":500}
    data = request.get_json()
    if not data:
        return jsonify({"error": "Geen JSON ontvangen"}), 400

    stad = data.get("stad")
    prijs = data.get("prijs")
    # simpele validatie
    if not stad or not isinstance(prijs, (int, float)):
        return jsonify({"error": "Ongeldige velden"}), 400

    new_id = max((r["id"] for r in rooms), default=0) + 1
    new_room = {"id": new_id, "stad": stad, "prijs": prijs}
    rooms.append(new_room)
    return jsonify(new_room), 201

if __name__ == "__main__":
    # Start de server op http://127.0.0.1:5000
    app.run(debug=True)

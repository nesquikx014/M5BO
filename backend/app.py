from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="frontend", static_url_path="")

@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/kamer.html")
def serve_kamer():
    return send_from_directory(app.static_folder, "kamer.html")

@app.route("/<path:path>")
def serve_static(path):
    file_path = os.path.join(app.static_folder, path)
    if os.path.isfile(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        return "Bestand niet gevonden", 404

if __name__ == "__main__":
    app.run(debug=True)

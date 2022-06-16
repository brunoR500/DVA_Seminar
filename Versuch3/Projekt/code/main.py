import os
from flask import Flask, url_for
from flask import request

host = "localhost"
port = 8001
app = Flask(__name__)

@app.route("/")
def index():
    return f'''
            <html>
                <body>
                    <form action="{ url_for('calculate') }" method="post">Rechnung Eingabe:
                        <input type="text" name="calculate" />
                        <input type="submit" value="Berechne" />
                    </form>
                </body>
            </html>
            '''

@app.route("/calculate", methods=["POST"])
def calculate():
    return f"Das Ergebnis ist: {eval(request.form['calculate'])}"

@app.route("/info")
def os_info():
    return os.name

if __name__ == "__main__":
    app.run(host=host, port=port)

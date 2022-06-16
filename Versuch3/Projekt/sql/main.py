from flask import Flask, url_for
from flask import request
from db import Database

host = "localhost"
port = 8002
app = Flask(__name__)
database = Database()

@app.route("/")
def index():
    return f'''
            <html>
                <body>
                    <form action="{ url_for('login') }" method="post">
                        <label for="username">Username:<label><br>
                        <input type="text" name="username" /><br>
                        <label for="password">Password:<label><br>
                        <input type="text" name="password" /><br>
                        <input type="submit" value="Login" />
                    </form>
                </body>
            </html>
            '''

@app.route("/login", methods=["POST"])
def login():
    return f"{database.check_user(request.form['username'], request.form['password'])}"

#@app.route("/login", methods=["POST"])
#def login():
#    return f"{database.check_user_safe(request.form['username'], request.form['password'])}"

if __name__ == "__main__":
    app.run(host=host, port=port)
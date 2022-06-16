import sqlite3

class Database:
    def __init__(self):
        self.db = sqlite3.connect(':memory:', check_same_thread=False)
        self.db.cursor().execute("CREATE TABLE users (username text, password text)")
        self.db.cursor().execute("INSERT INTO users (username, password) VALUES (?, ?)", ("admin", "test"))
        self.db.commit()

    def check_user(self, username, password):
        return self.db.cursor().execute(f"""
                                    SELECT username, password
                                    FROM users 
                                    WHERE username = '{username}' 
                                    AND password = '{password}'
                                    """) .fetchone()
    
    def check_user_safe(self, username, password):
        return self.db.cursor().execute(f"""
                                    SELECT username, password
                                    FROM users 
                                    WHERE username = ?
                                    AND password = ?
                                    """,
                                    (username, password)).fetchone()
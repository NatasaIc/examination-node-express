import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('database.db')

const createQuery =
`
    CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        hashedPassword TEXT,
        CONSTRAINT uniqueUsername UNIQUE(username)
    )
`;
db.run(createQuery);

export const registerUser = (username: string, hashedPassword:string, callback:any) => {
    const query = `
        INSERT INTO accounts (username, hashedPassword)
        VALUES (?, ?)
    `;
    const values = [
        username,
        hashedPassword
    ];
    db.run(query, values, callback);
}

export const getAccountByUsername = function (username:string, callback:any) {
    const query = `
        SELECT * FROM accounts WHERE username = ?
    `;
    const values = [username];
    db.get(query, values, callback);
}
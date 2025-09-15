const db = require('../db');

const findByUsername = async (username) => {
    const { rows } = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    return rows[0];
};

const createUser = async (username, hashedPassword) => {
    const { rows } = await db.query(
        'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, created_at',
        [username, hashedPassword]
    );
    return rows[0];
};

module.exports = {
    findByUsername,
    createUser,
};
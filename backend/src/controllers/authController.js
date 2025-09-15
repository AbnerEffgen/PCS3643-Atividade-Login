const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findByUsername(username);
        if (existingUser) {
            return res.status(400).json({ message: "Usuário já existe." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.createUser(username, hashedPassword);

        res.status(201).json({ message: "Usuário registrado com sucesso!", user: { id: newUser.id, username: newUser.username } });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findByUsername(username);
        if (!user) {
            return res.status(400).json({ message: "Credenciais inválidas." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Credenciais inválidas." });
        }

        res.status(200).json({ message: "Login bem-sucedido!" });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};
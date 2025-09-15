import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
            } else {
                setError(data.message || 'Falha no registro.');
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor.');
        }
    };

    return (
        <div className="form-container">
            <div className="form-box">
                <h2>Registrar</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome de usuário:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Registrar</button>
                </form>
                {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
                {success && <p style={{ color: 'green', marginTop: '1rem' }}>Registro bem-sucedido! Você pode agora fazer login.</p>}
                <div className="navigation-link">
                    <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuccessMessage from './SucessMessage';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('/users/login', {
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
                setError(data.message || 'Falha no login.');
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor.');
        }
    };

    if (success) {
        return <SuccessMessage />;
    }

    return (
        <div className="form-container">
            <div className="form-box">
                <h2>Login</h2>
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
                    <button type="submit" className="submit-btn">Login</button>
                </form>
                {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
                <div className="navigation-link">
                    <p>Não tem uma conta? <Link to="/register">Registre-se</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
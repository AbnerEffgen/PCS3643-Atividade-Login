import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegistrationPage} />
                    <Route path="/" exact>
                        <h1>Boas Vindas!</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
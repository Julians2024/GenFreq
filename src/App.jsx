// src/App.jsx
import React from 'react';
import SoundGenerator from './components/SoundGenerator';
import PowerSwitch from './components/PowerSwitch';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
              
                <SoundGenerator />
            </header>
        </div>
    );
}

export default App;


import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/scss/main.css'
import App from './App.jsx'
import { Demo } from './Demo.jsx'
import { ComponentLibrary } from './ComponentShowcase.jsx'
import { Dashboard } from './Dashboard.jsx'

const MainApp = () => {
  const [view, setView] = React.useState('demo');

  return (
    <>
      {/* Floating Switcher UI */}
      <div style={{ 
        position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999,
        display: 'flex', gap: '10px', background: 'rgba(0,0,0,0.8)', 
        padding: '10px', borderRadius: '50px', border: '1px solid #444' 
      }}>
        <button onClick={() => setView('demo')} style={btnStyle}>Landing</button>
        <button onClick={() => setView('dash')} style={btnStyle}>Dash</button>
        <button onClick={() => setView('lib')} style={btnStyle}>Library</button>
      </div>

      {/* Conditional Rendering */}
      {view === 'demo' && <Demo />}
      {view === 'dash' && <Dashboard />}
      {view === 'lib' && <ComponentLibrary />}
    </>
  );
};

const btnStyle = { 
  background: '#333', color: 'white', border: 'none', 
  padding: '5px 15px', borderRadius: '20px', cursor: 'pointer',
  fontSize: '12px', fontWeight: 'bold'
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
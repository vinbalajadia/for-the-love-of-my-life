import React, { useState } from 'react';
import './App.css';
import LoveNotes from './components/LoveNotes';
import OurPictures from './components/OurPictures';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [audioStarted, setAudioStarted] = useState(false);

  const handleViewChange = (view) => {
    setCurrentView(view);
    if (!audioStarted) {
      const audio = document.getElementById('background-music');
      if (audio) {
        audio.play().catch(e => console.log('Audio autoplay prevented'));
      }
      setAudioStarted(true);
    }
  };

  const renderLandingPage = () => (
    <div className="landing-page">
      <h1 className="main-title">♡ Hello Baby ♡</h1>
      <p className="subtitle">What do you need today?</p>
      
      <div className="button-container">
        <button 
          onClick={() => handleViewChange('lovenotes')} 
          className="landing-button"
        >
          ♡ Click Me If Need Ng Lambing ♡
        </button>
        
        <button 
          onClick={() => handleViewChange('pictures')} 
          className="landing-button"
        >
          ♡ Click Me If Namimiss Mo Ako ♡
        </button>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    switch(currentView) {
      case 'lovenotes':
        return (
          <div>
            <button 
              onClick={() => setCurrentView('landing')} 
              className="back-button"
            >
              ← Back
            </button>
            <h1 className="page-title">♡ Gusto mo ng lambing? ♡</h1>
            <p className="page-subtitle">Click mo yung button hehe.</p>
            <LoveNotes />
          </div>
        );
      case 'pictures':
        return (
          <div>
            <button 
              onClick={() => setCurrentView('landing')} 
              className="back-button"
            >
              ← Back
            </button>
            <h1 className="page-title">♡ Our Goofy and Lovely Pictures Together ♡</h1>
            <OurPictures />
          </div>
        );
      default:
        return renderLandingPage();
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
      <audio 
        id="background-music"
        src="/music.mp3" 
        loop 
        controls 
        style={{display: 'none'}}
      />
    </div>
  );
}

export default App;
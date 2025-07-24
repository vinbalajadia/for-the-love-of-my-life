import React, { useState } from 'react';

const notes = [
    "You did well today, baby! ♡",
    "You are so strong and independent ♡",
    "Ganito talaga pag baddie ♡",
    "You are so pretty always ♡",
    "I love you so much! ♡",
    "You make my world brighter ♡",
    "You're absolutely amazing! ♡",
    "My beautiful baby ♡",
    "You're my favorite person ♡",
    "You deserve all the love in the world ♡"
];

const LoveNotes = () => {
    const [note, setNote] = useState("");

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * notes.length);
        setNote(notes[randomIndex]);
    };

    return (
        <div className="love-notes-container"> 
            <button onClick={handleClick} className="love-notes-button">
                ♡ CLICK ME ♡
            </button>
            {note && <p className="love-note-text">{note}</p>}
        </div>
    );
};

export default LoveNotes;
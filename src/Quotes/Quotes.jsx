import React, { useState, useEffect } from 'react';
import './Quotes.css';

const quotes = [
    "Good food is worth getting diaherrea for.",
    "White rice matters.",
    "You only live once… Lick the bowl",
    "Age and glasses of wine should never be counted.",
    "There’s no ‘we’ in fries.",
    "Spice is the only flavour you taste twice",
    "No garlic? No ginger? The dish is dead on arrival!!",
    "Never ask a women her age and an drinker how many beer he has"

];

const Quotes = () => {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
        }, 40000); // Change quote every 20 seconds, matching the CSS animation duration

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="marquee-container">
            <p className="marquee-text">{quotes[currentQuote]}</p>
        </div>
    );
};


export default Quotes;

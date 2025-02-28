"use client";
import { useState } from "react";
import "./App.css";

export default function Page() {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "What if I asked suuupppeerrrrr nicely?",
            "Pretty please",
            "but babe :'((",
            "How about an excellent hot chocolate?",
            "PLEASE SUNSHINEEEEE",
            "I am going to die",
            "Aight I'm dead",
            "ok ur talking to Aditi's ghost",
            "Haan bolde na yaar",
            "please babe",
            ":((((",
            "PRETTY PLEASE",
            "kyun nahiiiiiiiii",
            "Chal abhi haan bolde please",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="valentine-container">
            {yesPressed ? (
                <div className="success-container">
                    <div className="image-container">
                        <img
                            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                            alt="Bear kiss"
                        />
                    </div>
                    <div className="success-message">
                        YAASSS LESSGOOOOO, I LOVE YOU :D
                    </div>
                </div>
            ) : (
                <>
                    <div className="image-container">
                        <img
                            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                            alt="Bear with roses"
                        />
                    </div>
                    <h1 className="title">Will you be my Valentine?</h1>
                    <div className="button-container">
                        <button
                            className="yes-button"
                            style={{ fontSize: `${yesButtonSize}px` }}
                            onClick={() => setYesPressed(true)}
                        >
                            Yes
                        </button>
                        <button
                            className="no-button"
                            onClick={handleNoClick}
                        >
                            {noCount === 0 ? "No" : getNoButtonText()}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
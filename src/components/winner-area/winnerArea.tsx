import React from 'react';
import './index.css'

interface WinnerAreaProps {
    winner: string
}

const WinnerArea: React.FC<WinnerAreaProps> = ({winner}) => {
    return (
        <div className="winner__area">
            <h1>{winner} won!</h1>
            <p>{winner} at the and of the game has even number of matches</p>
            <h3>Congratulations!!!!</h3>
            <button onClick={() => window.location.reload()}>RESTART GAME</button>
        </div>
    );
};

export default WinnerArea;
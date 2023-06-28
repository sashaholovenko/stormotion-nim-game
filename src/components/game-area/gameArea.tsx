import React, {useEffect, useState} from 'react';
import "./index.css"
import matchers from "@testing-library/jest-dom/matchers";
import PlayerBar from "../player-bar/playerBar";

interface GameAreaProps {
    totalMatches: number
    winner: string
    userTurn: boolean
    userMove: (count: number) => void
    computerMove: () => void
}

export const GameArea: React.FC<GameAreaProps> = ({totalMatches, userTurn, userMove, computerMove, winner}) => {

    const disableButton = (num: number) => {
        if ( userTurn ) {
            if ( totalMatches < num) {
                return true
            } else return false
        } else {
            return true
        }
    }

        return (
        <div className="game__area__zone">
            <h1>Game of NIM</h1>
            <h2>{totalMatches}</h2>
            <div className='game__area__buttons'>
                <button className='btn' disabled={ disableButton(1) }
                onClick={ userTurn && totalMatches >= 1 ? () => userMove(1) : () => computerMove()}
                >-1</button>
                <button className='btn' disabled={ disableButton(2) }
                onClick={ userTurn && totalMatches >= 2 ? () => userMove(2) : () => computerMove()}
                >-2</button>
                <button className='btn' disabled={disableButton(3)}
                onClick={ userTurn && totalMatches >= 3 ? () => userMove(3) : () => computerMove()}
                >-3</button>
            </div>
            { !userTurn ? <h3>Computer is thinking...</h3> : null}
            <h3>Matches left: {totalMatches}</h3>
        </div>
    );
};
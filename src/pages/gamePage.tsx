import React, {useEffect, useState} from 'react';
import {GameArea} from "../components/game-area/gameArea";
import Header from "../components/header/header";
import OptionArea from "../components/option-area/optionArea";
import WinnerArea from "../components/winner-area/winnerArea";


export const GamePage = () => {

    const [totalMatches, setMatches] = useState(25)
    const [ userCount, setUserCount] = useState(0)
    const [ AIcount, setAIcount ] = useState(0)
    const [ userTurn, setUserTurn ] = useState(true)
    const [ winner, setWinner ] = useState('')
    const [ section, setSection ] = useState('Game')


    useEffect(() => {
        computerMove()
        if (totalMatches === 0) {
            if ( userCount % 2 === 0) {
                setTimeout(() => {
                    setWinner( 'USER')
                    setSection('Winner')
                }, 500)
            } else {
                setTimeout(() => {
                    setWinner('AI')
                    setSection('Winner')
                }, 500)
            }
        }
    }, [userTurn])


    const userMove = ( count: number ) => {
        setMatches( totalMatches - count)
        setUserCount( userCount + count);
        setUserTurn(!userTurn)
    }


    const computerMove = () => {
        const setComputerMove = ( value: number ) => {
            setMatches(totalMatches - value)
            setAIcount(AIcount + value);
            setUserTurn(true)
        }
        if (totalMatches === 0) return
        if ( !userTurn ) {
            setTimeout(() => {

                if (totalMatches % 2 === 0) {
                    setComputerMove(1)
                } else {
                    if ((totalMatches - 1) % 4 === 0) {
                        setComputerMove(1)
                    } else if ((totalMatches - 2) % 4 === 0) {
                        setComputerMove(2)
                    } else if ( totalMatches === 3) {
                        if (AIcount % 2 === 0 ) {
                            setComputerMove(2)
                        } else {
                            setComputerMove(3)
                        }
                    } else if ( totalMatches === 1 && AIcount % 2 === 1) {
                        setComputerMove(1)
                    } else {
                        setComputerMove(3)
                    }
                }}, 500)
        }

    }

    return (
        <div >
            <Header userCount={userCount} AIcount={AIcount}/>

            { section === "Option"
                    ?  <OptionArea /> : section === 'Game'
                    ?  <GameArea computerMove={computerMove} userMove={userMove} userTurn={userTurn} totalMatches={totalMatches} winner={winner}/> : section === "Winner"
                    ? <WinnerArea winner={winner}/> : null
            }

        </div>
    );
};


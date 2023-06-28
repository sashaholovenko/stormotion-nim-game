import React from 'react';
import PlayerBar from "../player-bar/playerBar";
import './index.css'

interface HeaderProps {
    userCount: number
    AIcount: number
}

const Header: React.FC<HeaderProps> = ({userCount, AIcount}) => {
    return (
        <div>
            <div className='header'>
                <PlayerBar name="Weak Human" count={userCount}/>
                <PlayerBar name="Strong AI" count={AIcount}/>
            </div>
        </div>
    );
};

export default Header;
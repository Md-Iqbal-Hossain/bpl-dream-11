import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers';

const Players = ({playersPromise}) => {
    const players = use(playersPromise);
    console.log(players);
    
    return (
        <div className='container mx-auto'>
            PLayers: {players.length}

            <AvailablePlayers players={players}/>
        </div>
    );
};

export default Players;
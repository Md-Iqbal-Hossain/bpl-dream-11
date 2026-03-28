import React from 'react';
import Card from '../../ui/Card';

const AvailablePlayers = ({ players, setCoin, coin }) => {
    console.log(players, 'players');

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    players.map(player => {
                        

                        return (
                            <Card player={player} setCoin={setCoin} coin={coin}/>
                        )
                    })
                }
            </div>


        </div>
    );
};

export default AvailablePlayers;
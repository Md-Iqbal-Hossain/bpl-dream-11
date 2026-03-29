import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, coin }) => {
    console.log(selectedPlayers, 'selectedPlayers');

    const handleDeleteSelectedPlayer = (player) => {
        console.log(selectedPlayers);
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName);
        console.log(filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }

    return (
        <div>
            <div className='space-y-5'>
                {
                    selectedPlayers.map((player, index) => {
                        return <div key={index} className='flex items-center gap-6 justify-between p-10 rounded-2xl border'>
                            <div className='flex items-center gap-6'>
                                <img src={player.playerImg} alt={player.playerName} className='h-[75px] w-auto rounded-md' />
                                <div>
                                    <h2 className='flex items-center gap-2 font-semibold text-xl'><FaRegUser />{player.playerName}</h2>
                                    <p>{player.playerType}</p>
                                </div>
                            </div>
                            <button className='btn text-red-500' onClick={() => handleDeleteSelectedPlayer(player)}><MdDelete /></button>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;
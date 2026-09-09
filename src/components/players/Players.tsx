import React, { use, useState, type Dispatch, type SetStateAction } from 'react';
import AvailablePlayers from './AvailablePlayers';
import type { Iplayer } from '../../types/player';
import SelectedPlayers from './SelectedPlayers';

interface PlayersProps {
    playersPromise: Promise<Iplayer[]>,
    coin : number,
    setCoin : Dispatch<SetStateAction<number>>
}


const Players = ({ playersPromise, coin , setCoin }: PlayersProps) => {
    console.log(playersPromise);
    const players = use(playersPromise);
    const [buttonType , setButtonType] = useState("Available")
    const handleUpdateBUttonType = (type : string) => {
        setButtonType(type);
    }
    const [selectedPlayers , setSelectedPlayers] = useState<Iplayer[]>([]);

    return (

        <div className='container mx-auto'>
            <div className='flex justify-between gap-4'>
                <h2>{buttonType == "Available" ? "Available" : "Selected"}</h2>
                <div>
                <button onClick={() => handleUpdateBUttonType("Available")} className={`btn btn-soft ${buttonType == "Available"? "btn-success" : ""}`}>Available</button>
                <button onClick={() => handleUpdateBUttonType("Selected")} className={`btn btn-soft ${buttonType == "Selected"? "btn-success" : ""}`}>Selected</button>
                </div>
            </div>
            {buttonType == "Available"? <AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers}  setSelectedPlayers={setSelectedPlayers}/> : <SelectedPlayers coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers}  setSelectedPlayers={setSelectedPlayers}/>}
        </div>
    );
};

export default Players;
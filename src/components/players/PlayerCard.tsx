import React, { useState, type Dispatch, type SetStateAction } from 'react';
import { FaUser } from 'react-icons/fa';
import type { Iplayer } from '../../types/player';
import { toast } from 'react-toastify';


interface IPlayerCardProps {
    player: Iplayer,
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers : Iplayer[],
    setSelectedPlayers : Dispatch<SetStateAction<Iplayer[]>>

}



const PlayerCard = ({ player, coin, setCoin , selectedPlayers , setSelectedPlayers}: IPlayerCardProps) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleSelectPlayer = () => {
        setIsSelected(true);
        const newCoin = coin - player.price;
        if(newCoin>=0){
            
            setCoin(newCoin);
            toast(`${player.playerName} is purchased successfully`)
        }else{
            toast("Not enough coin");
        }

        setSelectedPlayers([...selectedPlayers, player])

    }

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={player.playerImg}
                    alt="Shoes" />
            </figure>
            <div className="card-body">

                <h2 className="card-title"><FaUser />{player.playerName}</h2>
                <div className='flex justify-between gap-4'>
                    <p>{player.origin}</p>
                    <button className='btn'>{player.playerType}</button>
                </div>
                <div className="divider" />

                <h2 className='font-semibold'>Rating</h2>

                <div className='flex justify-between gap-4'>
                    <p>{player.battingStyle}</p>
                    <button className='btn'>{player.bowlingStyle}</button>
                </div>


                <div className="card-actions justify-between items-center">
                    <h2>{player.price}</h2>
                    <button onClick={() => handleSelectPlayer()} className="btn" disabled={isSelected === true ? true : false}>{isSelected === true ? "Selected" : "Choose"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
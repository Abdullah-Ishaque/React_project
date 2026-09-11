import { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../types/player';
import { TbTrash } from 'react-icons/tb';

interface ISelectedPlayerProps {
    selectedPlayers: Iplayer[],
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>,
    coin : number,
    setCoin : Dispatch<SetStateAction<number>>
}

const SelectedPlayers = ({coin, setCoin, selectedPlayers, setSelectedPlayers }: ISelectedPlayerProps) => {

    const handleRemovePlayer = (player : Iplayer) => {
        const restPlayers = selectedPlayers.filter((selectedPlayer) => {
            return selectedPlayer.playerName != player.playerName
        })

        setSelectedPlayers(restPlayers);

        const newCoinUp = coin + player.price;
        setCoin(newCoinUp);
    }



    return (
        <div className='grid grid-cols-1 gap-6'>
            {selectedPlayers.map((player : Iplayer) => {
                return <div className='flex justify-between gap-4'>
                    <div className='flex gap-2'>
                        <img src={player.playerImg} alt="" />
                        <div>
                            <h2>{player.playerName}</h2>
                            <h2>{player.playerType}</h2>
                        </div>
                    </div>
                    <span className='text-red-500 font-bold' onClick={() => handleRemovePlayer(player)}>

                        <TbTrash/>
                    </span>
                </div>
            })}
        </div>
    );
};

export default SelectedPlayers;
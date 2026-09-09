import Nav from "./components/Nav"

import Banner from "./components/Banner"
import Players from "./components/players/Players";
import { Suspense, useState } from "react";
import type { Iplayer } from "./types/player";

const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();

  return data;
}




function App() {
  // console.log(playersPromise);
  // const playersPromise = playersFetch();
  const [playersPromise] = useState(() => playersFetch())

  const [coin , setCoin] = useState(5000);
  return (
    <>
      <Nav coin={coin}/>
      <Banner/>
      <Suspense fallback={<li>Loading........</li>}>
      <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}/>
      </Suspense>
    </>
  )
}

export default App

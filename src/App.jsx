
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Players from './components/homepage/players/Players';
import NavBar from './components/navbar/NavBar'
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async() => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);
  return (
    <>
      <NavBar coin = {coin}/>
      <Banner/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise = {playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
      {/* react toastify */}
      <ToastContainer />
    </>
  )
}

export default App

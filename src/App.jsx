
import { Suspense } from 'react';
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Players from './components/homepage/players/Players';
import NavBar from './components/navbar/NavBar'

const fetchPlayer = async() => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  return (
    <>
      <NavBar/>
      <Banner/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise = {playersPromise}></Players>
      </Suspense>
      
    </>
  )
}

export default App

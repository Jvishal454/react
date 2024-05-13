import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Sidenav from './Components/Sidenav/Sidenav';
import MenuAppbar from './Components/Appbar/Appbar';

function App() {

  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(prevState => !prevState);
  };

  return (
    <div className='app-container'>
      <MenuAppbar toggleSidenav={toggleSidenav}/>
      <div className='app-center'>
      <div className={isSidenavOpen ? "app-open-sidenav" : "app-closed-sidenav"}>
          <Sidenav />
        </div>
        
        <div className='router-outlet'>
          {/* <button onClick={() => toggleSidenav()}>btn</button> */}
            <Routes >
              <Route exact path="/home" element={<Home />} />
            </Routes>
        </div>
      </div>
    </div>
  )
}

export default App

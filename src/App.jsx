import { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import UserContext from './UserContext'

import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'

import logo from '/favicon.svg'
import icon_1 from './assets/images/icon_1.png'
import icon_2 from './assets/images/icon_2.png'
import icon_3 from './assets/images/icon_3.png'
import icon_4 from './assets/images/icon_4.png'

function App() {
  // TODO - Bool variable for API

  const [UserID, setUserID] = useState(12)

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ UserID, setUserID }}>
        <header>
          <div className='logo'>
            <img src={logo} alt='SportSee' />
            <span>SportSee</span>
          </div>
          <nav>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Accueil
            </NavLink>
            <NavLink to='/profile'>Profil</NavLink>
            <NavLink to='/settings'>Réglages</NavLink>
            <NavLink to='/community'>Communauté</NavLink>
          </nav>
        </header>

        <div id='content'>
          <div id='sidebar'>
            <nav>
              <img src={icon_1} alt='Sport #1' />
              <img src={icon_2} alt='Sport #2' />
              <img src={icon_3} alt='Sport #3' />
              <img src={icon_4} alt='Sport #4' />
            </nav>
            <span className='copyright'>Copyright, SportSee 2024</span>
          </div>
          <main>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/profile' element={<Dashboard />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/community' element={<Dashboard />} />

              {/* TODO - Error page for API calls */}
            </Routes>
          </main>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App

import React from 'react';
import { Route, Routes,} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsСontainer';
import FriendsOnlineContainer from './components/Friends/FriendsOnlineContainer';
import Users from './components/Users/Users';

function App(props) {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <aside className='aside'>
          <Navbar />
          <FriendsOnlineContainer /> 
        </aside>
        
        <div className="content">
          <Routes>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/dialogs/*' element={<DialogsContainer/>} />
            <Route path='/news' element={<News /> } />
            <Route path='/music' element={<Music />} />
            <Route path='/users' element={<Users />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>  
      </div>
    
  );
}

export default App;

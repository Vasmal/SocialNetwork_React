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

function App(props) {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <aside className='aside'>
          <Navbar />
          <FriendsOnlineContainer store={props.store} /> 
        </aside>
        
        <div className="content">
          <Routes>
            <Route path='/profile' element={<Profile store={props.store}/>} />
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>} />
            <Route path='/news' element={<News /> } />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>  
      </div>
    
  );
}

export default App;

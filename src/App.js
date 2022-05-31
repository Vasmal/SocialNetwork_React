import React from 'react';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import FriendsOnline from './components/Friends/FriendsOnline';
import DialogsContainer from './components/Dialogs/DialogsСontainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <aside className='aside'>
          <Navbar />
          <FriendsOnline online={props.state.friends.online} /> 
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
    </BrowserRouter>
  );
}

export default App;

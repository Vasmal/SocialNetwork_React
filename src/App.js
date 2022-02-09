import React from 'react';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Settings from './components/Settings/Settings';


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
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

import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

function Navbar() {
  const setActive = ({isActive}) => isActive ? `${classes.item} ${classes.active}` : classes.item;

return (
    <nav className={classes.nav}>
      <div>
        <NavLink to='/profile' className={setActive}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" className={setActive}>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={setActive}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={setActive}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
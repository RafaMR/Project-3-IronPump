import React, { useContext, useState } from 'react';
import AuthenticationContext from '../context/authentication';
import { signOutUser } from './../services/authentication';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Newnav.scss';
import Dropdown from './Dropdown';

const Newnav = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser().then(() => {
      setUser(null);
      navigate('/');
    });
  };

  return (
    <>
      <nav className="newnav">
        <Link to="/" className="newnav-home">
          IRONPUMP
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        {(user && (
          <>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {/* Aquí iría Services, una página donde salgan todos los servicios ofrecidos por IronPump */}
              <li
                className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {dropdown && <Dropdown />}
              </li>
              <li className="nav-item">
                <Link
                  to={`/profile/${user._id}`}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {user.name}`s Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/workout`}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Create a Workout
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/workout/all`}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Browse Workouts
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
            <button className="btn" onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        )) || (
          <>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to="/log-in"
                  onClick={closeMobileMenu}
                >
                  Log in
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to="/register"
                  onClick={closeMobileMenu}
                >
                  Register
                </Link>
              </li>
            </ul>
          </>
        )}
      </nav>
    </>
  );
};

export default Newnav;

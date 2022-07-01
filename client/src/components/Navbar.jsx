import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import AuthenticationContext from '../context/authentication';
import { signOutUser } from './../services/authentication';

const Navbar = () => {
  const { user, setUser } = useContext(AuthenticationContext);

  const handleSignOut = () => {
    signOutUser().then(() => {
      setUser(null);
    });
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {(user && (
        <>
          <span>Welcome {user.name}</span>
          <button onClick={handleSignOut}>Sign Out</button>
          <Link className="btn" to={`/profile/${user._id}`}>
            {user.name}Profile
          </Link>
          <Link to={`/profile/search`}>Search for an user Profile</Link>
        </>
      )) || (
        <>
          <Link to="/log-in">Log In</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;

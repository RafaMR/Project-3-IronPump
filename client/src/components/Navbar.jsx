import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import AuthenticationContext from '../context/authentication';
import { signOutUser } from './../services/authentication';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, setUser } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser().then(() => {
      setUser(null);
      navigate('/');
    });
  };

  return (
    <nav>
      <Link className="navbtn" to="/">
        Home
      </Link>
      {(user && (
        <>
          {/* <span>Welcome {user.name}</span> */}
          <Link className="navbtn" to={`/profile/${user._id}`}>
            {user.name}´s Profile
          </Link>
          <Link className="navbtn" to={`/workout`}>
            Create a Workout
          </Link>
          <Link className="navbtn" to={`/workout/all`}>
            Browse Workouts
          </Link>
          {/* <Link className="navbtn" to={`/profile/search`}>
            Search for an user Profile
          </Link> */}
          <button className="navbtn" onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      )) || (
        <>
          <Link className="navbtn" to="/log-in">
            Log In
          </Link>
          <Link className="navbtn" to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;

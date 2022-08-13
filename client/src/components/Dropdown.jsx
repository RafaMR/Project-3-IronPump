import React, { useContext, useState } from 'react';
import AuthenticationContext from '../context/authentication';
import { signOutUser } from './../services/authentication';
import { useNavigate } from 'react-router-dom';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Dropdown;

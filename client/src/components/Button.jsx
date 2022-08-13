import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to="/log-in">
      <button className="btn">Register</button>
    </Link>
  );
};

export default Button;

import React from 'react';
import { NavLink } from 'react-router-dom';

import Img from './styles';
import LogoImage from 'assets/images/logo.svg';

export default function Logotype() {
  return (
    <NavLink to="/home">
      <Img src={LogoImage} alt="Rocketshoes Logotype" />
    </NavLink>
  );
}

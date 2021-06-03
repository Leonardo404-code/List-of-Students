import React from 'react';

import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { Nav } from './styled';

import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';

import history from '../../services/history';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  //Função que aciona o logout do usuário
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <p>Home</p>
      </Link>

      <Link to="/register">
        <p>Sing In</p>
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <p>Sing Up</p>
        </Link>
      )}
    </Nav>
  );
}

import React from 'react';
/* importação dos icones */
import {FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff} from 'react-icons/fa'
/* Importação de uma função que leva facilemente a outras rotas */
import {Link} from 'react-router-dom';
/* Importando o estilo do componente */
import {Nav} from './styled'
/* Funções que irão ajudar com redux */
import {useSelector, useDispatch} from 'react-redux';
/* importando ações */
import * as actions from '../../store/modules/auth/actions';

import history from '../../services/history';

export default function Header(){

  //Selecionando o estado do isLoggedIn
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  //Colocando o disparador de ações numa constante
  const dispatch = useDispatch();

  //Função que aciona o logout do usuário
  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  }

  return (
  <Nav>
    {/* Links que levam até a home, register e login */}
    <Link to="/">
      <FaHome size={24}/>
    </Link>

    <Link to="/register">
      <FaUserAlt size={24}/>
    </Link>
    {/* Condicional em JS que verifica se está logado em todas as pags pela aquela função*/}
    {isLoggedIn ? (
      <Link onClick={handleLogout} to="/logout">
      <FaPowerOff size={24}/>
    </Link>
    ) : (
    <Link to="/login">
      <FaSignInAlt size={24}/>
    </Link>
    )}
    {/* Circulo que mostra se está on ou n */}
    {isLoggedIn && <FaCircle size={24} color="#66ff33"/>}
  </Nav>
  );
}

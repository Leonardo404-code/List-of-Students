import React from 'react';

import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/loading';

import { toast } from 'react-toastify';

import { isEmail } from 'validator';

import { useDispatch, useSelector } from 'react-redux';

import { get } from 'lodash';

import { ButtonRed, Container } from '../../styles/globalStyles';

import { Form } from './styled';

export default function Login(props) {
  const dispath = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }
    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if (formErrors) return;
    dispath(actions.loginRequest({ email, password, prevPath }));
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1 align="middle">Login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        <ButtonRed type="submit">Acessar</ButtonRed>
      </Form>
    </Container>
  );
}

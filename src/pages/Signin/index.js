import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/images/logo_black.jpg';
import loader from '~/assets/images/loader.svg';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(3, 'A senha está muito curta')
    .required('Senha é obrigatório'),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="Samara&Leonardo" className="branding" />
        <h1 className="heading"> Olá, bom te ver aqui! </h1>{' '}
        <Input type="email" placeholder="Seu e-mail" name="email" />
        <Input type="password" name="password" placeholder="Sua senha" />
        {loading ? (
          <img src={loader} alt="Só um instante..." className="buttonLoader" />
        ) : (
          <button type="submit" className="globalShadow blue">
            Fazer Login
          </button>
        )}
      </Form>
    </>
  );
}

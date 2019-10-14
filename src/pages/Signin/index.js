import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/images/logo_black.jpg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha está muito curta')
    .required('Senha é obrigatório'),
});

export default function Signin() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="Samara&Leonardo" className="branding" />
        <h1 className="heading">Olá, bom te ver aqui!</h1>
        <Input type="email" placeholder="Seu e-mail" name="email" />
        <Input type="password" name="password" placeholder="Sua senha" />
        <button type="submit" className="globalShadow blue">
          Fazer login
        </button>
      </Form>
    </>
  );
}

import React from 'react';

import logo from '~/assets/images/logo.svg';

export default function Signin() {
  return (
    <>
      <img src={logo} alt="Samara e Leonardo" />
      <form action="">
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit"> Fazer login </button>{' '}
      </form>{' '}
    </>
  );
}

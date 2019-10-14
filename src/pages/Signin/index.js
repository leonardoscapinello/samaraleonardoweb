import React from 'react';

import logo from '~/assets/images/logo_black.jpg';

export default function Signin() {
  return (
    <>
      <form action="">
        <img src={logo} alt="Samara&Leonardo" className="branding" />
        <h1 className="heading">Olá, bom te ver aqui!</h1>
        <input type="email" placeholder="Seu e-mail" name="email" />
        <input type="password" name="password" placeholder="Sua senha" />
        <button type="submit" className="globalShadow blue">
          Fazer login
        </button>
      </form>
    </>
  );
}

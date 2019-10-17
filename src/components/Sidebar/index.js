import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo_black.jpg';
import { Container, Content } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Samara & Leonardo" className="branding small" />
        <ul className="navigation">
          <li>
            <Link to="/dashboard">
              <i className="lni-home"> </i>Dashboard{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link to="/transactions">
              <i className="lni-add-file"> </i> Transações{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link to="/wallets">
              <i className="lni-credit-cards"> </i> Carteiras{' '}
            </Link>{' '}
          </li>{' '}
          <li>
            <Link to="/profile">
              <i className="lni-user"> </i> Meu perfil{' '}
            </Link>{' '}
          </li>{' '}
        </ul>{' '}
      </Content>{' '}
    </Container>
  );
}

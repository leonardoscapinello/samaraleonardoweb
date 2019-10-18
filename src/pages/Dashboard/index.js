import React from 'react';
import api from '~/services/api';

import Header from '~/components/Header';
import WalletsCard from '~/components/WalletsCard';

export default function Dashboard() {
  api.get('transactions');
  return (
    <>
      <Header>
        <div className="section">
          <div className="block">
            <div className="section dashboard">
              <div className="block vertical-separator">
                <h1>Dashboard</h1>
              </div>
              <div className="block">
                <div className="text--white">Receitas (mês atual)</div>
                <div className="text--white text--big text--strong">
                  R$ 152.567,66
                </div>
              </div>
              <div className="block">
                <span className="text--white">Despesas (mês atual)</span>
                <div className="text--white text--big text--strong">
                  R$ 4.567,66
                </div>
              </div>
              <div className="block">
                <span className="text--white">
                  Cartão de Crédito (mês atual)
                </span>
                <div className="text--white text--big text--strong">
                  R$ 16.567,66
                </div>
              </div>
              <div className="block">
                <span className="text--white">Total em Conta</span>
                <div className="text--white text--big text--strong">
                  R$ 1.216.567,66
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="section reverse align--right">
              <div className="block profile-right">User image</div>
            </div>
          </div>
        </div>
      </Header>
      <WalletsCard />
    </>
  );
}

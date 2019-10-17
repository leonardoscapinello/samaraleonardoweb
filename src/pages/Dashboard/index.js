import React from 'react';
import api from '~/services/api';

import Header from '~/components/Header';

export default function Dashboard() {
  api.get('transactions');
  return (
    <Header>
      <div className="section">
        <h1>Dashboard</h1>
      </div>
    </Header>
  );
}

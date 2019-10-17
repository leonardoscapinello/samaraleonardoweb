import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, AppContent } from './styles';

import Sidebar from '~/components/Sidebar';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <AppContent> {children} </AppContent>{' '}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

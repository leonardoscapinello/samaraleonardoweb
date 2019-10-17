import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function AppContent({ children }) {
  return <Container> {children} </Container>;
}

AppContent.propTypes = {
  children: PropTypes.element.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';
import LeftSidebar from '~/components/LeftSidebar';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <LeftSidebar />
      <Content>{children}</Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

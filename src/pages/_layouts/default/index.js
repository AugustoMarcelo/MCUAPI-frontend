import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';
import LeftSidebar from '~/components/LeftSidebar';
import { RightSidebarContext } from '~/services/RightSidebarContext';
import RightSidebar from '~/components/RightSidebar';

export default function DefaultLayout({ children }) {
  const [rightSidebarStatus, setRightSidebarStatus] = useState({
    open: false,
    elementId: null,
  });

  const providerRightSidebarStatus = useMemo(
    () => ({ rightSidebarStatus, setRightSidebarStatus }),
    [rightSidebarStatus, setRightSidebarStatus]
  );

  return (
    <Wrapper>
      <RightSidebarContext.Provider value={providerRightSidebarStatus}>
        <LeftSidebar />
        <Content open={rightSidebarStatus.open}>{children}</Content>
        <RightSidebar />
      </RightSidebarContext.Provider>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

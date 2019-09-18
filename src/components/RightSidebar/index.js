import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';

import { Container, CloseButton } from './styles';
import { RightSidebarContext } from '~/services/RightSidebarContext';

export default function RightSidebar() {
  const { rightSidebarStatus, setRightSidebarStatus } = useContext(
    RightSidebarContext
  );
  const { open } = rightSidebarStatus;

  function closeSidebar() {
    setRightSidebarStatus({ open: !open });
  }

  return (
    <Container open={open}>
      <CloseButton onClick={closeSidebar}>
        <FaTimes size={24} />
      </CloseButton>
    </Container>
  );
}

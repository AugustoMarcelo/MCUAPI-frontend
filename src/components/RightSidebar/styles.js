import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background: #fff;
  width: ${props => (props.open ? '300px' : '0')};
  height: 100%;
  box-shadow: -1px 0 2px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease-in;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  border: 0;
  margin: 10px;
  padding: 5px;
  background: transparent;
  transition: 0.1s;

  svg {
    color: #f0131e;
    transition: 0.2s;
  }

  &:hover {
    background: #eee;
    border-radius: 50%;
    padding: 5px;
  }
`;

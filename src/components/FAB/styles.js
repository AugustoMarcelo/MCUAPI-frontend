import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 10px;
  right: 20px;
  border: 0;
  background: #0984e3;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
  transition: 0.2s;

  svg {
    color: #f5f5f5;
    transition: 0.2s;
  }

  &:hover {
    background: ${darken(0.1, '#0984e3')};
  }
`;

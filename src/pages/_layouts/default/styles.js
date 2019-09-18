import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  background: #f2f2f2;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  margin-left: 130px;
  padding: 10px;
  transition: 0.2s ease-in;

  ${props =>
    props.open &&
    css`
      margin-right: 300px;
    `}
`;

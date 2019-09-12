import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 120px;
  height: 100%;
  background: linear-gradient(180deg, #0984e3, #74b9ff);
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      padding: 10px 0;
      color: #fff;
      margin-bottom: 10px;
      width: 100%;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#0984e3')};
      }

      img {
        padding-bottom: 10px;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 64px;
  height: 64px;
  margin: 15px 0 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const LogoutButton = styled.button`
  height: 40px;
  width: 75%;
  margin: 0 10px 10px;
  background: transparent;
  font-weight: bold;
  color: #fff;
  border: 1px dashed #fff;
  font-size: 16px;
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    background: #f3f3f3;
    color: #f0131e;
  }
`;

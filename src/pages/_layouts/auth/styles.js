import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #0984e3, #74b9ff);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      height: 44px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
      border-radius: 2px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      &:focus {
        background: rgba(0, 0, 0, 0.3);
      }
    }

    span {
      color: #fab1a0;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: 700;
      font-size: 16px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: transparent;
      font-weight: bold;
      color: #fff;
      border: 1px solid #fff;
      font-size: 18px;
      border-radius: 2px;
      transition: all 0.2s;

      &:hover {
        background: #fff;
        color: #f0131e;
      }
    }
  }
`;

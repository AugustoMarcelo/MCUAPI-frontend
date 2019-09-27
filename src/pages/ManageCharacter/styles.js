import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: auto;

  .preview {
    height: 200px;
    width: 167px;
    border: 1px dashed #dedede;
    border-radius: 4px;
    margin-bottom: 10px;

    img {
      height: 200px;
      width: 167px;
      border-radius: 4px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      border: 1px solid #dedede;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 10px 10px;
      transition: 0.2s;

      &:focus {
        border-color: #222;
      }
    }

    span {
      color: #fab1a0;
      align-self: flex-start;
      margin: 0 10px 10px;
      font-weight: 700;
      font-size: 16px;
    }

    textarea {
      border: 1px solid #dedede;
      border-radius: 4px;
      height: 200px;
      padding: 10px 15px;
      margin: 0 10px 10px;
      transition: border 0.2s;
      &:focus {
        border-color: #222;
      }
      &::placeholder {
        padding: 10px 0;
      }
    }

    button {
      margin: 0 10px;
      height: 44px;
      width: 88px;
      align-self: flex-end;
      background: transparent;
      font-weight: bold;
      color: #00b894;
      border: 1px solid #00b894;
      font-size: 18px;
      border-radius: 2px;
      transition: all 0.2s;

      &:hover {
        background: #00b894;
        color: #fff;
      }
    }
  }
`;

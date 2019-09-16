import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;

  padding: 15px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);

  img {
    height: 222px;
    border-radius: 2px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`;

export const Title = styled.h1`
  margin-bottom: 5px;
`;

export const Storyline = styled.p`
  font-size: 18px;
  text-align: justify;
  flex-grow: 1;
`;

export const Info = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;

    span {
      text-transform: uppercase;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    justify-content: center;
    border: 0;
    background: #f5f5f5;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-bottom: 10px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    transition: 0.2s;

    svg {
      color: #0984e3;
      transition: 0.2s;
    }

    &:hover {
      background: #0984e3;

      svg {
        color: #f5f5f5;
      }
    }
  }
`;

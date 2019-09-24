import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  align-items: center;
  padding: 10px 0 0;
  border-radius: 4px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.3);

  img {
    width: 112px;
    height: 112px;
    border-radius: 50%;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
  }
`;

export const HeroName = styled.h3`
  font-size: 20px;
  flex-grow: 1;
`;

export const Name = styled.span`
  font-size: 16px;
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  button {
    width: 50%;
    padding: 8px;
    border: 0;
    background: transparent;
    border-bottom-left-radius: 4px;
    transition: 0.2s;

    svg {
      color: #0984e3;
    }

    &:hover {
      background: #0984e3;

      svg {
        color: #fff !important;
      }
    }

    &:nth-of-type(2) {
      border-bottom-left-radius: unset;
      border-bottom-right-radius: 4px;

      &:hover {
        background: #f0131e;

        svg {
          color: #fff !important;
        }
      }
    }
  }
`;

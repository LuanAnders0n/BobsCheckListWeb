import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .button {
    margin: 30px;
    width: 300px;
    height: 150px;
    border-radius: 30px;
    box-shadow: 10px 10px;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 50px;
    font-weight: 900;
    font-family: Inter;
  }
`;

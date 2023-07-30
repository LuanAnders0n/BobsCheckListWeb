import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (min-width: 820px) {
    display: flex;

    h1 {
      border: 1px solid #000;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h3 {
      font-size: 10px;
      border: 1px solid #000;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .response {
      border: 1px solid #000;
      padding: 10px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        border: 1px solid #020202;
      }
    }

    #YES {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
    }
    #NO {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

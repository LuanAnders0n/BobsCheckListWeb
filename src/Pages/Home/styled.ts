import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .logo-div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fa2525;
    width: 100%;
  }

  .logo {
    width: 200px;
  }

  h1 {
    font-size: 30px;
    font-weight: bolder;
    margin-left: 5px;
    color: #fff;
  }
  .button {
    margin: 30px;
    width: 300px;
    height: 150px;
    border-radius: 30px;
    box-shadow: 10px 10px;
  }

  a {
    text-decoration: none;
    font-weight: 900;
  }

  .a1 {
    font-size: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    color: #fff;
    margin: 15px;
    border-radius: 25px;
    background: #d24141;
  }
  .a2 {
    font-size: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    color: #fff;
    margin: 15px;
    border-radius: 25px;
    background: #d24141;
  }

  .end {
    background-color: #fa2525;
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
  }
`;

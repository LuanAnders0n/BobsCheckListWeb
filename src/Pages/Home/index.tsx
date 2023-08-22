import React from 'react';
import { Container } from './styled';
import bobs from '../../images/bobs.svg';
const Home = () => {
  return (
    <div>
      <Container>
        <div className="logo-div">
          <img className="logo" src={bobs} alt="" />
          <h1>CHECK LIST</h1>
        </div>
        <div className="btn">
          <a className="a1" href="/store">
            LOJA
          </a>
        </div>
        <div className="btn">
          <a className="a2" href="/kiosk">
            QUIOSQUE
          </a>
        </div>

        <div className="end"></div>
      </Container>
    </div>
  );
};

export default Home;

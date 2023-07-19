import React from 'react';
import { Container } from './styled';

const Home = () => {
  return (
    <div>
      <Container>
        <button className="button">
          <a href="/store">LOJA</a>
        </button>
        <button className="button">
          <a href="/kiosk">QUIOSQUE</a>
        </button>
      </Container>
    </div>
  );
};

export default Home;

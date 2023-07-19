import React from 'react';
import { Container } from './styled';
import Peso from '../../Components/Peso';
const Store = () => {
  return (
    <div>
      <Container>
        <div className="body">
          <Peso></Peso>
          <button className="button">
            <a href="/">Voltar</a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Store;

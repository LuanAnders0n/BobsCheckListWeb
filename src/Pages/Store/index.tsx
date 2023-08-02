import React from 'react';
import { Container } from './styled';
import DropdownMenu from '../../Components/DropDown';
import bobs from '../../images/bobs.svg';
import Today from '../../Components/Date';

const Store = () => {
  return (
    <div>
      <Container>
        <div className="logo-div">
          <img className="logo" src={bobs} alt="" />
          <h1 className="h1">CHECK LIST</h1>
        </div>
        <div className="body">
          <h1 className="h2">LOJA</h1>
          <Today />
        </div>
        <DropdownMenu time="Abertura" />
        <DropdownMenu time="Passagem" />
        <div className="back">
          <a className="a1" href="/">
            Voltar
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Store;

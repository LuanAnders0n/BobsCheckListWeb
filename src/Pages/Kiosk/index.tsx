import React from 'react';
import { Container } from './styled';
import DropdownMenu from '../../Components/DropDown/index';
import bobs from '../../images/bobs.svg';
const Kiosk = () => {
  return (
    <div>
      <Container>
        <div className="logo-div">
          <img className="logo" src={bobs} alt="" />
          <h1>CHECK LIST</h1>
        </div>
        <DropdownMenu time="Abertura" />
        <DropdownMenu time="Passagem" />
        <div className="back">
          <a className='a1' href="/">
            Voltar
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Kiosk;

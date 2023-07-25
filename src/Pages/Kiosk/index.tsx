import React from 'react';
import { Container } from './styled';
import DropdownMenu from '../../Components/DropDown/index';

const Kiosk = () => {
  return (
    <div>
      <Container>
        <DropdownMenu></DropdownMenu>
        <button className="button">
          <a href="/">Voltar</a>
        </button>
      </Container>
    </div>
  );
};

export default Kiosk;

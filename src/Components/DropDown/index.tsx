import React, { useState } from 'react';
import { Sidenav, DropdownContainer, DropdownItem, CaretIcon } from './styled';
import DropDownCopy from '../DropDownCopy/index';
import {
  cupItems,
  balcaoItems,
  machineHouseItems,
  estorageItems,
  frieItems,
  adminItems,
  peopleItems,
  treashRoomItems,
  greenItems,
  roomItems,
} from './components/DropdownItems';

export interface ResponseArray {
  balcaoEnable: boolean;
}

interface TimeProps {
  time?: string;
  responseArray?: ResponseArray;
}

const DropdownMenu = (props: TimeProps) => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleDropdown = () => {
    setActiveDropdown(prevState => !prevState);
  };

  return (
    <Sidenav>
      <button className="dropdown-btn" onClick={toggleDropdown}>
        {props.time}
        <CaretIcon className="fa fa-caret-down" />
      </button>
      <DropdownContainer style={{ display: activeDropdown ? 'block' : 'none' }}>
        <DropdownItem active={false}>
          <DropDownCopy section="BALCÃO" dropdownItems={balcaoItems} />
          <DropDownCopy
            section="CASA DE MAQUINAS"
            dropdownItems={machineHouseItems}
          />
          <DropDownCopy section="COPA" dropdownItems={cupItems} />
          <DropDownCopy section="ESTOQUE" dropdownItems={estorageItems} />
          <DropDownCopy section="FRITADEIRA" dropdownItems={frieItems} />
          <DropDownCopy section="GERENCIA" dropdownItems={adminItems} />
          <DropDownCopy
            section="GESTÃO DE PESSOAS
"
            dropdownItems={peopleItems}
          />
          <DropDownCopy
            section="SALA DE LIXO"
            dropdownItems={treashRoomItems}
          />
          <DropDownCopy section="SALADEIRA" dropdownItems={greenItems} />
          <DropDownCopy section="SALÃO" dropdownItems={roomItems} />
        </DropdownItem>
        <DropdownItem active={false}></DropdownItem>
        {/*   <DropdownItem active={false}>
        <DropdownItem active={false}>
          <DropDownCopy section="COPA" />
        </DropdownItem>
        <DropdownItem active={false}>
          <DropDownCopy section="ESTOQUE" />
        </DropdownItem>
        <DropdownItem active={false}>
          <DropDownCopy section="FRITADEIRA" />
        </DropdownItem>
        <DropdownItem active={false}>
          <DropDownCopy section="GERENCIA" />
        </DropdownItem>
        <DropdownItem active={false}>
          <DropDownCopy section="GESTÃO DE PESSOAS" />
        </DropdownItem>
        <DropdownItem active={false}>
          <DropDownCopy section="SALA DE LIXO" />
        </DropdownItem>
        <DropdownItem active={false}>
          <DropDownCopy section="SALADEIRA" />
        </DropdownItem>
        <DropdownItem active={false}>
          <DropDownCopy section="SALÃO" />
        </DropdownItem> */}
      </DropdownContainer>
    </Sidenav>
  );
};

export default DropdownMenu;

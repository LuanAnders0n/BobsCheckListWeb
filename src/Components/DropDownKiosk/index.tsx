import React, { useState } from 'react';
import { Sidenav, DropdownContainer, DropdownItem, CaretIcon } from './styled';
import DropDownCopy from '../DropDownCopy/index';
import {
  cupItems,
  balcaoItems,
  estorageItems,
  adminItems,
  peopleItems,
} from './components/DropdownItems';

export interface ResponseArray {
  balcaoEnable: boolean;
}

interface TimeProps {
  time?: string;
  responseArray?: ResponseArray;
}

const DropdownMenuKiosk = (props: TimeProps) => {
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

          <DropDownCopy section="COPA" dropdownItems={cupItems} />
          <DropDownCopy section="ESTOQUE" dropdownItems={estorageItems} />
          <DropDownCopy section="GERENCIA" dropdownItems={adminItems} />
          <DropDownCopy
            section="GESTÃO DE PESSOAS"
            dropdownItems={peopleItems}
          />
        </DropdownItem>
        <DropdownItem active={false}></DropdownItem>
      </DropdownContainer>
    </Sidenav>
  );
};

export default DropdownMenuKiosk;

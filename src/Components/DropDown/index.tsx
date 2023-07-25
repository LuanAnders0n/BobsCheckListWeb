import React, { useState } from 'react';
import { Sidenav, DropdownContainer, DropdownItem, CaretIcon } from './styled';
import DropDownCopy from '../DropDownCopy/index';
const DropdownMenu: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleDropdown = () => {
    setActiveDropdown(prevState => !prevState);
  };

  return (
    <Sidenav>
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Dropdown
        <CaretIcon className="fa fa-caret-down" />
      </button>
      <DropdownContainer style={{ display: activeDropdown ? 'block' : 'none' }}>
        <DropdownItem href="#" active={false}>
          <DropDownCopy />
        </DropdownItem>
        <DropdownItem href="#" active={false}>
          <DropDownCopy />
        </DropdownItem>
        <DropdownItem href="#" active={false}>
          <DropDownCopy />
        </DropdownItem>
      </DropdownContainer>
    </Sidenav>
  );
};

export default DropdownMenu;

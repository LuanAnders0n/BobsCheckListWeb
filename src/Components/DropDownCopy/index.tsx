import React, { useState } from 'react';
import { Sidenav, DropdownContainer, DropdownItem, CaretIcon } from './styled';

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
          Link 1
        </DropdownItem>
        <DropdownItem href="#" active={false}>
          Link 2
        </DropdownItem>
        <DropdownItem href="#" active={false}>
          Link 3
        </DropdownItem>
      </DropdownContainer>
    </Sidenav>
  );
};

export default DropdownMenu;

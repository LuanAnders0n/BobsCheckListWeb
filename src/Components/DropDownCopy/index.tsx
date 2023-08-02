import React, { useState } from 'react';
import { Sidenav, DropdownContainer, DropdownItem, CaretIcon } from './styled';
import CheckboxInput from '../DropDown/components/CheckBox';

export interface DropdownItemInterface {
  text: string;
  weight: string;
}

interface BobsProps {
  section: string;
  dropdownItems?: DropdownItemInterface[];
  response?: boolean;
}

const DropdownCopy = (props: BobsProps) => {
  const { section, dropdownItems } = props;
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleDropdown = () => {
    setActiveDropdown(prevState => !prevState);
  };

  return (
    <Sidenav>
      <button className="dropdown-btn" onClick={toggleDropdown}>
        {section}
        <CaretIcon className="fa fa-caret-down" />
      </button>
      <DropdownContainer style={{ display: activeDropdown ? 'block' : 'none' }}>
        {dropdownItems?.map(item => (
          <DropdownItem active={false}>
            <p>{item.weight}</p>
            <p>{item.text}</p>

            <input type="checkbox" />
            <p>Sim</p>
            <CheckboxInput />
          </DropdownItem>
        ))}
      </DropdownContainer>
    </Sidenav>
  );
};

export default DropdownCopy;

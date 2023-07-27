import styled from 'styled-components';

export const Sidenav = styled.div`
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #941913;
  overflow-x: hidden;

  .dropdown-btn {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #000;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;

    &:hover {
      color: #f1f1f1;
    }
  }
`;

export const SidenavLink = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #f1f1f1;
  }
`;

export const DropdownContainer = styled.div`
  display: none;
  background-color: #941913;
  padding-left: 8px;
`;

interface DropdownItemProps {
  active: boolean;
}

export const DropdownItem = styled(SidenavLink)<DropdownItemProps>`
  background-color: ${props => (props.active ? 'green' : 'initial')};
  color: ${props => (props.active ? 'white' : '#818181')};
`;

export const CaretIcon = styled.i`
  float: right;
  padding-right: 8px;
`;

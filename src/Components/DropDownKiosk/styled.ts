import styled from 'styled-components';

export const Sidenav = styled.div`
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #d82424;
  overflow-x: hidden;

  .dropdown-btn {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 30px;
    color: #f1f1f1;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
    font-weight: 900;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SidenavLink = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #f1f1f1;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
`;

export const DropdownContainer = styled.div`
  display: none;
  background-color: #d82424;
  padding-left: 8px;
`;

interface DropdownItemProps {
  active: boolean;
}

export const DropdownItem = styled(SidenavLink)<DropdownItemProps>`
  background-color: ${props => (props.active ? 'green' : 'initial')};
  color: ${props => (props.active ? 'white' : '#818181')};
  border-color: #000;
  border-top: 1px solid;
`;

export const CaretIcon = styled.i`
  float: right;
  padding-right: 8px;
`;

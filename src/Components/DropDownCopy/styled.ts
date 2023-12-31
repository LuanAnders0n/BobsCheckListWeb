import styled from 'styled-components';

export const Sidenav = styled.div`
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f64b4b;
  overflow-x: hidden;

  .dropdown-btn {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;

    @media only screen and (max-width: 750px) {
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size: 20px;
      color: #fff;
      display: block;
      border: none;
      background: none;
      width: 100%;
      text-align: left;
      cursor: pointer;
      outline: none;
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

  @media only screen and (max-width: 750px) {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 10px;
    color: #818181;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
  }
`;

export const DropdownContainer = styled.div`
  display: none;
  background-color: #f9eaea;

  input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

interface DropdownItemProps {
  active: boolean;
}

export const DropdownItem = styled(SidenavLink)<DropdownItemProps>`
  background-color: ${props => (props.active ? 'green' : 'initial')};
  color: ${props => (props.active ? 'white' : '#818181')};
  display: flex;
  align-items: center;
  border-color: #000;
  border-top: 1px solid;

  p {
    margin-right: 5px;
    font-size: 16px;
  }

  .input {
    width: 17px;
    height: 17px;
    margin: 3px;
    border-radius: 30px;
  }

  @media only screen and (max-width: 750px) {
    p {
      margin-right: 5px;
      font-size: 12px;
    }

    .input {
      width: 10px;
      height: 17px;
      margin: 3px;
      border-radius: 30px;
    }
  }
`;

export const CaretIcon = styled.i`
  float: right;
  padding-right: 8px;
`;

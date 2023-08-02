import React, { useState } from 'react';
import { Container } from '../../../Components/DropDown/components/styled';

const CheckboxWithTextInput: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [textInputValue, setTextInputValue] = useState<string>('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (!event.target.checked) {
      setTextInputValue('');
    }
  };

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextInputValue(event.target.value);
  };

  return (
    <div>
      <Container>
        <div className="body">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p>Não</p>
          </label>

          {isChecked && (
            <input
              type="text"
              value={textInputValue}
              onChange={handleTextInputChange}
              placeholder="Justificativa"
            />
          )}
        </div>
      </Container>
    </div>
  );
};
export default CheckboxWithTextInput;

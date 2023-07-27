import React, { useState, useEffect } from 'react';

const CheckboxInput: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    // Verifica se há um valor salvo no localStorage
    const checkboxStatus = localStorage.getItem('checkboxStatus');

    // Se houver um valor no localStorage, aplica esse valor no estado da checkbox
    if (checkboxStatus !== null) {
      setChecked(JSON.parse(checkboxStatus));
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setChecked(checked);

    // Salva o estado da checkbox no localStorage
    localStorage.setItem('checkboxStatus', JSON.stringify(checked));
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
      </label>
    </div>
  );
};

export default CheckboxInput;

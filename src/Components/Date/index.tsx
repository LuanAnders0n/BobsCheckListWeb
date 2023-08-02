import React from 'react';

const Today = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-GB');
  return (
    <div className="container">
      <p>{formattedDate}</p>
    </div>
  );
};

export default Today;

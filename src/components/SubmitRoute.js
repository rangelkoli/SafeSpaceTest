import React from 'react';

function SubmitRoute({ input1Value }) {
  const handleButtonClick = () => {
      //alert(`Input Field 1 Value: ${input1Value.current.value}\nInput Field 2 Value:`);
      console.log(`${input1Value.current.value}`)
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Alert</button>
    </div>
  );
}

export default SubmitRoute;

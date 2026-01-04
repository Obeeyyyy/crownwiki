import React from 'react';

const ConfigComponent = ({children, data}) => {
console.log(data);

    const mouseOver = () => {
        console.log('Mouse over event triggered');
    }

  return (
    <div 
        onMouseOver={mouseOver} 
    >
        {children}
    </div>
  )
}

export default ConfigComponent;

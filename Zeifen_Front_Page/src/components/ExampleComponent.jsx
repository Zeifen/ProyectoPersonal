import React from 'react';

const ExampleComponent = ({children, example}) => {
  return (
    <>
        <div>
            {children}
            {example}
        </div>
    </>
  )
}

export default ExampleComponent;
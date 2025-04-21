import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExampleComponent from './components/ExampleComponent';

//Ya no se usa App pero se deja de referencia
function App() {

  return (
    <>
      <ExampleComponent example='ejemplo desde prop'>
        <p>Ejemplo de children</p>
      </ExampleComponent>
    </>
  )
}

export default App

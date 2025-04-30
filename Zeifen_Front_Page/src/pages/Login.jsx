import { useState } from 'react';
//AWS
import { login } from '../services/authService';
//Alerts
import { alertBasic } from "../components/alertFunction";
//Context
import { useContext } from "react";
import ConstantsContext from '../context/Context';

const Login = () => {

  const { alertTitleLogWelcome, alertTextLogSuccess, alertIconSucces, alertTitleLogError, alertTextLogError, alertIconError } = useContext(ConstantsContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await login(email, password);
      console.log('Token obtenido:', token);
      alertBasic( alertTitleLogWelcome, alertTextLogSuccess, alertIconSucces);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alertBasic( alertTitleLogError, alertTextLogError(error), alertIconError);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <input className='mb-2' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <br />

        <input className='mb-2' type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <br />

        <button className='btn-success btn mb-2' type="submit" onClick={handleLogin}>Iniciar sesión</button>
      </form>
    </div>
  )
}

export default Login;
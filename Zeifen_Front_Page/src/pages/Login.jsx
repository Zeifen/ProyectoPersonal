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
    <div className="container container-login">
      <h2 className='mb-4'>Iniciar sesión</h2>
      <form>
        <div className="row">
          <div className="col-sm-12">
            <input className='form-control input-size' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="col-sm-12">
            <input className='form-control input-size' type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className="col-sm-12">
            <button className='btn-primary btn button-login-size' type="submit" onClick={handleLogin}>Iniciar sesión</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
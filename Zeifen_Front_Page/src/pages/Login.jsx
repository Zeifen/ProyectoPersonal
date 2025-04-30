import { useState } from 'react';
import { login } from '../services/authService';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await login(email, password);
      console.log('Token obtenido:', token);
      alert('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión: ' + error.message);
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
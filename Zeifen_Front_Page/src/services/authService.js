import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { showPassword } from '../components/alertFunction';
import Swal from 'sweetalert2';

const poolData = {
    UserPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
    ClientId: import.meta.env.VITE_AWS_CLIENT_ID
};

const userPool = new CognitoUserPool(poolData);

export function login(email, password) {
  const user = new CognitoUser({
    Username: email,
    Pool: userPool,
  });

  const authDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  return new Promise((resolve, reject) => {
    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        const token = result.getIdToken().getJwtToken();
        localStorage.setItem('token', token); // Guardamos el token
        resolve(token);
      },
      onFailure: (err) => {
        reject(err);
      },
      newPasswordRequired: async (userAttributes, requiredAttributes) => {
        try {
          const nuevaPassword = await showPassword();
      
          if (!nuevaPassword) {
            await Swal.fire({
                title: "Operación cancelada",
                text: "No se completó el cambio de contraseña.",
                icon: "info"
              });
              reject(new Error('El usuario canceló el cambio de contraseña'));
              return;
          }
      
          user.completeNewPasswordChallenge(nuevaPassword, {}, {
            onSuccess: (session) => {
              const token = session.getIdToken().getJwtToken();
              localStorage.setItem('token', token);
              resolve(token);
            },
            onFailure: (err) => {
              reject(err);
            },
          });
        } catch (err) {
          reject(err);
        }
      }
    });
  });
}


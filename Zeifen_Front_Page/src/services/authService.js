//AWS
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
//Alerts
import { showPassword, alertBasic } from "../components/alertFunction";
//Constants
import { alertConst, generalText } from "../constants/generalConstants";

const poolData = {
  UserPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
  ClientId: import.meta.env.VITE_AWS_CLIENT_ID,
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
        localStorage.setItem(generalText.token, token);
        resolve(token);
      },
      onFailure: (err) => {
        reject(err);
      },
      newPasswordRequired: async (userAttributes, requiredAttributes) => {
        try {
          const nuevaPassword = await showPassword();
          if (!nuevaPassword) {
            await alertBasic(alertConst.titleCanceled, alertConst.textIncomplete, alertConst.iconInfo);
            reject(new Error(generalText.errorUsCancel));
            return;
          }

          user.completeNewPasswordChallenge(
            nuevaPassword,
            {},
            {
              onSuccess: (session) => {
                const token = session.getIdToken().getJwtToken();
                localStorage.setItem(generalText.token, token);
                resolve(token);
              },
              onFailure: (err) => {
                reject(err);
              },
            }
          );
        } catch (err) {
          reject(err);
        }
      },
    });
  });
}

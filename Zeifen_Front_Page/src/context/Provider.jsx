import ConstantsContext from './Context';

const Provider = ({children}) => {
    const contextResume = "CV";
    const contextCarrousel = "Certificados";
    const contextContact = "Contacto";
    const contextLogin = "Login";
    const alertTitleSending = "Enviando...";
    const alertTextWait = "Espera un momento por favor";
    const alertTitleTy = '¡Gracias por tu interés!';
    const alertTextRequest = '¡Tu solicitud ha sido enviada, en cuanto pueda me pondré en contacto contigo!';
    const alertIconSucces = 'success';
    const alertConfirmButtonText = 'Es todo';
    const alertTitleWrong = '¡Ups!';
    const alertIconError = 'error';
    const alertConfirmButtonOk = 'Entendido';
    const alertTitleLogWelcome = '¡Bienvenido!';
    const alertTextLogSuccess = 'Inicio de sesión exitoso';
    const alertTitleLogError = 'Error';
    const alertTextError = (error) => `No se pudo guardar la información: ${error.message || JSON.stringify(error)}`;
    const alertTextLogError = (error) => `Error al iniciar sesión: ${error.message || JSON.stringify(error)}`;

  return (
    <>
        <ConstantsContext.Provider 
        value={{
         contextResume,
         contextCarrousel,
         contextContact,
         contextLogin,
         alertTitleSending,
         alertTextWait,
         alertTitleTy,
         alertTextRequest,
         alertIconSucces,
         alertConfirmButtonText,
         alertTitleWrong,
         alertIconError,
         alertConfirmButtonOk,
         alertTitleLogWelcome,
         alertTextLogSuccess,
         alertTitleLogError,
         alertTextError,
         alertTextLogError,
        }}>
            {children}
        </ConstantsContext.Provider>
    </>
  )
}

export default Provider;
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
    const alertTextError = (error) => `No se pudo guardar la información. Código: ${error.message || JSON.stringify(error)}`;
    const alertIconError = 'error';
    const alertConfirmButtonOk = 'Entendido';

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
         alertTextError,
         alertIconError,
         alertConfirmButtonOk
        }}>
            {children}
        </ConstantsContext.Provider>
    </>
  )
}

export default Provider;
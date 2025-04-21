import ConstantsContext from './Context';

const Provider = ({children}) => {

    const contextCarrousel = "Certificados";
    const contextContact = "Contacto";

  return (
    <>
        <ConstantsContext.Provider value={{contextCarrousel, contextContact }}>
            {children}
        </ConstantsContext.Provider>
    </>
  )
}

export default Provider;
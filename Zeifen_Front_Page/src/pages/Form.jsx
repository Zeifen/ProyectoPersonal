
const Form = () => {
  return (
    <>
    <div>
      <div>
        <h4 className="mb-3">Ingresa tu información</h4>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Apellidos</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="usuario@ejemplo.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="form-label">Empresa<span className="text-body-secondary"></span></label>
              <input type="text" className="form-control" id="address2" placeholder="Nombre de la empresa"/>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">Dirección de empresa</label>
              <input type="text" className="form-control" id="address" placeholder="" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="country" className="form-label">País</label>
              <select className="form-select" id="country" required>
                <option value="">Selecciona</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="state" className="form-label">Estado</label>
              <select className="form-select" id="state" required>
                <option value="">Selecciona</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className='form-group mb-2'>
              <label htmlFor="state" className="form-label">Descripción</label>
              <textarea type="tnumber" id='descripcion' className="form-control" name='descripcion' placeholder='Agrega el motivo'></textarea>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="row gy-3">
            <div className='col-md-12 general-text'>
            <button className="btn btn-primary btn-lg form_button" type="submit">Enviar</button>
          </div>  
        </div>
          <hr className="my-4"/> 
        </form>
      </div>
    </div>
    </>
  )
}

export default Form;
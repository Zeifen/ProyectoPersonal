import {useState} from 'react';
import Swal from 'sweetalert2';

const Form = () => {

  const [ name, setName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ company, setCompany ] = useState('');
  const [ direction, setCompanyDirection ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ state, setState ] = useState('');
  const [ description, setDescription ] = useState('');

  const handleValue = (e) => {
    e.preventDefault();
    const request = { name:name, lastName:lastName, email:email, company:company, direction:direction, country:country, state:state, description:description}
    console.log(request);
    Swal.fire({
      title: '¡Gracias por tu interés!',
      text: '¡Tu solicitud ha sido enviada, en cuanto pueda me pondré en contacto contigo!',
      icon: 'success',
      confirmButtonText: 'Es todo'
    })
  };

  return (
    <>
    <div>
      <div>
        <h4 className="mb-3">Ingresa tu información</h4>
        <form className="needs-validation" >
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value={name} onChange={(e) => {setName(e.target.value)}}/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Apellidos</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="usuario@ejemplo.com"value={email} onChange={(e) => {setEmail(e.target.value)}}/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="form-label">Empresa<span className="text-body-secondary"></span></label>
              <input type="text" className="form-control" id="address2" placeholder="Nombre de la empresa" value={company} onChange={(e) => {setCompany(e.target.value)}}/>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">Dirección de empresa</label>
              <input type="text" className="form-control" id="address" placeholder="" value={direction} onChange={(e) => {setCompanyDirection(e.target.value)}}/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="country" className="form-label">País</label>
              <select className="form-select" id="country" value={country} onChange={(e) => {setCountry(e.target.value)}}>
                <option value="">Selecciona</option>
                <option>México</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="state" className="form-label">Estado</label>
              <select className="form-select" id="state" value={state} onChange={(e) => {setState(e.target.value)}}>
                <option value="">Selecciona</option>
                <option>Naucalpan</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className='form-group mb-2'>
              <label htmlFor="state" className="form-label">Descripción</label>
              <textarea type="tnumber" id='descripcion' className="form-control" name='descripcion' placeholder='Agrega el motivo' value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="row gy-3">
            <div className='col-md-12 general-text'>
            <button className="btn btn-primary btn-lg form_button" type="submit" onClick={handleValue}>Enviar</button>
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
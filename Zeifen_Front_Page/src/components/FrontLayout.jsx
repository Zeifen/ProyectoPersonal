import {Outlet} from 'react-router-dom';

const FrontLayout = () => {
  return (
    <>
        <div>Título para todas las paginas</div>
        <Outlet />

    </>
  )
}

export default FrontLayout;
import {Outlet} from 'react-router-dom';
import { Header, Footer} from './index';
import Provider from '../context/Provider';

const FrontLayout = () => {
  return (
    <>
     <Provider>
      <Header />
      <main className="container">
      <Outlet />
      </main>
      <Footer />
     </Provider>
    </>
  )
}

export default FrontLayout;
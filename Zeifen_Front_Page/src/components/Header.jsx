import { Link } from "react-router-dom";
import { useContext } from "react";
import ConstantsContext from '../context/Context';

const Header = () => {

    const { contextResume, contextContact, contextCarrousel } = useContext(ConstantsContext); //Destructurando variable del provider

  return (
    <div className="container py-3">
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <Link to="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-ghost fa-lg me-2"></i>
            <span className="fs-4">Zeifen Web Page</span>
          </Link>

          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/resume" title={contextResume}>{contextResume}</Link>
            <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/certificates" title={contextCarrousel}>{contextCarrousel}</Link>
            <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/contact" title={contextContact}>{contextContact}</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

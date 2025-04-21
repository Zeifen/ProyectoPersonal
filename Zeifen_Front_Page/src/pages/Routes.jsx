import { Link } from "react-router-dom";

const Routes = () => {
    const firstUser = 1;
    const secondUser = 2;
  return (
    <>
        <ul>
            <li>
                <Link to={`/routes/path/${firstUser}`}>Usuario 1</Link>
            </li>
            <li>
                <Link to={`/routes/path/${secondUser}`}>Usuario 2</Link>
            </li>
        </ul>
    </>
  )
}

export default Routes;
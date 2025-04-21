import { useParams } from "react-router-dom";

const UseParams = () => {

    const {user} = useParams();

  return (
    <> 
        <div>Usuario: {user}</div>
    </>
  )
}

export default UseParams;
import Perfil from "./Perfil";
import '../css/headComp.css';
function HeadComp({titulo}) {
    return ( 
        <div className="contHead">
            <h1>{titulo}</h1>
            <Perfil/>
        </div>
     );
}

export default HeadComp;
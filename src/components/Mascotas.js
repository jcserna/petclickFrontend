import HeadComp from "./HeadComp";
import '../css/mascotas.css';
import Mascota from "./Mascota";
import data from '../data/mascotas.json';
function Mascotas() {
    return ( 
        <div className="contBody">
            <HeadComp titulo="Mascotas" />
            <div className="body mascotas">
                <div className="contBtnHead">
                    <button>Agregar Mascota</button>
                </div>
                <div className="contMascotas">
                    <Mascota data={data.mascotas[0]}/>
                    <Mascota data={data.mascotas[1]}/>
                </div>
            </div>
        </div>
     );
}

export default Mascotas;
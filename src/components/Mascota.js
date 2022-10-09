import '../css/mascota.css';
import MaxImg from '../img/perritoMax.png';
import TomImg from '../img/tomGato.png';
function Mascota({data}) {
    const img = data.img;
    return ( 
        <div className="mascota">
            <div className='head'>
                <img src={img==="MaxImg"?MaxImg:TomImg} alt=""/>
                <h3>{data.nombre}</h3>
                <div className='btnEliminar'/>
            </div>
            <div className='body'>
                <div className='line especie'>
                    <p>Especie:</p>
                    <select name="especie" id="tipo-especie">
                        <option value="especie0">{data.especie}</option>
                        <option value="especie1">{data.especie==="Felino"?"Canino":"Felino"}</option>
                        <option value="especie2">Ave</option>
                    </select>
                </div>
                <div className='line raza'>
                    <p>Raza:</p>
                    <select name="raza" id="tipo-raza">
                        <option value="raza0">{data.raza}</option>
                        {data.especie==="Felino"?<>
                                <option value="raza1"></option>
                                <option value="raza2"></option>
                            </>:<></>
                        }
                        {data.especie==="Canino"?<>
                                <option value="raza1"></option>
                                <option value="raza2"></option>
                            </>:<></>
                        }
                        {data.especie==="Ave"?<>
                                <option value="raza1"></option>
                                <option value="raza2"></option>
                            </>:<></>
                        }
                        
                    </select>
                </div>
                <div className='line fecha'>
                    <p>Fecha de Naciemiento:</p>
                    <input type="date" name="fechaN" placeholder={data.fechaN} defaultValue={data.fechaN}/>
                </div>
                <div className='line genero'>
                    <p>Genero:</p>
                    <select name="genero" id="tipo-genero">
                        <option value="Nombre">{data.genero}</option>
                        <option value="Fecha">{data.genero==="Macho"?"Hembra":"Macho"}</option>
                    </select>
                </div>
            </div>
            <div className='footer'>
                <p>Historia Clinica</p>
                <p>Datos Medicos</p>
                <button>Guardar</button>
            </div>
        </div>
     );
}

export default Mascota;
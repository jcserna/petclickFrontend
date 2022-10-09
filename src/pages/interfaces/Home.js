import Cookies from 'universal-cookie';
import HomeComp from '../../components/HomeComp';
import '../../css/home.css';
import React, { useState } from 'react';
import Mascotas from '../../components/Mascotas';
import { AiFillCalendar, AiFillHome, AiFillGitlab } from "react-icons/ai";
import Calendario from '../../components/Calendar';
function Home() {
    const cookies = new Cookies();
    function cerrarSesion() {
        cookies.remove('id', {path:"/"});
        cookies.remove('user', {path:"/"});
        cookies.remove('name', {path:"/"});
        window.location.href="./";
    }
    if(!cookies.get('id')){
        window.location.href="./";
    }
    const [position, setPosition] = useState(0);
    function changeHome() {
        setPosition(0);
    }
    function changeCalendar() {
        setPosition(1);
    }
    function changeMascot() {
        setPosition(2);
    }
    return ( 
        <div className="contHome">
            <div className="contNavBar" >
                <div className="contNavLogo">
                    
                </div>
                <div className="contButtons">
                    <div className={position===0?"btn active":"btn"} onClick={changeHome}>
                        <AiFillHome className='icon'/> <p>Home </p>
                    </div>
                    <div className={position===1?"btn active":"btn"} onClick={changeCalendar}>
                        <AiFillCalendar className='icon'/>
                        <p>Calendario</p>
                    </div>
                    <div className={position===2?"btn active":"btn"} onClick={changeMascot}>
                        <AiFillGitlab className='icon'/> 
                        <p>Mascotas</p>
                    </div>
                </div>
                <div className="contCerrarSesion">
                    <button onClick={cerrarSesion}>
                        Cerrar Sesion
                    </button>
                </div>
            </div>
            {position === 0? <HomeComp/>:<></>}
            {position === 1? <Calendario/>:<></>}
            {position === 2? <Mascotas/>:<></>}
        </div>
     );
}

export default Home;
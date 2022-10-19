import CalendarAdmin from "../../components/CalendarAdmin";
import HomeAdmin from "../../components/HomeAdmin";
import NavBar from "../../components/NavBar";
import PetAdmin from "../../components/PetAdmin";

function Admin() {
    const cookies = new Cookies();
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
    function cerrarSesion() {
        cookies.remove('username', {path:"/"});
        cookies.remove('id', {path:"/"});
        cookies.remove('rol', {path:"/"});
        window.location.href="./";
    }
    return ( 
        <div className="contAdmin">
            <NavBar 
            changeHome={changeHome}
            changeCalendar={changeCalendar} 
            changeMascot={changeMascot} 
            cerrarSesion={cerrarSesion} 
            position={position}/>
            {position === 0? <HomeAdmin/>:<></>}
            {position === 1? <CalendarAdmin/>:<></>}
            {position === 2? <PetAdmin/>:<></>}
        </div>
     );
}

export default Admin;
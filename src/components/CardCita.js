function CardCita({hora, info}) {
    
    return ( 
        <div className="contCard">
            <b>{hora}</b>
            <p>{info}</p>
        </div>
     );
}

export default CardCita;
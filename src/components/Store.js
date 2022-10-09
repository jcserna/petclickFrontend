const storeImg = require.context('../img', true);

function Store({name, ruta}) {
    return ( 
        <div className="store">
            <img src={storeImg(`./${name}.png`)} alt='store'/>
            <p>{name}</p>
        </div>
     );
}

export default Store;
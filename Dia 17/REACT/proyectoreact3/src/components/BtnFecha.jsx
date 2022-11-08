import React,{useState} from 'react'

function BtnFecha() {
        
    const [fecha, setFecha] = useState();

    function botonsito(){
        let dia = new Date();
        let ahora = dia.toLocaleString();
        setFecha(ahora)
    }

    return(
        <div>
        <button onClick={botonsito}>Que fecha es?</button>
        <p>{fecha}</p>
        </div>
    )
    
}


export default BtnFecha
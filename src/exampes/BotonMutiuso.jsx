
//Declarar el componente
//NOMBRE: siempre empieza con mayús (asi react sabe que es un componente)

const BotonMutiuso = ()=> {


    //logica del componente
    const handleClick = ()=>{
        alert("Hola!")
    }
    
    //siempre retornan algo (JSX)
    return(
        <button onClick={handleClick}>
            Mi Botón!
        </button>
    )
}

//Exportamos por defecto todo lo que está en el archivo

export default BotonMutiuso
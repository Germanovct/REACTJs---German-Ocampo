import { useState } from "react"
import { Link } from "react-router-dom"
import Item from "./Item/ItemDetail"


const Contador = ({max, counter, setCounter, handleAgregar}) => {


    


    const handleSumar = () => {
        if (counter < max){
            
            setCounter(counter + 1)
        }




    }



    const handleRestar = () => {
        if(counter > 1){
        setCounter(counter - 1)}

        console.log(counter)
     }

    return(
        <div >
            <hr/>

            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary" >+</button>
            <br/>
            <br/>

            <Link to="/cart" onClick={handleAgregar} type="button" className="btn btn-success">AGREGAR AL CARRITO</Link>
            <br/>
        </div>
    )
}

export default Contador








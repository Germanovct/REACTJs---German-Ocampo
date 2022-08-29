import { useState } from "react"


const Contador = () => {

    //let counter = 1
    const [counter, setCounter] = useState (0)



    const sumar = () => {
  
        setCounter(counter + 1)

        console.log(counter)

    }

    const restar = () => {
        if(counter > 0){
        setCounter(counter - 1)}

        console.log(counter)
     }

    return(
        <div className="container my-5">
            <h2>Contador</h2>
            <hr/>

            <button onClick={restar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={sumar} className="btn btn-primary" >+</button>
            <br/>
            <br/>
            <button type="button" class="btn btn-primary">AGREGAR AL CARRITO</button>
            
        </div>
    )
}

export default Contador
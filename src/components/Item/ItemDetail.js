import Counter from "../Counter"
import ItenListContainer from "../itenListContainer"
import { useState } from "react"
import Select from "./Select/Select"


const options = [ {
    value: 'EP',
    name: 'Extended Play'},
    {
        value: 'LP',
        name: 'Long Play'
    }

] 

const Item = ( {producto}) =>{


    const [cantidad, setCantidad] = useState (1)

    const handleAgregar = () =>{
        const itemToCart = {
            id: producto.id,
            precio: producto.precio,
            nombre: producto.nombre,
            cantidad
        }
        console.log(itemToCart)
    }

    return(

        <div className="card-body img-thumbnail col text-bg-dark p-3" >

                    <img src={producto.img}/>
                    <small>Tipo: <strong>EP 12"</strong></small>
                    <br/>
                    <small>Producto;<strong> Nuevo</strong></small>
                    <h4 className="h4" >{producto.nombre}</h4>
                    <small>2500 Opiniones / *****</small>
                    <p className="text-muted">Precio: {producto.precio}</p>
                    <br/>
                    <small>Category : {producto.category} </small>
                    <br/>
                    <small>stock disponible: <strong>{producto.stock}</strong></small>
                    <p className="lead">{producto.desc}</p>
                    <a className="link-info ">Ver más</a>
                    <br/>
                    <br/>
                    <hr/>
                    <Select options={options}/>
                    <hr/>
                    <Counter 
                    max={producto.stock}
                    counter={cantidad}
                    setCounter= {setCantidad}
                    handleAgregar= {handleAgregar}
                    />
                    <br/>


                    </div>
    )
    
}

export default Item
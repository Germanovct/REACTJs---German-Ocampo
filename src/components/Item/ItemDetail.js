import Counter from "../Counter"
import ItenListContainer from "../itenListContainer"
import { useContext, useState } from "react"
import Select from "./Select/Select"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"


const options = [ 
    {
    value: 'EP',
    text: 'Extended Play'
    },
    {
        value: 'LP',
        text: 'Long Play'
    },

] 

const Item = ( {producto}) =>{

    const {cart, addToCart, isInCart } = useContext(CartContext)
    console.log (cart)


    const [cantidad, setCantidad] = useState (1)

    const handleAgregar = () =>{
        const itemToCart = {
            id: producto.id,
            precio: producto.precio,
            nombre: producto.nombre,
            cantidad
        }
        
        console.log(isInCart(producto.id))
        addToCart([...cart, itemToCart])
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
                    <hr/>

                    <Select options={options}/>


                   


                    { isInCart(producto.id) && <p>Este producto ya esta agregado</p> }

                    { isInCart(producto.id)
                     ?<Link to="" className="btn btn-success my-2">Terminar mi Compra</Link>
                     : <Counter 
                    max={producto.stock}
                    counter={cantidad}
                    setCounter= {setCantidad}
                    handleAgregar= {handleAgregar}
                    />
                     
                    
                    }
                    
                     </div>
    )
    
}

export default Item
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"


const Cart= () => {

      const { cart } = useContext(CartContext)

      return(
        <div className="container my-5">
              <hr/>

              <Link className="btn btn-success mx-3" to="/checkout">Terminar mi compra</Link>
              <h2>Tu carrito</h2>

              <hr/>

              { cart.map((producto) =>(
                <div key={producto.id}>

                  <h3>{producto.nombre}</h3>
                  <p> Precio:{producto.precio}</p>
                  </div>
              ))}
            </div>
        )
}

export default Cart

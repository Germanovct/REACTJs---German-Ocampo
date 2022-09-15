import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


const Cart= () => {

      const { cart } = useContext(CartContext)

      return(
            <div className="container my-5">
              <h2>Tu carrito</h2>

              <hr/>

              { cart.map((producto) =>(
                <div key={producto.id}>

                  <h3>{producto.nombre}</h3>
                  <p> Precio:{producto.precio}</p>
                  <hr></hr>


                  </div>
              ))}
            </div>
        )
}

export default Cart

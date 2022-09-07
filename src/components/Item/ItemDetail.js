

const Item = ( {producto}) =>{

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
                    
                    <a className="btn btn-primary">ADD CART</a>

                    </div>
    )
    
}

export default Item
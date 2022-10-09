import { useState } from "react"





const Checkout = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })


   const handleNombre =(e)=>{
    setValues({
        email: values.email,
        direccion: values.direccion,
        nombre: e.target.value
    })
   }

   const handleEmail =(e)=>{
    setValues({
        email: e.target.value,
        direccion: values.direccion,
        nombre: values.nombre
    })
   }


    const handleSubmit =(e) =>{
        e.preventDefault()

        const orden = {
            comprador: values.nombre,
            direccion: values.direccion,
            email: values.email
        }


        console.log ("Submit del form")
        console.log (orden)
    }

    return(

        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit} >
                <input 
                value={values.nombre}
                onChange={handleNombre}
                type={ 'text'} 
                className= "my-3 form-control" 
                placeholder="Tu Nombre"
                />
                <input 
                value={values.email}
                onChange={handleEmail}
                type={ 'email'}
                className= "my-3 form-control"
                placeholder="Email"
                />
                <input
                value={values.direccion}
                 
                type={ 'text'} 
                className= "my-3 form-control" 
                placeholder="Direccion" 
                />


              
                <button type="submit" className="btn btn-primary" >Enviar</button>
            </form>

        </div>


    )
}

export default Checkout
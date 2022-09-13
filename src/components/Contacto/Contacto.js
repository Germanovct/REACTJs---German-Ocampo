


const Contacto = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }


    return(
        <div className="container my-5">
            <h2>Contacto</h2>


            <form onSubmit={handleSubmit}>
                <input
                type={'text'}
                className= 'form-control' 
            
                />
                <button className=" btn btn-primary" tipe='submit'> Enviar</button>
            </form>

            

            
            <hr/>
        </div>


    )

}

export default Contacto
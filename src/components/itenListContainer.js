import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/GetItem"
import ItemList from "./itemList/ItemListContainer"
import { useParams } from "react-router-dom"








const ItenListContainer = () => {

     const [productos, setProductos] = useState ([])
     const [loading, setLoading] = useState (true)

    const { categoryId } = useParams ()
    console.log (categoryId)

     useEffect(() => {
        setLoading(true)
          
    pedirDatos() 
     .then( (res) => {

        if (categoryId === "todos"){
            setProductos(res)
        } else {
            setProductos( res.filter((prod) => prod.category === categoryId) )

        }
         })
         .catch ((error) => {
            console.log(error)
         })
         .finally (() => {
            setLoading(false)
         })

         },[categoryId])

    return(
        <div>
            {
                loading ? <h2>Cargando...</h2>
                :<ItemList productos={productos}/>
            }
            
        </div>
    )

        }
export default ItenListContainer
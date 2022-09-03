import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/GetItem"
import ItemList from "./itemList/ItemList"








const ItenListContainer = () => {

     const [productos, setProductos] = useState ([])

useEffect(() => {
            
    pedirDatos() 
     .then( (res) => {
        setProductos(res)
         })
         .catch ((error) => {
            console.log(error)
         })
         .finally (() => {
            //console.log("Fin del Proceso")
         })

         },[])

    return(
        <div>
            <ItemList productos={productos}/>
        </div>
    )

        }
export default ItenListContainer
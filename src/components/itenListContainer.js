import { useEffect, useState } from "react"

import ItemList from "./itemList/ItemListContainer"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../Firebase/config"






const ItenListContainer = () => {

     const [productos, setProductos] = useState ([])
     const [loading, setLoading] = useState (true)

    const { categoryId } = useParams ()
    console.log (categoryId)

     useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
        getDocs(productosRef)
           .then((resp) => {
            const prod = resp.docs.map( (doc) => doc.data()  )
            console.log (prod)

            setProductos(prod)

           })
           .finally(() => {
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
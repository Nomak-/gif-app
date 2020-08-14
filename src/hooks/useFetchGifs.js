import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => { //la categoria cae aca, la enie desde el gidgrid.js LINEA 9

    const [estado, setEstado] = useState({
        data: [],
        loading: true
    })


    useEffect( () => { //ejecuta la funcion indicada cuando el componente es renderizado por primera vez, equivalente a === componentdidmount
        getGifs( category )
            .then(imgs => setEstado({
                data: imgs,
                loading: false
            })) // cuando nos trae las imagenes, las agrega con setImages
    }, [category]) //el array es para incluir dependencias

    return estado
}
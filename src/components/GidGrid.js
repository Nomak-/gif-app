import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem'

export const GifGrid = ({ category }) => {

    const {data:imagenes, loading} = useFetchGifs(category) //le envio la categoria a mi custom 

    return (
        //operador ternario, evalua la primera opcion verdadera y lo ejecuta, no sigue validando es mas rapido que el DOS PUNTOS
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Cargando...</p>} 
        <div className="card-grid">
            
          
            { imagenes.map( gifs =>
                <GifGridItem {...gifs} key={gifs.id}/> 
               // 
            )}

        </div>
        </>
    )
}
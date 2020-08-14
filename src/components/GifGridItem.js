import React from 'react';

export const GifGridItem = ({title, url}) => {
    return(
        <div className="card animate__animated animate__bounceInUp">
        <li> <img src={url} alt={title} className='images-gif'></img> <p>{title}</p></li>
        </div>
    )
}

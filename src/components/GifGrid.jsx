import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs(category);



    return (
      <>
          <h3>{ category }</h3>
          {isLoading && (<h2>cargando....</h2>)}
          <div className='card-grid'>
              {
                  images.map( image => (
                     <GifItem
                         key={image.id}
                         {...image}
                     />
                  ))
              }
          </div>
      </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if(!posterPath)return null;
  return (
    <div className='w-48 px-2 '>
      <img  className='rounded-md'alt='img' src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;

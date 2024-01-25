import { useState } from 'react';

const VideoTitle = ({ title, overview }) => {
  const [playButton, setPlayButton] = useState(false);
  const handleButtonClick = () => {
    setPlayButton(!playButton);
  };
  return (
    <div className='w-screen aspect-video py-56 px-28 absolute text-white bg-gradient-to-r from-black '>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='py-8 text-xl w-1/2'>{overview}</p>
      <div className='mx-0'>
        <button
          onClick={handleButtonClick}
          className='bg-white px-10 py-2 rounded-md  text-black hover:bg-gray-400 text-xl'
        >
          {' '}
          {!playButton ? '▶' : '⏸'} Play
        </button>
        <button className='text-black bg-gray-500 mx-5 px-10 py-2 rounded-md  hover:bg-gray-400 text-xl'>
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

import React, { useRef } from 'react';
import lang from '../utils/langConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/Redux Slices/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  //Search Movie in TMDb

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //Make an API call to get Movie Results

    const gptQuery =
      'Act as a Movie Recommendation System and Suggest some movies for the query : ' +
      searchText.current.value +
      '.only give me names of 5 movies , comma separated like the example result given ahead.Example result : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (gptResults.choices) {
      //Show nothing if nothing found on search
    }

    //
    const gptMovies = gptResults.choices[0]?.message?.content.split(',');

    //Search for each Movie in TMDB

    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    //[promise, promise, promise, promise, promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className='pt-[10%] justify-center flex'>
      <form
        className='w-1/2  grid grid-cols-12 bg-black bg-opacity-55 '
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type='text'
          className='p-4 m-4 col-span-8 text-xl '
          placeholder={lang[langKey].gptSearchHolder}
        />{' '}
        <button
          onClick={handleGptSearchClick}
          className='py-2 px-2 m-4 bg-red-600 rounded-md text-white col-span-4 text-xl hover:bg-red-500'
        >
          {lang[langKey].search}
        </button>
        <div className='bg-red-600 text-white w-max rounded-sm m-4 p-2 '>
          The GPT API is chargeable. The API key expires after a few number of
          requests and needs to <br /> be changed frequently. Hence, the
          GPT-search might not be serviceable at moments when <br /> the API key
          expires.
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;

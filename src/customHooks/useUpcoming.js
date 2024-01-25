import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/Redux Slices/moviesSlice';
import { useEffect } from 'react';

const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.movies.upcomingMovies);
  const upcomingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcoming && upcomingMovies();
  }, []);
};

export default useUpcoming;

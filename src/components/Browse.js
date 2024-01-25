import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTrendingMovies from '../customHooks/useTrendingMovies';
import useUpcoming from '../customHooks/useUpcoming';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcoming();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {' '}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

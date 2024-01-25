import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/Redux Slices/userSlice';
import { LOGO_URL, SUPPORTED_LANG, USER_URL } from '../utils/constants';
import { toggleGptSearchView } from '../utils/Redux Slices/gptSlice';
import { changeLanguage } from '../utils/Redux Slices/langSlice';

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPT = () => {
    //Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=' flex justify-between absolute px-6 w-full h-28 shadow-lg bg-gradient-to-b from-black z-10 flex-col md:flex-row'>
      <img className='  mx-30 w-48 ' src={LOGO_URL} alt='logo' />
      {user && (
        <div className='flex p-2'>
          <h1 className='my-10 mx-7 font-semibold text-2xl text-white'>
            Welcome, {user?.displayName}
          </h1>
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className='text-white bg-gray-600 mx-3 mt-10 mb-5 px-5 rounded-sm '
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className='text-white bg-purple-950 mt-10 mb-5 px-5 rounded-sm hover:bg-purple-700 '
            onClick={handleGPT}
          >
           {!showGptSearch?'GPT search':'Home Page'} 
          </button>
          <img
            className='w-[32px] h-[32px] my-10 mx-7 rounded-sm'
            alt='userIcon'
            src={USER_URL}
          />
          <button
            className='bg-red-600 text-white h-[32px] my-10 px-3 rounded-sm hover:bg-red-500'
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidate } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/Redux Slices/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleClickButton = () => {
    //validate

    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ' - ' + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage('You are not a Authorized user ');
        });
    }
  };
  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className='flex'>
      <Header />
      <div className='absolute'>
        <img
          src={BG_URL}
          alt='bg'
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=' w-3/12 h-6/12 p-12 my-36 mx-auto right-0 left-0 absolute text-white bg-black  bg-opacity-80'
      >
        <h1 className='font-bold text-3xl py-4 m-2'>
          {isSignInForm ? 'Sign In ' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <div>
            {' '}
            <input
              ref={name}
              type='text'
              placeholder='Name'
              className='p-2 m-2 w-full  text-black rounded-sm'
            />{' '}
          </div>
        )}
        <input
          ref={email}
          type='email'
          placeholder='Email Address'
          className='p-2 m-2 w-full  text-black rounded-sm'
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-2 m-2 w-full text-black rounded-sm'
        />

        <div className='my-4 '>
          <p className='text-red-600 m-2'>{errorMessage}</p>
          <button
            className='p-3 m-2 rounded-lg bg-red-700 w-full hover:bg-red-500'
            onClick={handleClickButton}
          >
            Get Started
          </button>
        </div>
        <>
          {' '}
          <div className='m-2' onClick={handleToggle}>
            {isSignInForm ? (
              <div>
                <span className='text-gray-400'>New to Netflix?</span>
                <span className='hover:border-b-2 border-white cursor-pointer'>
                  Sign Up
                </span>
              </div>
            ) : (
              <div>
                <span className='text-gray-400'>Already a user?</span>
                <span className='hover:border-b-2 border-white cursor-pointer'>
                  Sign In
                </span>
              </div>
            )}
          </div>
        </>
      </form>
    </div>
  );
};

export default Login;

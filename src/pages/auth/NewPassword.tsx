// importar librerias 
import { useState, useEffect, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { clientAxios } from '../../config/axios';
import NotFound404 from '../../components/NotFound404';
import axios, { AxiosError } from 'axios';


type errorAxios = {
  message: string
}

export default function NewPassword() {

  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [verifyPassword, setVerifyPassword] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  const params = useParams();
  const { token } = params;
  
  useEffect( () => {
    const verifyToken = async () => {
      try {
        const response = await clientAxios(`/users/forgot-password/${token}`);
        const { message } = response.data;
        toast.success(message, {duration: 4500});
        setTokenValid(true);
      } catch (error) {
        if(axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<errorAxios>;
          if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
            // Si hay un mensaje de error en la respuesta del servidor, lo mostramos
            const errorMessage = axiosError.response.data.message;
            toast.error(errorMessage, {duration: 4500});
            return; // Importante: salir de la función después de manejar el error
          }
        }
        toast.error('An unexpected error has occurred, try later', {duration: 4500});
      }
    }
    verifyToken();
  }, []);

  const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(password === '' || passwordRepeat === '') {
      toast.error('Please, the fields cannot be empty.', {duration: 4500});
      return;
    }
    if(password.length < 8 ) {
      toast.error('Password must contain at least 8 characters.', {duration: 4500});
      return;                                                      
    }
    if(password !== passwordRepeat) {
      toast.error('Passwords do not match, try again.', {duration: 4500});
      return;  
    }
    
    try {
      const response = await clientAxios.post(`/users/forgot-password/${token}`, {password});
      const { message } = response.data;
      setVerifyPassword(true);
      toast.success(message, { duration: 4500 });
      setPassword('');
      setPasswordRepeat('');
    } catch (error) {
      if(axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<errorAxios>;
        if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
          // Si hay un mensaje de error en la respuesta del servidor, lo mostramos
          const errorMessage = axiosError.response.data.message;
          toast.error(errorMessage, {duration: 4500});
          return; // Importante: salir de la función después de manejar el error
        }
      }
      toast.error('An unexpected error has occurred, try later', {duration: 4500});
    }
  };
  

  
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="w-full h-[100vh] flex md:items-center md:justify-center px-2 bg-gray-50">
        {tokenValid ? (
          <div className="border border-gray-200 md:my-0 my-5 md:w-auto w-full grid md:grid-cols-2 md:items-center gap-5 rounded-lg bg-white md:shadow-lg" data-aos="fade-left">
            <div className="md:p-10 px-5 py-10 h-full grid items-center">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-9 text-orange-600 drop-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Verify your new password
                </h2>
                <p className='text-center text-sm text-gray-500'>Set a new password and regain your access to our app</p>
              </div>

              <div>
                <form className="space-y-6 mt-7" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      New Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder='Enter your new password...'
                        autoComplete="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password2" className="block text-sm font-medium leading-6 text-gray-900">
                      Confirm New Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password2"
                        name="password2"
                        type="password"
                        placeholder='Confirm your new password...'
                        autoComplete="current-password"
                        value={passwordRepeat}
                        onChange={e => setPasswordRepeat(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 bg-orange-600 hover:bg-orange-500 hover:transition-all"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
                {verifyPassword && (
                    <p className="text-center mt-7">
                    <Link to="/login" className="text-sm font-semibold text-gray-900">
                      Go Back Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </p>
                )}
              </div>
            </div>
            <img 
              src="/img/auth/undraw_two_factor_authentication_namy.png" 
              alt="undraw_two_factor_authentication_namy" 
              loading="lazy"
              className="object-contain w-96 h-96 hidden md:block rounded-r-lg" 
            />
          </div>
        ) : (
          <NotFound404/>
        )}
      </div>
    </>
  )
}

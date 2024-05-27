// importar librerias 
import { Link } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { clientAxios } from '../../config/axios';

type errorAxios = {
  message: string
}

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    // validar por campos vacios
    if([email.trim(), password.trim()].includes('')) {
      toast.error('Please, the fields cannot be empty.', {duration: 4500});
      return;
    }

    try {
      const { data } = await clientAxios.post('/users/login', {email, password});
      localStorage.setItem('token', data.token);
      setEmail('');
      setPassword('');
      window.location.href = '/';
    } catch (error) {
      // Si es un error de Axios
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<errorAxios>;
        if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
          // Si hay un mensaje de error en la respuesta del servidor, lo mostramos
          const errorMessage = axiosError.response.data.message;
          toast.error(errorMessage, {duration: 4500});
          return; // Importante: salir de la función después de manejar el error
        }
      }
      // Si no es un error de Axios o no hay un mensaje específico en la respuesta, mostramos un mensaje genérico de error
      toast.error('An unexpected error has occurred, try again later.', {duration: 4500});
    }
  }
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="w-full h-[100vh] flex md:items-center md:justify-center px-2 bg-gray-50">
        <div className="border border-gray-200 md:my-0 my-5 md:w-auto w-full grid md:grid-cols-2 gap-5 rounded-lg bg-white md:shadow-lg" data-aos="fade-left">
          <div className="md:p-10 px-5 py-10 h-full grid items-center">
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-9 text-orange-600 drop-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className='text-center text-sm text-gray-500'>And discover the promotions we have for you</p>
            </div>

            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder='Enter your email...'
                      autoComplete="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <Link to="/auth/forgot-password" className="font-semibold text-orange-600 hover:text-orange-500">Forgot password?</Link>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder='Enter your password...'
                      autoComplete="current-password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 bg-orange-600 hover:bg-orange-500 hover:transition-all"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <Link to="/auth/create-account" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
                  Create Account
                </Link>
              </p>
              <p className="text-center mt-5">
                <Link to="/" className="text-sm font-semibold text-gray-900">
                  Go Back Home <span aria-hidden="true">&rarr;</span>
                </Link>
              </p>
            </div>
          </div>
          <img 
            src="/img/auth/picture-of-shirt.jpg" 
            alt="Man with black hat and glasses with backpack and brown sweater" 
            loading="lazy"
            className="object-cover w-full h-[40rem] hidden md:block rounded-r-lg" 
          />
        </div>
      </div>
    </>
  )
}

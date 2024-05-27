// importar librerias 
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast';
import { clientAxios } from '../../config/axios';
import axios, { type AxiosError } from "axios";

type ErrorResponse = {
  message: string;
}

export default function Login() {

  const [email, setEmail] = useState('');


  const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(email === '' || email.length < 5) {
      console.log('campos vacios');
      toast.error('Please, the fields cannot be empty.', {duration: 4500});
      return;
    }
    try {
      const { data } = await clientAxios.post('/users/forgot-password', {email});
      // enviamos el mensaje
      toast.success(data.message, {duration: 4500});
      // vaciamos el campo
      setEmail('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          const errorMessage = axiosError.response.data.message;
          toast.error(errorMessage, {duration: 4500});
        }
      }
    }
  }
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />    
      <div className="w-full h-[100vh] flex md:items-center md:justify-center px-2 bg-gray-50">
        <div className="border border-gray-200 md:my-0 my-5 md:w-auto w-full md:grid md:grid-cols-2 items-center md:gap-5 rounded-lg bg-white md:shadow-lg" data-aos="fade-down">
          <div className="md:py-10 md:px-7 px-5 py-10 h-full grid items-center">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full text-orange-600 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>

              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Reset your password
              </h2>
              <p className='text-center text-sm text-gray-500'>Regain access to your account and continue exploring</p>
            </div>

            <div className='md:mt-5'>
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
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Send 
                  </button>
                </div>
              </form>

              <div className="md:flex md:justify-between mt-7 space-y-8 md:space-y-0 md:gap-5">
                <p className="text-center text-sm text-gray-500">
                  Are you a member?{' '}
                  <Link to="/auth/login" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
                    Sign in
                  </Link>
                </p>
                <p className="text-center text-sm text-gray-500">
                  Not a member?{' '}
                  <Link to="/auth/create-account" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
                    Create account 
                  </Link>
                </p>
              </div>
              <p className="text-center mt-5">
                <Link to="/" className="text-sm font-semibold text-gray-900">
                  Go Back Home <span aria-hidden="true">&rarr;</span>
                </Link>
              </p>
            </div>
          </div>
          <img 
            src="/img/auth/undraw_Forgot_password.png" 
            alt="undraw_Forgot_password" 
            loading="lazy"
            className="object-contain w-96 h-96 hidden md:block rounded-r-lg" 
          />
        </div>
      </div>
    </>
  )
}

// importar librerias 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FormEvent } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { clientAxios } from '../../config/axios';
import axios, { type AxiosError } from 'axios';

type errorAxios = {
  message: string
}

export default function Register() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validar por campos vacios
    if([name.trim(), lastName.trim(), email.trim(), password.trim(), repeatPassword.trim()].includes('')) {
      toast.error('Please, the fields cannot be empty.', {duration: 4500});
      return;
    }
    // validar por password match
    if(password !== repeatPassword) {
      toast.error('Error, passwords do not match.', {duration: 4500});
      return;
    }
    // contraseña larga
    if(password.length < 8) {
      toast.error('The password is too short, make sure you put at least 8 characters.', {duration: 4500});
      return;
    }

    try {
      const response = await clientAxios.post('/users/create-account', {name, lastName, email, password});
      const { message } = response.data;
      toast.success(message, { duration: 5500 });
      // Resetear los campos después de un registro exitoso
      setName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');
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
      <div className="w-full md:h-[100vh] flex md:items-center md:justify-center px-2 bg-gray-50 my-12 lg:my-16">
        <div className="border border-gray-200  md:w-auto w-full grid md:grid-cols-2 gap-5 rounded-lg bg-white md:shadow-lg" data-aos="fade-right">
          <div className="md:p-10 px-5 py-10 h-full grid items-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full text-orange-600 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>

              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create your account
              </h2>
              <p className='text-center text-sm text-gray-500'>And be part of this experience by purchasing our products</p>
            </div>

            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className='md:grid md:grid-cols-2 md:gap-4 mt-8 space-y-5 md:space-y-0'> 
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='Enter your name...'
                        autoComplete="name"
                        value={name}
                        onChange={ e => setName(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        autoComplete="last_name"
                        value={lastName}
                        onChange={ e => setLastName(e.target.value)}
                        placeholder='Enter your last name...'
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

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
                      value={email}
                      onChange={ e => setEmail(e.target.value)}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={ e => setPassword(e.target.value)}
                      placeholder='Enter your password'
                      autoComplete='new-password'
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password2" className="block text-sm font-medium leading-6 text-gray-900">
                      Repeat Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password2"
                      name="password2"
                      type="password"
                      value={repeatPassword}
                      onChange={ e => setRepeatPassword(e.target.value)}
                      placeholder='Repeat your password...'
                      autoComplete='new-password'
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="submit"
                    value='Create Account'
                    className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  />
                </div>
              </form>

              <div className="md:flex md:justify-between mt-7 space-y-7 md:space-y-0">
                <p className="text-center text-sm text-gray-500">
                  Are you a member?{' '}
                  <Link to="/auth/login" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
                    Sign in
                  </Link>
                </p>
                <p className="text-center text-sm text-gray-500">
                  Forgot Password?{' '}
                  <Link to="/auth/forgot-password" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
                    Reset
                  </Link>
                </p>
              </div>
              <p className="text-center mt-7">
                <Link to="/" className="text-sm font-semibold text-gray-900">
                  Go Back Home <span aria-hidden="true">&rarr;</span>
                </Link>
              </p>
            </div>
          </div>
          <img 
            src="/img/auth/image-of-create-account.jpg" 
            alt="Woman holding notebook with green and orange plaid blouse" 
            loading="lazy"
            className="object-cover w-full h-[47rem] hidden md:block rounded-r-lg" 
          />
        </div>
      </div>
    </>
  )
}

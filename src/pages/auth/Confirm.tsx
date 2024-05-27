import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound404 from "../../components/NotFound404";
import axios, { type AxiosError } from "axios";
import { clientAxios } from "../../config/axios";

type ErrorResponse = {
  message: string;
}

export default function Confirm() {

  const [verifyAccount, setVerifyAccount] = useState(false);
  const [load, setLoad] = useState(true);
  const [alert, setAlert] = useState({message: '' });
  const params = useParams();
  const { id } = params;

  useEffect( () => {
    const verifiyAccount = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/users/confirm/${id}`;
        // hacemos axios a la url
        const { data } = await clientAxios(url);
        // seteamos el estado de cuenta verificada
        setVerifyAccount(true);
        // seteamos la alerta con el mensaje
        setAlert({message: data.message});

      } catch (error) {

        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<ErrorResponse>;
          if (axiosError.response) {
            const errorMessage = axiosError.response.data.message;
            return errorMessage;
          }
        }
      }
      setLoad(false);
    }
    verifiyAccount();
  }, []);

  return (
    <section className="relative h-[100vh] flex items-center justify-center isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      {verifyAccount && !load ? (
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="flex gap-3 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-orange-600 drop-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            <p className="text-orange-600 font-bold text-2xl">Trendify</p>
          </div>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Thank you for confirming your account! We are glad to have you as part of our clients. 
                If you have any questions or need help, please do not hesitate to contact us.”
              </p>
            </blockquote>
            <div className="flex justify-center items-center w-full">
              <div className="flex justify-center items-center mt-5 bg-green-50 border rounded-md p-3 gap-3 border-green-200 w-96">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                <p className="font-semibold text-green-600">{alert.message}</p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
              <Link to="/login" className="text-sm font-semibold text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-12 w-12 object-cover bg-black rounded-full"
                src="/img/aboutUs/person-2-our-team.jpg"
                alt="Person in red sweater posing"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Marco Cruz</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of Trendify.com</div>
              </div>
            </figcaption>
          </figure>
        </div>
      ) : (
        <NotFound404/>
      )}
    </section>
  );
}

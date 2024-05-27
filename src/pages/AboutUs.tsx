import { useState, useEffect} from 'react';



const links = [
    { name: 'Opportunities', href: '#' },
    { name: 'Learning Hub', href: '#' },
    { name: 'Our Culture', href: '#' },
    { name: 'Discover Team', href: '#' },
];
const stats = [
    { name: 'Offices worldwide', value: '+5' },
    { name: 'Full-time colleagues', value: '+300' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
];
const people = [
    {
        name: 'Olivia Williams',
        role: 'Developer FrontEnd',
        imageUrl:
            '/img/aboutUs/person-1-our-team.jpg',
    },
    {
        name: 'Marco Cruz',
        role: 'CEO / FullStack Dev.',
        imageUrl:
            '/img/aboutUs/person-2-our-team.jpg',
    },
    {
        name: 'Ethan Johnson',
        role: 'Sales Manager',
        imageUrl:
            '/img/aboutUs/person-3-our-team.jpg',
    },
    {
        name: 'Emily Taylor',
        role: 'Developer BackEnd',
        imageUrl:
            '/img/aboutUs/person-4-our-team.jpg',
    },
];
const numbers = [
    { id: 1, name: 'Sales of items in the store', value: '5000', text: 'mil' },
    { id: 2, name: 'satisfied customers and good testimonials', value: '6000', text: 'mil' },
    { id: 3, name: 'Monthly user registration', value: '299', text: 'users' },
];

export default function AboutUs() {

    const [animatedStats, setAnimatedStats] = useState(numbers.map(stat => ({
        ...stat,
        animatedValue: 0 // Inicializamos todos los valores animados en 0
    })));

    useEffect(() => {
        const animationDuration = 5000; // Duración de la animación en milisegundos

        const interval = setInterval(() => {
            // Incrementar el valor animado de cada número
            setAnimatedStats(prevStats => prevStats.map(stat => {
                const newValue = stat.animatedValue + Math.ceil(Number(stat.value) / (animationDuration / 100));
                return {
                    ...stat,
                    animatedValue: newValue >= Number(stat.value) ? Number(stat.value) : newValue
                };
            }));
        }, 70); // Intervalo para actualizar la animación (100 ms)

        // Devolver una función de limpieza para limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, []); // Se ejecuta solo una vez al montar el componente


    return (
        <>
            {/* Heading o encabezado  */}
            <div className="relative isolate overflow-hidden py-24 sm:py-32">
                <img
                    src="/img/aboutUs/background-about-us.jpg"
                    alt="men sit down with a computer picture"
                    data-aos="zoom-in"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center brightness-50"
                />
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffb980] to-[#ff8383]  opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffb980] to-[#ff8383] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0" >
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" data-aos="fade-right">About Us</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300" data-aos="fade-right">
                            At trendify we believe in individuality and personal expression through fashion.
                            We are proud to offer you a wide range of t-shirts with unique and personalized designs that
                            allow you to stand out from the crowd and express your unique style.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href} data-aos="fade-right">
                                    {link.name} <span aria-hidden="true" data-aos="fade-right">&rarr;</span>
                                </a>
                            ))}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse" data-aos="fade-right">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* Nuestro Team leader */}
            <div className="mt-16 md:mt-28 mx-auto max-w-7xl">
                <div className="relative">
                    <div className="absolute w-full left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                        <div className="aspect-[1155/678] bg-gradient-to-tr from-[#ffb980] to-[#ff8383] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
                    </div>
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto grid max-w-7xl gap-x-8 items-center gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
                            <div className="max-w-2xl" data-aos="fade-right">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Our team is made up of passionate creatives who strive to bring you the latest design trends and the highest quality in products.
                                </p>
                            </div>
                            <ul role="list" className="grid gap-6 sm:grid-cols-2 xl:col-span-2 cursor-pointer">
                                {people.map((person) => (
                                    <li key={person.name} data-aos="fade-down">
                                        <div className="flex items-center gap-x-6 bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-md hover:transition-all p-4 rounded-md shadow-sm">
                                            <img className="h-16 w-16 rounded-full object-cover border border-gray-200" src={person.imageUrl} alt="" />
                                            <div>
                                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-red-600">{person.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Numeros overview */}
            <div className="mt-20 md:mt-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {animatedStats.map(stat => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4" data-aos="fade-down">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    +{stat.animatedValue} {stat.text}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Mision y Vision*/}
            <div className="mt-12 md:mt-20 mx-auto max-w-7xl px-6 md:px-8">
                <div className="py-10 grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-orange-600 font-semibold" data-aos="fade-down">Mision</p>
                        <h3 className="font-bold text-3xl" data-aos="fade-down">Offer a wide variety of unique and high quality designs.</h3>
                        <p className="text-gray-500" data-aos="fade-down">
                            We are committed to staying at the forefront of the latest trends and technologies in t-shirt printing,
                            ensuring our customers receive products that not only meet, but also exceed their expectations.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-orange-600 font-semibold" data-aos="fade-down">Vision</p>
                        <h3 className="font-bold text-3xl" data-aos="fade-down">Undisputed leaders in the personalized <br /> t-shirt market.</h3>
                        <p className="text-gray-500" data-aos="fade-down">
                            We are committed to staying at the forefront of the latest trends and technologies in t-shirt printing,
                            ensuring our customers receive products that not only meet, but also exceed their expectations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Formulario contacto */}
            <div className="mx-auto mt-12 md:mt-20 max-w-7xl md:px-32" data-aos="fade-down">
                <div className="isolate bg-white border border-gray-200 mdrounded-md px-6 py-24 sm:py-32 lg:px-8 shadow">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl" data-aos="fade-down">Contact Us</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600" data-aos="fade-down">
                            Contact us by email and tell us your questions or suggestions about the services available to you on this website.
                        </p>
                    </div>
                    <form className="mx-auto mt-16 max-w-xl md:mt-12">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900" data-aos="fade-down">
                                First name
                                </label>
                                <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    data-aos="fade-down"
                                    placeholder="Enter your name..."
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900" data-aos="fade-down">
                                Last name
                                </label>
                                <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    data-aos="fade-down"
                                    placeholder="Enter your last name..."
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900" data-aos="fade-down"> 
                                Email
                                </label>
                                <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    data-aos="fade-down"
                                    placeholder="Enter your email..."
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900" data-aos="fade-down">
                                Message
                                </label>
                                <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    data-aos="fade-down"
                                    placeholder="Enter your mesage..."
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                data-aos="fade-down"
                                className="block w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

import Clothes from "../components/Clothes"
import LogoClouds from "../components/LogoClouds"

const Store = () => {
    return (
        <>
            <header className="relative isolate overflow-hidden">
                <div className="h-[35rem] lg:h-[40rem] relative border-b border-gray-200" data-aos="fade-down">
                    <img
                        src="/img/store/girl-with-shirt-in-hand.jpg"
                        alt="men sit down with a computer picture"
                        loading="lazy"
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
                    <div className="flex flex-col justify-center md:justify-center items-start md:items-center space-y-8 h-full px-5 py-12 md:py-0">
                        <h1 className="font-bold text-5xl text-white" data-aos="fade-down">Get 25% off during our one-time sale</h1>
                        <h3 className="text-gray-300 text-xl md:text-center" data-aos="fade-down">Most of our products are limited releases that won't come back. <br />Get your favorite items while they're in stock.</h3>
                        <a
                            href="/store"
                            data-aos="fade-down"
                            className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-black hover:transition-all"
                        >
                            Get access to our one-time sale
                        </a>
                    </div>
                </div>
            </header>

            <LogoClouds/>

            <section className="mt-12 md:mt-8 mx-auto max-w-7xl px-2 md:py-20 md:px-16">
                <div className="grid md:grid-cols-2 md:items-center gap-12">
                    <div className="space-y-5">
                        <h2 className="font-bold text-4xl" data-aos="fade-right">We built our business on great customer service</h2>
                        <p className="text-gray-500 text-lg mb-5" data-aos="fade-right">
                            In our business, the fundamental foundation is extraordinary customer service.
                            We strive every day to exceed your expectations, providing you with personalized attention,
                            quick solutions and friendly treatment.
                        </p>
                    </div>
                    
                    <div>
                        <img
                            src="/img/store/workers-giving-support-in-office.jpg"
                            alt="workers giving support in office"
                            data-aos="fade-down"
                            className="rounded-lg shadow-lg h-96 object-cover w-full"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:items-center md:justify-center mt-16 md:mt-24">
                    <div className="flex gap-4 items-center border-b md:border-r md:border-b-0 border-gray-200 pb-5 md:pb-0" data-aos="zoom-in-up">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-orange-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        <div className="flex flex-col-reverse">
                            <h3 className="font-semibold text-lg" data-aos="fade-down">Renew your style with us</h3>
                            <p className="text-gray-500" data-aos="fade-up">Guarantee and return with us in 30 days</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center border-b md:border-r md:border-b-0 border-gray-200 pb-5 md:pb-0" data-aos="zoom-in-up">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-orange-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>

                        <div className="flex flex-col-reverse">
                            <h3 className="font-semibold text-lg" data-aos="fade-down">Free shipping on all your purchases</h3>
                            <p className="text-gray-500" data-aos="fade-up">Your comfort is our priority</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center" data-aos="zoom-in-up">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-orange-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <div className="flex flex-col-reverse">
                            <h3 className="font-semibold text-lg" data-aos="fade-down">Free shipping on all your purchases</h3>
                            <p className="text-gray-500" data-aos="fade-up">Your comfort is our priority</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-2 md:px-5 mt-16 md:mt-8">
                <div className="space-y-4 border-b border-grau-200 py-5">
                    <h3 className="text-5xl font-bold md:text-center" data-aos="fade-up">Store</h3>
                    <p className="text-gray-500 md:text-center" data-aos="fade-up">Your favorite section, here you can find a variety of models and garments with excellent quality and design.</p>
                </div>

                <Clothes/>

            </section>


        </>
    )
}

export default Store
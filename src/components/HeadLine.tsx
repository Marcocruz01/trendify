
export default function HeadLine() {
  return (
    <div className="container mx-auto lg:max-w-5xl py-10">
      <div className="grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="z-0 mt-1 text-2xl font-semibold text-white sm:text-slate-900 md:text-5xl" data-aos="fade-up">
            Give your life a better way to <br/> {''}
            <span className="font-bold bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text" data-aos="fade-up">dress with style</span>
          </h1>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img src="/img/headline/headline-image-01.jpg" alt="model with green windbreaker jacket " className="w-full h-full object-cover md:rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full shadow-lg" loading="lazy"/>
          <img src="/img/headline/headline-image-02.jpg" alt="model wearing modern vintage sweater with stripes " className="hidden w-full h-52 object-cover md:rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32 shadow-lg" loading="lazy"/>
          <img src="/img/headline/headline-image-03.jpg" alt="models with administrative outfits " className="hidden w-full h-52 object-cover md:rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32 shadow-lg" loading="lazy"/>
        </div>
        <p className="mt-4 px-2 text-slate-500 leading-6 col-start-1 sm:col-span-2 lg:row-start-4 lg:col-span-1" data-aos="fade-up">
          Discover your unique style! Explore our exclusive fashion collection for men and women. Find the latest trends in clothing 
          and accessories that reflect your personality. Welcome to your favorite fashion destination!
        </p>
      </div>
    </div>
  )
}

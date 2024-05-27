import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function FormNewsLetter() {
  return (
    <div className="relative rounded-md isolate  overflow-hidden py-16 sm:py-24 lg:py-32 lg:border lg:border-gray-200" data-aos="zoom-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" data-aos="fade-up">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-500" data-aos="fade-up">
              We will be working so that every week you receive our new offers and articles and are the first to receive our content.
            </p>
            <div className="mt-6 flex flex-col gap-5 lg:flex-row max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only" data-aos="fade-up">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                data-aos="fade-up"
                className="min-w-0 flex-auto rounded-md border border-gray-300 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                data-aos="fade-up"
                className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10" data-aos="fade-left">
                <CalendarDaysIcon className="h-6 w-6 text-gray-500" aria-hidden="true"/>
              </div>
              <dt className="mt-4 font-semibold text-orange-600" data-aos="fade-left">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400" data-aos="fade-left">
                The result of work is not the desire for great work. In the same way, he does not want to rush to the advantage of the family.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10" data-aos="fade-left">
                <HandRaisedIcon className="h-6 w-6 text-gray-500" aria-hidden="true"/>
              </div>
              <dt className="mt-4 font-semibold text-orange-600" data-aos="fade-left">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400" data-aos="fade-left">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ffb980] to-[#ff8383] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
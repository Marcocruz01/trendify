import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Cloud security',
    description:
      'Ensuring the safety and integrity of your data in the cloud is paramount. Our robust cloud security measures employ state-of-the-art encryption.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure Data',
    description:
      'Your data is the lifeblood of your business and its security is non-negotiable. We employ end-to-end encryption techniques.',
    icon: LockClosedIcon,
  },
  {
    name: 'Data update',
    description:
      'Keeping your data up-to-date and relevant is essential to remaining competitive in today´s fast-paced marketplace.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'In an era of sophisticated cyber threats, traditional security measures are no longer sufficient, Our advanced security solutions.',
    icon: FingerPrintIcon,
  },
]

export default function Feature() {
  return (
    <div className="mt-12 md:mt-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">- Just faster -</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            Everything you need to start shopping in the web app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            In order to browse and enjoy our content, as well as buy new clothing trends among others, 
            you need to create an account/register.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-red-700 to-orange-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
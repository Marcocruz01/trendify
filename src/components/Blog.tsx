const posts = [
    {
      id: 1,
      title: 'Clothing of excellent brand and quality',
      description:
        'When I walked into your store, I was looking for quality and style. And found it. Every item of clothing I have purchased here is from an excellent brand and the quality is exactly what I was looking for.',
      date: 'Ene 10, 2024',
      datetime: '2024-01-16',
      category: 
        { 
            title: 'Developer'
        },
      author: {
        name: 'Michael Foster',
        role: 'Developer in MontoKio',
        imageUrl:
          '/img/blog/blog-person-01.avif',
      },
    },
    {
        id: 2,
        title: 'Garments that exceed my expectations',
        description:
          'I can`t help but be impressed with the quality of the clothes I`ve purchased here. I always hope for the best, but these clothes exceed my expectations every time.',
        date: 'Ene 27, 2024',
        datetime: '2024-01-27',
        category: 
            { 
                title: 'Marketing'
            },
        author: {
          name: 'Jane Smith',
          role: 'Marketing in ContiViewRed',
          imageUrl:
            '/img/blog/blog-person-02.avif',
        },
    },
    {
        id: 3,
        title: 'Unsurpassed brand clothing and quality',
        description:
          'I have never experienced anything like it. From the moment I walked into their store, I knew I was somewhere special.',
        date: 'Feb 03, 2024',
        datetime: '2024-02-03',
        category: 
            { 
                title: 'Supervisor'
            },
        author: {
          name: 'Michael Johnson',
          role: 'Supervisor in Honda',
          imageUrl:
            '/img/blog/blog-person-03.avif',
        },
    }
  ];
  
export default function Blog() {
    return (
        <div className="bg-white py-10 sm:py-16 border border-gray-200 lg:rounded-md">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Testimonials</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    These are customers satisfied with the quality of our products and services.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                    <article key={post.id} className="flex max-w-xl flex-col items-start justify-between" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                            {post.date}
                        </time>
                        <p
                            className="relative rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-600 hover:bg-green-100 cursor-pointer"
                            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        >
                            {post.category.title}
                        </p>
                        </div>
                        <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <p>
                                <span className="inset-0"/>
                                {post.title}
                            </p>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" data-aos="fade-up" data-aos-anchor-placement="top-bottom">{post.description}</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <span className="inset-0" />
                                    {post.author.name}      
                                </p>
                                <p className="text-gray-600">{post.author.role}</p>
                            </div>
                        </div>
                    </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
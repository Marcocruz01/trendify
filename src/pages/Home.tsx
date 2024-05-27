import Blog from "../components/Blog"
import Feature from "../components/Feature"
import FormNewsLetter from "../components/FormNewsLetter"
import HeadLine from "../components/HeadLine"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <>
    <main className='mx-auto'>
        <Hero/>
        <Feature/>
    </main>
    <section className='bg-white border-y border-gray-200 mt-16'>
        <HeadLine/>
    </section>
    <section className="container mx-auto lg:max-w-6xl my-14">
        <Blog/>
    </section>
    <section className="container mx-auto lg:max-w-6xl my-14">
        <FormNewsLetter/>
    </section>
    </>
  )
}

export default Home
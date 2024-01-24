
export default function Home(){
    return (
        <section className="text-gray-400 bg-amber-50 bg-transparent" id="home">
  <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Unlock Your Potential With
        <br className="lg:inline-block" /> <strong>&quot; Technoconnect &quot;</strong>
      </h1>
      <p className="mb-8 leading-relaxed text-slate-600">Our goal is to empower the next generation of tech leaders. Our internship program offers hands-on experience in different fields.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-orange-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:text-xl rounded text-lg">Apply Now</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/img/home.png" loading="lazy" />
    </div>
  </div>
</section>
    )
}
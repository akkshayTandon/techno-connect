
export default function About() {
    return (
        <section id="about" className="text-gray-400 bg-gray-100 body-font">
            <div className="container px-5 py-8 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">

                    <div className="flex flex-col sm:flex-row lg:gap-20 lg:w-[50rem] xl:w-[60rem] xl:gap-24 2xl:gap-28">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="flex flex-col items-center text-center justify-center">
                                <h1 className="font-medium title-font text-black text-xl">About Us</h1>
                                <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                                <p className="text-base text-gray-400">At Technoconnect, we are a privately-owned company, passionate about empowering innovations that shape a better future for businesses and individuals alike.</p>
                            </div>
                        </div>
                        <div className="glass text-gray-500 hover:scale-105 hover:text-white sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 p-4 sm:mt-0 text-center sm:text-left">
                            <p  className="leading-relaxed text-lg mb-4">
                            <strong>Connects students with internships:</strong><br></br> Technoconnect connects students with internships in a variety of fields. This gives students the opportunity to gain experience, skills, and a network.
                            <br></br> <br></br>
                            <strong>Gives students experience, skills, and a network:</strong><br></br> Internships can give students valuable experience in their field. They can also help students develop new skills and build a network of contacts.
                            <br></br><br></br>
                            <strong>Is a great way to start your career:</strong><br></br> Internships can be a great way to start your career. They can help you gain experience, skills, and a network that can help you land your first job.
                            </p>
                            <a className="text-orange-700 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg h-64 overflow-hidden mt-8">
                        <img alt="content" className="object-contain object-center h-full w-full" src="/img/about.png" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}
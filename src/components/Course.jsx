/* eslint-disable react/prop-types */

export default function Course({ imgSrc, courseName }) {
    return (
        <div className="text-gray-400 bg-gray-900 bg-transparent body-font m-4">
            <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col border-2 border-black">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={imgSrc} loading="lazy" />
                <div className="text-center lg:w-4/5 w-full glass p-4 hover:scale-105">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-700 hover:text-[whitesmoke]">{courseName}</h1>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-gray-800 text border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
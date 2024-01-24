import { useRef } from 'react'
import { NavHashLink } from 'react-router-hash-link';

export default function Header() {
    const navRef = useRef();
    const applyButtonRef = useRef();
    const angleUpRef = useRef();
    const angleDownRef = useRef();

    function openMobileMenu() {
        navRef.current.classList.remove("hidden");
        navRef.current.classList.add("flex");

        applyButtonRef.current.classList.remove("hidden");
        applyButtonRef.current.classList.add("inline-flex");

        angleUpRef.current.classList.add("hidden");
        angleDownRef.current.classList.remove("hidden");
    }

    function closeMobileMenu() {
        navRef.current.classList.add("hidden");
        navRef.current.classList.remove("flex");

        applyButtonRef.current.classList.add("hidden");
        applyButtonRef.current.classList.remove("inline-flex");

        angleUpRef.current.classList.remove("hidden");
        angleDownRef.current.classList.add("hidden");
    }

    return (
        <header id="header" className="text-gray-400 bg-slate-100 sm:w-full">
            <div className="container mx-auto flex flex-wrap pt-4 pb-4 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mr-8  md:mb-0">
                    <img src="/logo/technoconnect-logo-edited.png" alt="TechnoConnect-Logo" className="object-contain h-12 dark:bg-white" />
                    <img src="/logo/technoconnect-text-black.png" alt="TechnoConnect-Text" className="h-12
      object-contain" />
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512" onClick={openMobileMenu} ref={angleUpRef} className="md:hidden"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
                <svg className="hidden" onClick={closeMobileMenu} ref={angleDownRef} xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                    <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                </svg>
                <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center hidden bottom-full md:flex" ref={navRef}>  
                    <NavHashLink to="/#header" className="text-black cursor-pointer mr-5 hover:text-orange-600 hover:text-lg">Home</NavHashLink>
                   
                    <NavHashLink to="/#about" className="text-black cursor-pointer mr-5 hover:text-orange-600 hover:text-lg">About</NavHashLink>

                    <NavHashLink to="/#contact" className="text-black cursor-pointer mr-5 hover:text-orange-600 hover:text-lg">Contact</NavHashLink>
                </nav>
                <button ref={applyButtonRef} className="hidden md:block md:mr-4 items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none text-orange-400 rounded text-base hover:text-lg mt-4 md:mt-0">Apply Now!
                </button>
            </div>
        </header>
    )
}
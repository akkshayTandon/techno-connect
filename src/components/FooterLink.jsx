/* eslint-disable react/prop-types */

import { NavHashLink } from "react-router-hash-link"

export default function FooterLink({ navLinkHeading, navLinks }) {
    return (
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest mb-3">{navLinkHeading}</h2>
            <nav className="list-none mb-10 flex flex-col gap-4">
                {navLinks.map((navLink, id) => {
                    return (
                        <li key={id}>
                            <NavHashLink to={navLink.navLinkSrc} className="text-gray-400 hover:text-white">{navLink.navLinkName}</NavHashLink>
                        </li>
                    )
                })}
            </nav>
        </div>
    )
}
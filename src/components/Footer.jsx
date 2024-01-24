import FooterLink from './FooterLink';

export default function Footer() {
  const navLinksArray = [
    {
      navLinkHeading: "Find More",
      navLinks: [
        {
          navLinkName: "Home",
          navLinkSrc: "/#header"
        },
        {
          navLinkName: "About",
          navLinkSrc: "/#about"
        },
        {
          navLinkName: "Courses",
          navLinkSrc: "/courses#header"
        }
      ]
    },
    {
      navLinkHeading: "Follow Us",
      navLinks: [
        {
          navLinkName: "LinkedIn",
          navLinkSrc: ""
        },
        {
          navLinkName: "Telegram",
          navLinkSrc: ""
        },
        {
          navLinkName: "YouTube",
          navLinkSrc: ""
        }
      ]
    },
    {
      navLinkHeading: "Support",
      navLinks: [
        {
          navLinkName: "1934 Vishal Vihar Dubbaga, Thakurganj, Lucknow - 226003",
          navLinkSrc: ""
        },
        {
          navLinkName: "support@technoconnect.io",
          navLinkSrc: ""
        },
        {
          navLinkName: "+91 63898 86563",
          navLinkSrc: ""
        }
      ]
    }
  ];

  return (
    <footer id="contact" className="text-gray-400 bg-gray-900 body-font md:relative">
      <div className="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col md:pl-0">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white md:absolute lg:static lg:p-5 top-0 p-7">
            <img src="/logo/technoconnect-logo-edited.png" alt="TechnoConnect-Logo" className="object-contain h-11" />
            <img src="/logo/technoconnect-text-white.png" alt="TechnoConnect-Text" className="h-12
      object-contain" />
          </a>
          <p className="mt-0 text-sm text-gray-400 md:pl-10">Our goal is to empower the next generation of tech leaders. Our internship program offers hands-on experience in different fields.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {navLinksArray.map((navLink, id) => {
            return <FooterLink key={id} navLinkHeading={navLink.navLinkHeading} navLinks={navLink.navLinks}></FooterLink>
          })}
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap justify-center items-center flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">Copyright © 2024 Technoconnect — All rights reserved by <strong>Technoconnect IT Solutions Pvt. Ltd.</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
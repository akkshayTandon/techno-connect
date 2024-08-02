import { Footer, HeroSection, Navbar, Team } from "react-hartan"
import { menuList, logoData, buttonText } from "./ComponentsData/NavbarData"
import { heroButtonText, heroAboutText, heroHeadText } from "./ComponentsData/HeroSectionData"
import { aboutHeadText, aboutContentText } from "./ComponentsData/AboutUsData"
import { servicesHeadingText, servicesCaptionText, servicesArray } from "./ComponentsData/OurServicesData"
import { chooseUsCards, chooseUsHeadText } from "./ComponentsData/WhyChooseUsData"
import { contactUsCards, contactUsHeadText } from "./ComponentsData/ContactUsData"
import { footerLinksArray } from "./ComponentsData/FooterData"
import Firefly from "./Components/Firefly"
import "./App.css"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar navList={menuList} logoName={logoData.logoName} logoImgSrc={logoData.logoImgSrc} buttonText={buttonText} userHeaderStyle="navbar-bg" userLogoStyle="navLogo" userNavListItemStyle="techno-orange-theme" userButtonStyle="bg-gray-800" userSideBarStyle="sidebar-z-index" ></Navbar>

      <HeroSection heroHeadName={heroHeadText} heroAbout={heroAboutText} buttonText={heroButtonText} userHeroSectionStyle="hero-section" userHeroContentStyle="hero-content" userButtonStyle="bg-gray-800 hero-section-btn" imgSrc="/img/hero-section.svg" imgAlt="Technoconnect" id="home"></HeroSection>

      <Team id="about" teamSectionHeading="About Us" userTeamStyle="about-us-heading-bg" userTeamDetailsCaptionStyle="about-us-heading" userTeamMembersStyle="display-none"></Team>

      <HeroSection heroHeadName={aboutHeadText} heroAbout={aboutContentText} userHeroSectionStyle="about-us" userHeroContentStyle="about-us-content" imgSrc="img/about-us.png" userButtonStyle="display-none"></HeroSection>

      <Firefly></Firefly>

      <Team id="services" teamSectionHeading={servicesHeadingText} teamSectionContent={servicesCaptionText} memberList={servicesArray} userTeamStyle="our-services" userTeamMembersStyle="our-services-cards-container" userTeamMemberCardStyle="our-services-cards"></Team>

      <HeroSection id="choose-us" heroHeadName={chooseUsHeadText} heroAbout={chooseUsCards} imgSrc="/img/why-choose-us.jpg" userHeroSectionStyle="about-us-heading-bg" userHeroContentStyle="choose-us-cards-container" userButtonStyle="display-none"></HeroSection>

      <HeroSection id="contact" heroHeadName={contactUsHeadText} heroAbout={contactUsCards} imgState={false} userButtonStyle="display-none" userHeroContentStyle="contact-us-cards-container"></HeroSection>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14235.929788407462!2d80.83589404963992!3d26.872298764271605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe2b46da747d%3A0xf29dbcceeb6b89b!2sDubagga%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1722605689003!5m2!1sen!2sin" width="800" height="600" style={{ border: 0, width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <Footer id="#footer" footerList={footerLinksArray} copyrightName="Technoconnect IT Solutions." userFooterStyle="bg-footer" userLinksStyle="footer-links-container" userLinksDataStyle="footer-links-data-container" userCopyrightStyle="bg-footer-copyright"></Footer>

    </>
  )
}

export default App

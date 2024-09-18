import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => {
    console.log('handleClick')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log('fixs')
  }

  return (
    <header className={`flex flex-col justify-center items-start w-full min-w-screen border-b-2 shadow-md md:px-20 sm:px-10 px-4 gap-8 ${isMenuOpen ? "block h-[300px] overflow-auto" : "h-[80px] overflow-hidden"}`}>
      <div className="flex flex-row justify-between w-full">
        <div className="w-full">
          <a href="/">
            <img src="../../images/logo_mki.png" className="w-20" />
          </a>
        </div>
        <div className="flex flex-1 items-center h-full w-full">
          <ul className="hidden flex-row whitespace-nowrap sm:flex">
            <li>
              <a
                href="/public-training/"
                className="text-black no-underline mx-5"
              >
                Public Training
              </a>
            </li>
            <li>
              <a href="/consulting" className="text-black no-underline mx-5">
                Consulting
              </a>
            </li>
            <li>
              <a href="/our-team" className="text-black no-underline mx-5">
                Our Team
              </a>
            </li>
            <li>
              <a href="/contact-us" className="text-black no-underline mx-5">
                {" "}
                Contact Us{" "}
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6281381884838?"
                className="bg-primary p-4 text-red-50 rounded-lg font-semibold no-underline"
                onClick={handleClick}
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
          <div className="sm:hidden flex flex-row">
            <a
              href="https://wa.me/6281381884838?"
              className="bg-primary p-4 text-red-50 rounded-lg font-semibold no-underline w-full whitespace-nowrap"
              onClick={handleClick}
            >
              Hubungi Kami
            </a>
            <button className="block focus:outline-none" onClick={toggleMenu}>
              {/* Hamburger Icon */}
              <svg
                className="w-8 h-8 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <nav className={`${isMenuOpen ? "block overflow-auto" : "overflow-hidden clear-both max-h-0 hidden"}`}>
        <ul className="flex-col space-y-4 justify-start place-items-start w-full text-lg">
          <li>
            <a
              href="/public-training/"
              className="text-black no-underline text-left"
            >
              Public Training
            </a>
          </li>
          <li>
            <a href="/consulting" className="text-black no-underline">
              Consulting
            </a>
          </li>
          <li>
            <a href="/our-team" className="text-black no-underline">
              Our Team
            </a>
          </li>
          <li>
            <a href="/contact-us" className="text-black no-underline">
              {" "}
              Contact Us{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


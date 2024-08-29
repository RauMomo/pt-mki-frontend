
const Header = () => {
  const handleClick = () => {
    console.log('handleClick')
  }
  return (
    <header className="flex justify-between flex-row items-center w-full h-[90px] border-b-2 shadow-md px-20">
      <a href="/">
        <img src="../../images/logo_mki.png" className="w-20 block" />
      </a>
      <nav className="inline-block">
        <ul className="flex space-x-4">
          <li>
            <a
              href="/public-training/1"
              className="text-black no-underline mx-5"
            >
              Public Training
            </a>
          </li>
          <li>
            <a href="/consulting" className="text-black no-underline mx-5">Consulting</a>
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
      </nav>
    </header>
  );
  }

export default Header;


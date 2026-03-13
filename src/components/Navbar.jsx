import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar({ openTour }) {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (

    <nav
      id="main-navbar"
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}
    >

      <div className="flex items-center justify-between px-8 md:px-14">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <img src={logo} className="h-10" />

          <h2
            className={`text-xl font-semibold transition-colors
            ${scrolled ? "text-[#174753]" : "text-white"}`}
          >
            Beverly Park AFH
          </h2>

        </div>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8 font-medium">

          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (

            <button
              key={item}
              className={`transition-colors duration-300 hover:text-[#d68760]
              ${scrolled ? "text-[#174753]" : "text-white"}`}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </button>

          ))}

          {/* Request Tour Button */}

          <button
            className="bg-[#d68760] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#c67652] hover:scale-105 transition"
            onClick={openTour}
          >
            Request Tour
          </button>

        </div>

        {/* Mobile Menu Button */}

        <div className="md:hidden">

          <button
            onClick={() => setOpen(!open)}
            className={`text-2xl focus:outline-none
            ${scrolled ? "text-[#174753]" : "text-white"}`}
          >
            {open ? "✖" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-md md:hidden">

          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (

            <button
              key={item}
              className="text-[#174753] hover:text-[#d68760] transition"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </button>

          ))}

          <button
            className="bg-[#d68760] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#c67652] hover:scale-105 transition"
            onClick={openTour}
          >
            Request Tour
          </button>

        </div>

      )}

    </nav>

  );

}

export default Navbar;
import { useState, useEffect } from "react";

import logo from "../assets/logo.png";



function Navbar({ openTour }) {



  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [active, setActive] = useState("home");



  useEffect(() => {



    const handleScroll = () => {



      // Navbar background change

      if (window.scrollY > 120) {

        setScrolled(true);

      } else {

        setScrolled(false);

      }



      // Active section detection

      const sections = ["home", "about", "services", "gallery", "contact"];



      sections.forEach((section) => {



        const el = document.getElementById(section);



        if (!el) return;



        const top = el.offsetTop - 140;

        const bottom = top + el.offsetHeight;



        if (window.scrollY >= top && window.scrollY < bottom) {

          setActive(section);

        }



      });



    };



    window.addEventListener("scroll", handleScroll);



    return () => window.removeEventListener("scroll", handleScroll);



  }, []);



  const scrollToSection = (id) => {



    const el = document.getElementById(id);



    if (el) el.scrollIntoView({ behavior: "smooth" });



    setOpen(false);



  };



  const menu = ["Home", "About", "Services", "Gallery", "Contact"];



  return (



    <nav

      id="main-navbar"

      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500

      ${scrolled

        ? "bg-white/80 backdrop-blur-lg shadow-md py-3 border-b border-[#eee]"

        : "bg-transparent py-5"

      }`}

    >



      <div className="flex items-center justify-between px-8 md:px-14">



        {/* Logo */}



        <div

          className="flex items-center gap-3 cursor-pointer"

          onClick={() => scrollToSection("home")}

        >



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



          {menu.map((item) => {



            const id = item.toLowerCase();



            return (



              <button

                key={item}

                onClick={() => scrollToSection(id)}

                className={`relative transition-colors duration-300

                ${scrolled ? "text-[#174753]" : "text-white"}

                ${active === id ? "text-[#d68760]" : ""}

                hover:text-[#d68760]`}

              >



                {item}



                {active === id && (



                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#d68760] rounded"></span>



                )}



              </button>



            );



          })}



          {/* Request Tour Button */}



          <button

            className="bg-[#d68760] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#c67652] hover:scale-105 active:scale-95 transition"

            onClick={openTour}

          >

            Request Tour

          </button>



        </div>



        {/* Mobile Menu Button */}



        <div className="md:hidden">



          <button

            onClick={() => setOpen(!open)}

            className={`text-2xl transition

            ${scrolled ? "text-[#174753]" : "text-white"}`}

          >

            {open ? "✖" : "☰"}

          </button>



        </div>



      </div>



      {/* Mobile Menu */}



      {open && (



        <div className="absolute top-full left-0 w-full bg-white backdrop-blur-md flex flex-col items-center gap-6 py-8 shadow-lg md:hidden animate-fadeIn">



          {menu.map((item) => {



            const id = item.toLowerCase();



            return (



              <button

                key={item}

                className="text-[#174753] hover:text-[#d68760] text-lg transition"

                onClick={() => scrollToSection(id)}

              >

                {item}

              </button>



            );



          })}



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
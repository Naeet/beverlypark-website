import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import footerBg from "../assets/company6.jpg"

function Footer() {

  return (

    <footer className="relative text-white pt-12 pb-6 overflow-hidden">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      {/* Dark Overlay for readability */}

      <div className="absolute inset-0 bg-[#174753]/10"></div>

      {/* Content */}

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-20">

        {/* Brand */}

        <div className="max-w-xs">

          <h3 className="text-xl font-bold mb-3">
            Beverly Park AFH
          </h3>

          <p className="text-sm text-white/85 leading-relaxed">
            Providing compassionate and professional adult family home care
            in a warm, safe, and welcoming environment.
          </p>

        </div>

        {/* Explore */}

        <div>

          <h4 className="font-semibold mb-3 text-base">
            Explore
          </h4>

          <ul className="space-y-2 text-white/100 text-sm">

            <li>
              <a href="#about" className="hover:text-[#d68760] transition">
                About Us
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-[#d68760] transition">
                Services
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-[#d68760] transition">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#d68760] transition">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h4 className="font-semibold mb-3 text-base">
            Contact
          </h4>

          <div className="space-y-2 text-white/85 text-sm">

            <p className="flex items-center gap-2">
              <FaPhone />
              +1 (425) 563-5802
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope />
              getienesh@yahoo.com
            </p>

          </div>

        </div>

        {/* Location */}

        <div>

          <h4 className="font-semibold mb-3 text-base">
            Location
          </h4>

          <p className="flex items-start gap-2 text-white/85 text-sm leading-relaxed">

            <FaMapMarkerAlt className="mt-1" />

            3507 Shelby Road <br />
            Lynnwood, WA 98087

          </p>

        </div>

      </div>

      {/* Divider */}

      <div className="relative border-t border-white/20 mt-8 pt-4">

        <p className="text-center text-xs text-white/70">

          © {new Date().getFullYear()} Beverly Park Adult Family Home.  
          All rights reserved.

        </p>

      </div>

    </footer>

  )

}

export default Footer
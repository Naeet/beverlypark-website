import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

function ContactSection() {

  const address = "3507 Shelby Road Lynnwood WA 98087"

  return (

    <section
      id="contact"
      className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-white to-[#faf7f5]"
    >

      {/* Decorative background glow */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d68760]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#d68760]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <h2 className="text-4xl font-bold text-[#174753] mb-4">
            Get in <span className="text-[#d68760]">Touch</span>
          </h2>

          <p className="text-[#6b7a7f] mb-12">
            We are always happy to answer questions and help families
            learn more about our home.
          </p>

          {/* Contact list */}

          <div className="space-y-8">

            {/* Phone */}

            <div className="flex items-center justify-between border-b border-[#e8e3e0] pb-4">

              <div className="flex items-center gap-3 text-[#174753]">

                <FaPhone className="text-[#d68760]" />

                <span className="font-medium">
                  Phone
                </span>

              </div>

              <a
                href="tel:+14255635802"
                className="text-[#6b7a7f] hover:text-[#d68760] transition"
              >
                +1 (425) 563-5802
              </a>

            </div>

            {/* Email */}

            <div className="flex items-center justify-between border-b border-[#e8e3e0] pb-4">

              <div className="flex items-center gap-3 text-[#174753]">

                <FaEnvelope className="text-[#d68760]" />

                <span className="font-medium">
                  Email
                </span>

              </div>

              <a
                href="mailto:getienesh@yahoo.com"
                className="text-[#6b7a7f] hover:text-[#d68760] transition"
              >
                getienesh@yahoo.com
              </a>

            </div>

            {/* Address */}

            <div className="flex items-start justify-between border-b border-[#e8e3e0] pb-4">

              <div className="flex items-center gap-3 text-[#174753]">

                <FaMapMarkerAlt className="text-[#d68760]" />

                <span className="font-medium">
                  Address
                </span>

              </div>

              <a
                href="https://maps.google.com/?q=3507+Shelby+Road+Lynnwood+WA+98087"
                target="_blank"
                className="text-[#6b7a7f] hover:text-[#d68760] text-right max-w-[220px] transition"
              >
                {address}
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE MAP */}

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">

          <iframe
            src="https://maps.google.com/maps?q=3507%20Shelby%20Road%20Lynnwood%20WA%2098087&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[420px]"
          ></iframe>

        </div>

      </div>

    </section>

  )

}

export default ContactSection
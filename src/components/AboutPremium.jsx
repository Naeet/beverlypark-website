import aboutImg from "../assets/company1.jpg"
import FloatingDecor from "../components/FloatingDecor"

function AboutPremium() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-20 bg-[#faf7f5]"
    >
        <FloatingDecor />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

 
  


        {/* Image Side */}

        <div className="relative group">

          <div className="absolute -inset-2 bg-gradient-to-r from-[#d68760]/40 to-transparent rounded-xl blur opacity-60 group-hover:opacity-80 transition"></div>

          <img
            src={aboutImg}
            alt="Beverly Park Adult Family Home"
            className="relative rounded-xl shadow-xl object-cover w-full h-[420px] group-hover:scale-[1.02] transition duration-500"
          />

        </div>

        {/* Text Content */}

        <div>

          <p className="text-sm uppercase tracking-widest text-[#d68760] mb-3">
            About Our Home
          </p>

          <h2 className="text-4xl md:text-1xl font-bold text-[#174753] mb-1 leading-tight">
            Compassionate Care in a <span className="text-[#d68760]">Warm Family Environment</span>
          </h2>

          <p className="text-[#6b7a7f] mb-6 leading-relaxed">
            Since 2018, Beverly Park Adult Family Home has been dedicated to providing
            personalized, high-quality care in a safe and comfortable environment,
            ensuring that residents feel respected, valued, and truly at home.
          </p>

          <p className="text-[#6b7a7f] mb-8 leading-relaxed">
            Our dedicated caregivers focus on dignity, comfort, and wellbeing,
            offering assistance with daily activities, medication management,
            and compassionate companionship for every resident.
          </p>

          {/* Highlight Features */}

          <div className="grid grid-cols-2 gap-6">

            <div className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-[#d68760] rounded-full"></div>
              <p className="text-[#6b7a7f]">Personalized Resident Care</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-[#d68760] rounded-full"></div>
              <p className="text-[#6b7a7f]">24/7 Professional Support</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-[#d68760] rounded-full"></div>
              <p className="text-[#6b7a7f]">Comfortable Home Setting</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-[#d68760] rounded-full"></div>
              <p className="text-[#6b7a7f]">Safe & Caring Environment</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutPremium
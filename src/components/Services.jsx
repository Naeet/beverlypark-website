import {
  FaHandsHelping,
  FaPills,
  FaUtensils,
  FaUserNurse,
  FaWheelchair,
  FaHeart
} from "react-icons/fa"
import FloatingDecor from "../components/FloatingDecor"

const services = [
  {
    icon: FaHandsHelping,
    title: "Daily Living Assistance",
    text: "Support with everyday activities to ensure comfort, independence, and dignity."
  },
  {
    icon: FaPills,
    title: "Medication Management",
    text: "Professional supervision to ensure medications are taken correctly and safely."
  },
  {
    icon: FaUtensils,
    title: "Home-Cooked Meals",
    text: "Nutritious and delicious meals prepared daily in a warm home environment."
  },
  {
    icon: FaUserNurse,
    title: "Personal Hygiene Support",
    text: "Respectful assistance with grooming and hygiene to maintain wellbeing."
  },
  {
    icon: FaWheelchair,
    title: "Mobility Assistance",
    text: "Safe mobility and transfer assistance for residents requiring support."
  },
  {
    icon: FaHeart,
    title: "Companionship",
    text: "Meaningful companionship and emotional support for a fulfilling life."
  }
]

function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#faf7f5] to-white"
    >
        <FloatingDecor />
        
      <div className="max-w-6xl mx-auto">
        

        {/* Section Title */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#174753] mb-4">
            Our <span className="text-[#d68760]">Services</span>
          </h2>

          <p className="text-[#6b7a7f] max-w-2xl mx-auto">
            We provide compassionate, personalized care in a safe and welcoming
            environment designed to support the wellbeing and dignity of every resident.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-3 gap-12">

          {services.map((service, index) => {

            const Icon = service.icon

            return (

              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white p-5 rounded-2xl shadow-md border border-[#f0e6e1] hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >

                {/* Icon Circle */}

                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#d68760]/10 text-[#d68760] mb-6 group-hover:bg-[#d68760] group-hover:text-white transition">

                  <Icon size={26} />

                </div>

                {/* Title */}

                <h3 className="text-xl font-semibold mb-3 text-[#174753]">
                  {service.title}
                </h3>

                {/* Text */}

                <p className="text-[#6b7a7f] leading-relaxed">
                  {service.text}
                </p>

              </div>

            )

          })}

        </div>

      </div>
    </section>
  )
}

export default Services
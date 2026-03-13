import { Star, Quote } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

function Testimonials() {

  const testimonials = [

    {
      name: "Family Member",
      text: "The care provided here is exceptional. Our loved one feels safe, respected, and part of a family."
    },

    {
      name: "Resident Family",
      text: "The home is always clean and welcoming. The caregivers are compassionate and attentive."
    },

    {
      name: "Community Member",
      text: "A wonderful environment with dedicated staff who truly care about their residents."
    }

  ]

  return (

    <section className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#faf7f5] to-white">

      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}

        <h2 className="text-4xl font-bold text-[#174753] mb-6">
          What <span className="text-[#d68760]">Families Say</span>
        </h2>

        <p className="text-[#6b7a7f] mb-16">
          Families trust us to care for their loved ones with dignity and compassion.
        </p>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          loop
        >

          {testimonials.map((t, index) => (

            <SwiperSlide key={index}>

              <div className="bg-white rounded-2xl shadow-xl p-12 max-w-3xl mx-auto relative">

                {/* Quote icon */}

                <Quote
                  size={42}
                  className="absolute top-8 right-8 text-[#d68760]/20"
                />

                {/* Stars */}

                <div className="flex justify-center mb-6">

                  {[...Array(5)].map((_, i) => (

                    <Star
                      key={i}
                      size={18}
                      className="text-[#d68760]/70 fill-[#d68760]/70"
                    />

                  ))}

                </div>

                {/* Testimonial */}

                <p className="text-[#6b7a7f] text-lg italic leading-relaxed mb-8">
                  "{t.text}"
                </p>

                {/* Profile */}

                <div className="flex justify-center items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-[#d68760]/20 flex items-center justify-center font-semibold text-[#d68760]">

                    {t.name.charAt(0)}

                  </div>

                  <div className="text-left">

                    <h4 className="font-semibold text-[#174753]">
                      {t.name}
                    </h4>

                    <p className="text-sm text-[#6b7a7f]">
                      Verified Visitor
                    </p>

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  )

}

export default Testimonials
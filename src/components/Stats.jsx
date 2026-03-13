import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { HeartHandshake, BedDouble, Star, Users } from "lucide-react"
import statsBg from "../assets/company2.jpg"

function Stats() {

  const stats = [
    {
      number: 24,
      suffix: "/7",
      label: "Compassionate Care",
      icon: HeartHandshake
    },
    {
      number: 6,
      suffix: "",
      label: "Private Rooms",
      icon: BedDouble
    },
    {
      number: 8,
      suffix: "+",
      label: "Years Experience",
      icon: Star
    },
    {
      number: 100,
      suffix: "+",
      label: "Happy Families",
      icon: Users
    }
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4
  })

  return (

    <section
      ref={ref}
      className="relative py-23 text-white bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${statsBg})` }}
    >

      {/* overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

        {stats.map((stat, index) => {

          const Icon = stat.icon

          return (

            <div
              key={index}
              className="backdrop-blur-md bg-white/10 rounded-xl p-8 shadow-lg hover:scale-105 transition duration-300"
            >

              {/* Icon */}

              <div className="flex justify-center mb-4">

                <Icon
                  size={40}
                  className="text-[#f4c2a1]"
                />

              </div>

              {/* Number */}

              <h2 className="text-4xl md:text-5xl font-bold mb-2">

                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2}
                  />
                )}

                {stat.suffix}

              </h2>

              {/* Label */}

              <p className="text-lg opacity-90">
                {stat.label}
              </p>

            </div>

          )

        })}

      </div>

    </section>

  )

}

export default Stats
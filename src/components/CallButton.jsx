import { FaPhone } from "react-icons/fa"

function CallButton() {
  return (

    <a
      href="tel:+14255635802"
      className="fixed bottom-6 right-6 bg-[#d68760] text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50 md:hidden"
    >
      <FaPhone size={20} />
    </a>

  )
}

export default CallButton
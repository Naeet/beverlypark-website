import { useState } from "react"

function MessageModal({ isOpen, onClose }) {

  if (!isOpen) return null

  return (

    <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-6">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-10 relative">

        {/* Close */}

        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        <h3 className="text-2xl font-semibold text-[#d68760] mb-6">
          Write Us a Message
        </h3>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d68760]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d68760]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d68760]"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#d68760]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#d68760] text-white py-3 rounded-lg font-semibold hover:bg-[#c57652] transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  )

}

export default MessageModal
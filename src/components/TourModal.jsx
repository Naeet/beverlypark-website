import { useState } from "react";
import emailjs from "@emailjs/browser";

function TourModal({ isOpen, onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_gsanl4q",
        "template_c2wggjt",
        formData,
        "-_SXU435eqYRk6Gc-"
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setSending(false);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-[90%] md:w-[500px] p-8 relative">

        {/* Close Button */}

        <button
          onClick={() => {
  setSuccess(false)
  setFormData({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  })
  onClose()
}}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-[#d68760]">
          Request a Tour
        </h2>

        {success ? (

          <div className="text-center">
            <p className="text-green-600 font-medium">
              Tour successfully scheduled! Our team will contact you shortly.
            </p>
            <button
              onClick={() => {
  setSuccess(false)
  setFormData({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  })
  onClose()
}}
              className="mt-4 bg-[#d68760] text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>

        ) : (

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="date"
              name="date"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <select
              name="time"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg"
            >
              <option value="">Preferred Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <textarea
              name="message"
              placeholder="Additional Message (optional)"
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <button
              type="submit"
              disabled={sending}
              className="bg-[#d68760] text-white py-3 rounded-lg hover:scale-105 transition"
            >
              {sending ? "Sending..." : "Submit Request"}
            </button>

          </form>

        )}

      </div>
    </div>
  );
}

export default TourModal;
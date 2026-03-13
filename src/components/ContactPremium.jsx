function ContactPremium() {
  return (
    <section id="contact" className="py-20 px-10 md:px-20 bg-[#f9f9f9]" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-[#d68760] text-center mb-10">
        Contact Us
      </h2>
      <div className="max-w-2xl mx-auto">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border rounded shadow focus:outline-none focus:ring-2 focus:ring-[#d68760]"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 border rounded shadow focus:outline-none focus:ring-2 focus:ring-[#d68760]"
          />
          <textarea
            placeholder="Message"
            className="p-4 border rounded shadow focus:outline-none focus:ring-2 focus:ring-[#d68760]"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-[#d68760] hover:bg-[#e1e1e1] text-white font-semibold py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12">

  <iframe
    src="https://maps.google.com/maps?q=3507%20Shelby%20Road%20Lynnwood%20WA%2098087&t=&z=15&ie=UTF8&iwloc=&output=embed"
    className="w-full h-80 rounded-lg"
    loading="lazy"
  ></iframe>

</div>
      </div>
    </section>
  );
}

export default ContactPremium;
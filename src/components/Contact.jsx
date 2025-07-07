import React from 'react'

const Contact = () => {
  return (
    <section className="py-20 px-8 max-w-4xl mx-auto   " id='contact'>
      
      <h2 className="text-4xl font-semibold text-white mb-6 ">Contact</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-5xl  bg-[#1a1a1a] text-white outline-0 placeholder-gray-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3  bg-[#1a1a1a] text-white placeholder-gray-500 h-32 rounded-5xl outline-0  resize-none"
        ></textarea>
        <button
          type="submit"
          className="border border-indigo-600 transition-all duration-500 max-w\ text-white px-6 py-3 rounded-4xl hover:bg-indigo-700 hover:text-white w-full"
        >
          Send
        </button>
      </form>
      <div className="text-center mt-6 text-gray-400">
        Or email me directly at <a href="mailto:joychiwendu50@gmail.com" className="text-indigo-400"> joychiwendu50@gmail.com</a>
      </div>
      
    </section>
  );
};

export default Contact;

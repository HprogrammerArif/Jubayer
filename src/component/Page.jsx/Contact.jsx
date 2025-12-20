import React from "react";
import image from "../../image/Frame 1.png";
import image1 from "../../image/Looper.svg";
function Contact() {
  return (
    <div>
      <div className=" relative py-20 ">
      <div className="text-center flex flex-col items-center justify-center container mx-auto">
        <img src={image} alt="" />

        <h1 className="text-4xl font-semibold rozha  bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent py-3">
          Let's Work Together
        </h1>

        <p className="text-[#64748B] text-xl  text-center max-w-2xl">
          Have a project in mind? I'd love to hear from you. Send me a message
          and let's create something amazing.
        </p>
      </div>
      <div className="  flex items-center justify-center px-4 pt-10">
        <div className="w-full max-w-5xl">
          {/* Name and Email Row */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <label className="block text-gray-100 text-md font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-6 py-3 bg-gray-800/50 backdrop-blur-md border-2 border-gray-700 rounded-md text-white placeholder-gray-500 text-lg focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-100 text-md font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 bg-gray-800/50 backdrop-blur-md border-2 border-gray-700 rounded-md text-white placeholder-gray-500 text-lg focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-10">
            <label className="block text-gray-100 text-md font-medium mb-2">
              Message
            </label>
            <textarea
              rows="8"
              placeholder="Write your message here..."
              className="w-full px-6 py-3 bg-gray-800/50 backdrop-blur-md border-2 border-gray-700 rounded-2xl text-white placeholder-gray-500 text-lg resize-none focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
            />
          </div>

          {/* Send Button */}
          <div className="flex  w-full cursor-pointer">
            <button className="w-full py-3 bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white text-xl font-semibold rounded-md shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300">
              Send
            </button>
          </div>
        </div>
      </div>

      <img src={image1} className="absolute top-0 left-20 animate-[spin_15s_linear_infinite] h-96 w-auto" alt="" />
      <img src={image1} className="absolute bottom-10 right-20 animate-[spin_15s_linear_infinite]  h-96 w-auto" alt="" />
    </div>
    </div>
  );
}

export default Contact;

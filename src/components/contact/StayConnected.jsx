import React from 'react';

const StayConnected = () => {
  return (
    <div className="w-[90%] mx-auto my-12 py-16 px-10 bg-[#f4ece6] rounded-lg shadow-md flex justify-between items-center">
      
      {/* Left Side: Photo Frame / Card Graphic */}
      <div className="w-[25%] flex items-center justify-center">
        <div className="bg-white p-3 rounded-lg shadow-md rotate-[-3deg] w-[100%]">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhEWwxS1WNrEaOpXPPRCRL6LTjU4ZjYIm51GvSQ8pe9IUpqDTkQui4Jo&s=10" 
            alt="Fashion collection" 
            className="w-[100%] h-[180px] object-cover rounded-sm"
          />
          <p className="text-center font-serif text-xs text-[#8c5a47] mt-2 italic">
            More Fashion More You ♡
          </p>
        </div>
      </div>

      {/* Center Side: Text Content & Social Icons */}
      <div className="w-[50%] flex flex-col items-center text-center">
        <span className="text-xs tracking-[2px] text-[#8c5a47] uppercase font-bold">
          STAY CONNECTED
        </span>
        <h2 className="text-3xl text-[#2b2b2b] my-2 font-serif">
          Stay Connected With StyleHub
        </h2>
        <p className="text-xs text-[#555555] mb-6">
          Follow us for new collections, fashion inspiration & special offers.
        </p>

        {/* Social Media Icons Circles */}
        <div className="flex gap-3 mb-6">
          <div className="w-[35px] h-[35px] bg-[#8c5a47] text-white rounded-full flex items-center justify-center text-xs font-bold cursor-pointer">
            ig
          </div>
          <div className="w-[35px] h-[35px] bg-[#8c5a47] text-white rounded-full flex items-center justify-center text-xs font-bold cursor-pointer">
            f
          </div>
          <div className="w-[35px] h-[35px] bg-[#8c5a47] text-white rounded-full flex items-center justify-center text-xs font-bold cursor-pointer">
            p
          </div>
          <div className="w-[35px] h-[35px] bg-[#8c5a47] text-white rounded-full flex items-center justify-center text-xs font-bold cursor-pointer">
            x
          </div>
        </div>

        {/* Explore Button */}
        <button className="border border-[#8c5a47] text-[#8c5a47] py-2 px-6 rounded-full text-xs font-semibold tracking-wider hover:bg-[#8c5a47] hover:text-white transition">
          Explore New Collection →
        </button>
      </div>

      {/* Right Side: Quote / Text */}
      <div className="w-[20%] text-center">
        <p className="font-serif italic text-[#8c5a47] text-base leading-relaxed">
          Fashion brings people together ♡
        </p>
      </div>

    </div>
  );
};

export default StayConnected;
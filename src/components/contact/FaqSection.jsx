import React from 'react';

const FaqSection = () => {
  return (
    <div className="w-[90%] max-w-300 mx-auto my-12 py-12 px-10 bg-[#f3f3f3] rounded-lg shadow-md flex justify-between items-start">
      <div className="w-[40%]">
        <h1 className="text-xs tracking-[2px] text-[#8c5a47] uppercase font-bold">
          FAQ
        </h1>
        <h2 className="text-4xl text-[#2b2b2b] my-3 font-serif">
          Frequently<br />Asked Questions
        </h2>
        <p className="text-sm text-[#555555] leading-relaxed mb-6">
          Quick answers to common questions.
        </p>
        <div className="w-25">
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjfGW_rVFE6oKsUZJfUjplFXMw548m2azhgBvWLJdTw4lloVtAYl-JLs&s=10'
            alt="Leaf decoration" 
            className="w-full rounded-full"
          />
        </div>
      </div>

    
      <div className="w-[55%] flex flex-col gap-4">
        
          {/*  Item 1 */}
        <div className="w-full bg-[#f1ded3] p-4 rounded-lg border border-[#e8ded6]">
          <div className="flex justify-between items-center cursor-pointer">
            <h3 className="text-base font-semibold text-[#2b2b2b]">
              How long does delivery take?
            </h3>
            <span className="text-sm text-[#555555]">▼</span>
          </div>
          <p className="text-sm text-[#666666] mt-2">
            Usually 3-5 working days.
          </p>
        </div>

        {/*  Item 2 */}
        <div className="w-full bg-[#f1ded3] p-4 rounded-lg border border-[#e8ded6]">
          <div className="flex justify-between items-center cursor-pointer">
            <h3 className="text-base font-semibold text-[#2b2b2b]">
              Can I exchange my order?
            </h3>
            <span className="text-sm text-[#555555]">▼</span>
          </div>
          <p className="text-sm text-[#666666] mt-2">
            Yes, exchanges are available within 7 days.
          </p>
        </div>

        {/*  Item 3 */}
        <div className="w-full bg-[#f1ded3] p-4 rounded-lg border border-[#e8ded6]">
          <div className="flex justify-between items-center cursor-pointer">
            <h3 className="text-base font-semibold text-[#2b2b2b]">
              How can I track my order?
            </h3>
            <span className="text-sm text-[#555555]">▼</span>
          </div>
          <p className="text-sm text-[#666666] mt-2">
            You will receive tracking details after dispatch.
          </p>
        </div>

        {/* Item 4 */}
        <div className="w-full bg-[#f1ded3] p-4 rounded-lg border border-[#e8ded6]">
          <div className="flex justify-between items-center cursor-pointer">
            <h3 className="text-base font-semibold text-[#2b2b2b]">
              Do you offer Cash on Delivery?
            </h3>
            <span className="text-sm text-[#555555]">▼</span>
          </div>
          <p className="text-sm text-[#666666] mt-2">
            Yes, COD is available across Pakistan.
          </p>
        </div>

      </div>

    </div>
  );
};

export default FaqSection;
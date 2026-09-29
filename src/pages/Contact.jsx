import React from "react";
import Contact1 from "../components/contact/Contact1";
import ContactSection from "../components/contact/ContactSection";
import FaqSection from "../components/contact/FaqSection";
import StayConnected from "../components/contact/StayConnected";

const Contact = () => {
  return (
    <div>
      <ContactSection/>
      <Contact1 />
      <FaqSection/>
      <StayConnected/>

    </div>
  );
};

export default Contact;
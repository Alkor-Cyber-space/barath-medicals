import axios from "axios";
import { Mail, Phone } from "lucide-react";
import React, { useState } from "react";

const Form = () => {
     const [formData, setFormData] = useState({
    companyName: "",
    natureOfBusiness: "",
    address: "",
    postcode: "",
    contactName: "",
    contactPhone: "",
    email: "",
    linkedin: "",
    idea: "",
  });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios(
        "https://script.google.com/macros/s/AKfycbzgBwMPGzD_qbu0pB38WDbdpV3qRL6itIHpNc3YmRu1_cuz2YjC_NccDjSxDGAxuTIT/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.result === "success") {
        setResponseMsg("Form submitted successfully!");
      } else {
        setResponseMsg("Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMsg("Error submitting form.");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Form Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Enquire For More Details
        </h2>
        <p className="text-gray-600 my-8">
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Your Company Name"
        className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
      />
      <input
        type="text"
        name="natureOfBusiness"
        value={formData.natureOfBusiness}
        onChange={handleChange}
        placeholder="Nature of Business"
        className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
      />
      <div className="flex gap-3">
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-2/3 border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
        />
        <input
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
          placeholder="Postcode"
          className="w-1/3 border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
        />
      </div>
      <input
        type="text"
        name="contactName"
        value={formData.contactName}
        onChange={handleChange}
        placeholder="Contact Name"
        className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
      />
      <input
        type="text"
        name="contactPhone"
        value={formData.contactPhone}
        onChange={handleChange}
        placeholder="Contact Phone"
        className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email@gmail.com"
        className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
      />
      <input
        type="text"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        placeholder="LinkedIn"
        className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
      />
      <textarea
        name="idea"
        value={formData.idea}
        onChange={handleChange}
        placeholder="Let's talk about your idea"
        rows="3"
        className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-[#024A3E] text-white py-2 rounded-md hover:bg-[#036356] transition"
      >
        SUBMIT
      </button>
    </form>
      </div>

      {/* Right Office Section */}
      <div className="flex flex-col item-center px-35  justify-center text-gray-800">
        <h3 className="font-bold text-lg mb-3">Offices</h3>

        <div className="space-y-5 text-gray-700 mb-6">
          <div>
            <p className="font-medium">United States</p>
            <p>500 5th Avenue Suite 400, NY 10110</p>
          </div>
          <div>
            <p className="font-medium">United Kingdom</p>
            <p>High St, Bromley BR1 1DN</p>
          </div>
          <div>
            <p className="font-medium">France</p>
            <p>80 avenue des Terroirs de France, Paris</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-3">For Quick Inquiries</h3>

        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span><Phone className="w-5 h-5"/> </span> +44 7777777777
          </li>
          <li className="flex items-center gap-2">
            <span><Phone className="w-5 h-5"/></span> +1 3333333330
          </li>
          <li className="flex items-center gap-2">
            <span><Mail className="w-5 h-5"/></span> loremipsum@gmail.com
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Form;
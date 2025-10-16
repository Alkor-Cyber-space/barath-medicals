import axios from "axios";
import { Mail, Phone } from "lucide-react";
import React, { useState } from "react";
import { GoLocation } from "react-icons/go";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    contact_no: "",
    mail_id: "",
    preference_store_location: "",
    previous_pharma_experience: "",
    interested_in: "",
    investment_amount: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const url =
    "https://script.google.com/macros/s/AKfycby7ZbmcCQgjvVNEmAu5XOxz9vXlO7rstajFcRJs1j7-GohDodoiBC77QWTnR7i6MG7B/exec";

  const formBody = new URLSearchParams({
    name: formData.name,
    address: formData.address,
    pincode: formData.pincode,
    contact_no: formData.contact_no,
    mail_id: formData.mail_id,
    preference_store_location: formData.preference_store_location,
    previous_pharma_experience: formData.previous_pharma_experience,
    interested_in: formData.interested_in,
    investment_amount: formData.investment_amount,
  }).toString();

  fetch(url, {
    method: "POST",
    mode: "no-cors", // 👈 important for Google Apps Script
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  })
    .then(() => { 
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        address: "",
        pincode: "",
        contact_no: "",
        mail_id: "",
        preference_store_location: "",
        previous_pharma_experience: "",
        interested_in: "",
        investment_amount: "",
      });
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again.");
    });
};

  return (
    <div className="bg-gray-50 ">
      <h1 className="font-sans text-[#024A3E] text-center text-5xl md:text-6xl tracking-[0.25em] leading-tight uppercase">
  “SMART INVESTMENT FOR
  <br />
  LIFETIME RETURNS”
</h1>



      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Left Form Section */}
        <div className="md:w-[40%]">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Enquire For More Details
          </h2>
          <p className="text-gray-600 my-8">
            Have any questions or need further clarification? Feel free to
            enquire for more details — we’re happy to help.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
            />

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
            />

            <div className="flex gap-3">
              <input
                type="text"
                name="contact_no"
                value={formData.contact_no}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-2/3 border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
              />
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="w-1/3 border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
              />
            </div>

            <input
              type="email"
              name="mail_id"
              value={formData.mail_id}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
            />

            <input
              type="text"
              name="preference_store_location"
              value={formData.preference_store_location}
              onChange={handleChange}
              placeholder="Preferred Store Location"
              className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
            />

            <input
              type="text"
              name="previous_pharma_experience"
              value={formData.previous_pharma_experience}
              onChange={handleChange}
              placeholder="Previous Pharma Experience (if any)"
              className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
            />

            <input
              type="text"
              name="interested_in"
              value={formData.interested_in}
              onChange={handleChange}
              placeholder="Interested In"
              className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
            />

            <input
              type="number"
              name="investment_amount"
              value={formData.investment_amount}
              onChange={handleChange}
              placeholder="Investment Amount"
              className="w-full border-b border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#024A3E] text-white py-2 rounded-md hover:bg-[#036356] transition"
            >
              SUBMIT
            </button>
          </form>
      </div>

      {/* Right Office Section */}
      <div className="md:w-[60%] flex flex-col items-start px-20 justify-center text-gray-800 space-y-10">

        {/* Offices Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Offices</h3>
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="font-medium">Pondicherry</p>
              <p>No.: 26 Marie Oulgaret Main Road, Ganapathy Nagar</p>
            </div>
            <div>
              <p className="font-medium">Palakkad</p>
              <p>283, Krishna Complex, Marutharoad, Kootupatha, Palakkad</p>
            </div>
            <div>
              <p className="font-medium">Chennai</p>
              <p>No.157e10, M.t.h. Road, Ambattur Tamil Nadu 600049</p>
            </div>
            <div>
              <p className="font-medium">Karur</p>
              <p>No.70/10 Pon Nagar, Thanthonimalai Post, Karur 6390005</p>
            </div>
          </div>
        </div>

        {/* Quick Inquiries Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">For Quick Inquiries</h3>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            {/* Left Side — Contact Info */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-800" />
                <span>+(91) 80788 81234</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-800" />
                <span>+(91) 87541 22640</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-800" />
                <span>info@bmedplus.com</span>
              </li>
            </ul>

            {/* Right Side — Address */}
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <GoLocation className="w-9 text-gray-800 mt-1" />
                <span>
                  SF No. 70/1B, Aachimanagalam Village, Esanatham Main Road, <br />
                  Arugampalayam, Thanthonimalai Post, Karur - 639 005
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Form;
// CompanyForm.jsx




// import React from 'react'

// const SampleForm = () => {

// // https://script.google.com/macros/s/AKfycbxPIOT1m3K9cp6uBOWR7XY1Qp6whlXbIOtdZMN0d5GeFqe9b7dXmEFuUkZuuVaJIDeG/exec
//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     const url = "https://script.google.com/macros/s/AKfycbxF_AVpTyFpS-bRkU5PpZV02xWRCzQMDcxjtPZojbfdr1z4irC3rZ3ZyFWdklVq8M1e/exec"
//     fetch(url,{
//       method:"POST",
//       headers: {'content-type':'application/x-www-form-urlencoded'},
//       body: `name=${encodeURIComponent(e.target.name.value)}&email=${encodeURIComponent(e.target.email.value)}`
//     }).then(res=>res.text()).then(data=>{
//       alert(data)
//     }).catch(error =>console.log(error))
//   }

//   return (
//     <div>

//         <h1>form</h1>
//         <form onSubmit={handleSubmit}>
//           <input name="name" placeholder='Name' /><br />
//           <input name="email" placeholder='Email' /><br />
//           <button>Add</button>
//         </form>
//     </div>
//   )
// }

// export default SampleForm

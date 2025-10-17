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

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true); // show modal
    setLoading(true); // start loader
    setIsSubmitted(false);

    const url =
      "https://script.google.com/macros/s/AKfycbz3dGMppSJWvBoNZCSbK46oMgLIJjac4tk0LEtk4SSdkWcnT0ceF4OCGVeoJjSBgn1aHg/exec";

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: formDataToSend,
    })
      .then(() => {
        // simulate delay for loader visibility
        setTimeout(() => {
          setLoading(false);
          setIsSubmitted(true);
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
        }, 2000);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setShowPopup(false);
        alert("Submission failed. Please try again.");
      });
  };

  return (
    <div className="bg-gray-50 px-4 sm:px-6 md:px-12 lg:px-16 py-12 relative">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-sm w-full">
            {loading ? (
              <>
                <div className="flex flex-col items-center space-y-4">
                  <div className="animate-spin h-10 w-10 border-4 border-[#024A3E] border-t-transparent rounded-full"></div>
                  <p className="text-gray-700 text-lg font-medium">
                    Submitting your details...
                  </p>
                </div>
              </>
            ) : isSubmitted ? (
              <>
                <h2 className="text-2xl font-semibold text-green-800 mb-3">
                  Form Submitted!
                </h2>
                <p className="text-gray-700 mb-6">
                  Your details have been submitted successfully.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-[#024A3E] text-white px-6 py-2 rounded-md hover:bg-[#036356] transition cursor-pointer"
                >
                  OK
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}

      {/* Header */}
      <h1 className="font-sans text-[#024A3E] text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] md:tracking-[0.25em] leading-tight uppercase mb-10">
        “SMART INVESTMENT FOR
        <br />
        LIFETIME RETURNS”
      </h1>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left Form Section */}
        <div className="lg:w-[45%] bg-white rounded-2xl shadow-md p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center lg:text-left">
            Enquire For More Details
          </h2>
          <p className="text-gray-600 mb-8 text-center lg:text-left">
            Have any questions or need further clarification? Feel free to
            enquire for more details — we’re happy to help.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit} id="form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border-b border-gray-300 p-3 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
              required
            />

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border-b border-gray-300 p-3 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
              required
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="contact_no"
                value={formData.contact_no}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full sm:w-2/3 border-b border-gray-300 p-3 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
                required
              />
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="w-full sm:w-1/3 border-b border-gray-300 p-3 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
              />
            </div>

            <input
              type="email"
              name="mail_id"
              value={formData.mail_id}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-b border-gray-300 p-3 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
              required
            />

            {[
              {
                name: "preference_store_location",
                placeholder: "Preferred Store Location",
              },
              {
                name: "previous_pharma_experience",
                placeholder: "Previous Pharma Experience (if any)",
              },
              { name: "interested_in", placeholder: "Interested In" },
            ].map((field) => (
              <input
                key={field.name}
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full border-b border-gray-300 p-3 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
              />
            ))}

            <input
              type="number"
              name="investment_amount"
              value={formData.investment_amount}
              onChange={handleChange}
              placeholder="Investment Amount"
              className="w-full border-b border-gray-300 p-3 focus:ring-1 focus:ring-[#024A3E] focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#024A3E] text-white py-3 rounded-md hover:bg-[#036356] transition text-lg font-semibold cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Info Section */}
        <div className="lg:w-[55%] flex flex-col justify-center text-gray-800 space-y-10">
          <div>
            <h3 className="font-bold text-xl mb-4 text-center lg:text-left">
              Offices
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-sm sm:text-base">
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
                <p>No.157e10, M.T.H. Road, Ambattur Tamil Nadu 600049</p>
              </div>
              <div>
                <p className="font-medium">Karur</p>
                <p>No.70/10 Pon Nagar, Thanthonimalai Post, Karur 6390005</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4 text-center lg:text-left">
              For Quick Inquiries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm sm:text-base">
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

              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <GoLocation className="w-6 h-6 text-gray-800 mt-1" />
                  <span>
                    SF No. 70/1B, Aachimanagalam Village, Esanatham Main Road,
                    <br />
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

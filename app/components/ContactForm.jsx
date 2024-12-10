"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/meoqkjnn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 font-secular">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* כותרת הטופס */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#6B4226]">צור קשר</h2>
          <p className="text-gray-700 mt-2 text-lg">
            השאירו פרטים ונחזור אליכם בהקדם!
          </p>
        </div>

        {/* טופס */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white shadow-md rounded-lg p-8"
        >
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              שם מלא
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 text-gray-800 bg-gray-100 border rounded-lg focus:ring-[#6B8E23] focus:border-[#6B8E23]"
              placeholder="הכנס את שמך המלא"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              אימייל
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 text-gray-800 bg-gray-100 border rounded-lg focus:ring-[#6B8E23] focus:border-[#6B8E23]"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              טלפון
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="block w-full px-4 py-2 text-gray-800 bg-gray-100 border rounded-lg focus:ring-[#6B8E23] focus:border-[#6B8E23]"
              placeholder="052-1234567"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              הודעה (אופציונלי)
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-800 bg-gray-100 border rounded-lg focus:ring-[#6B8E23] focus:border-[#6B8E23]"
              placeholder="השאירו הודעה אם תרצו"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-[#6B8E23] font-semibold rounded-lg hover:bg-[#556B2F] focus:ring-4 focus:ring-[#6B8E23] focus:ring-opacity-50"
          >
            שלח הודעה
          </button>
        </form>

        {/* הודעת הצלחה/שגיאה */}
        {status === "success" && (
          <div className="mt-6 p-4 text-green-700 bg-green-100 border border-green-300 rounded-lg text-center">
            ההודעה נשלחה בהצלחה! תודה שפניתם, נחזור אליכם בקרוב.
          </div>
        )}
        {status === "error" && (
          <div className="mt-6 p-4 text-red-700 bg-red-100 border border-red-300 rounded-lg text-center">
            שגיאה בשליחת ההודעה. אנא נסו שוב מאוחר יותר.
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

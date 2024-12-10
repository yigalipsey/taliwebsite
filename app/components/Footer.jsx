import React from "react";
import Logo from "../../public/svg/logo.svg"; // ייבוא הלוגו
import PhoneIcon from "../../public/images/phone-call.png"; // ייבוא אייקון טלפון
import EmailIcon from "../../public/images/mail.png"; // ייבוא אייקון אימייל
import LocationIcon from "../../public/images/location.png"; // ייבוא אייקון מיקום

const Footer = () => {
  return (
    <footer className="bg-2 text-black py-12  font-secular">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-right">
        {/* לוגו ותיאור */}
        <div>
          <img
            src={Logo.src}
            alt="Tali Hadad Logo"
            className="h-16 mx-auto md:mx-0 mb-2"
          />
          <p className="text-sm">Tali Hadad Architecture</p>
        </div>

        {/* צור קשר */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold mb-4 md:mb-0">צור קשר</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-center md:justify-end space-x-3 rtl:space-x-reverse">
              <img src={PhoneIcon.src} alt="Phone Icon" className="h-6 w-6" />
              <a href="tel:+972542214335" className="hover:underline">
                +972 54-221-4335
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-end space-x-3 rtl:space-x-reverse">
              <img src={EmailIcon.src} alt="Email Icon" className="h-6 w-6" />
              <a
                href="mailto:th.architectt@gmail.com"
                className="hover:underline"
              >
                th.architectt@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-end space-x-3 rtl:space-x-reverse">
              <img
                src={LocationIcon.src}
                alt="Location Icon"
                className="h-6 w-6"
              />
              <p>קו פנגן, תאילנד</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

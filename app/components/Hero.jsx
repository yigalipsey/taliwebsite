import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/herotali.jpeg";

const HeroSection = () => {
  return (
    <section className="bg-white text-gray-800 w-5/6 mx-auto min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 transition-colors duration-300">
      {/* דיב של התמונה */}
      <div className="flex-1 flex justify-center mb-3 -mt-3 md:-mt-0 md:mb-0">
        <Image
          src={HeroImage}
          alt="טלי חדד - אדריכלית"
          width={500}
          height={500}
          className="rounded-lg object-contain md:w-[600px] md:h-[600px]"
        />
      </div>

      {/* דיב של הטקסט */}
      <div className="flex-1 text-center md:text-right font-rubik md:mr-12">
        <h1 className="text-4xl md:text-7xl font-bold">
          <span className="text-[#6B4226] font-secular">טלי חדד</span>
        </h1>
        <h2 className="text-lg md:text-3xl font-medium">
          אדריכלית ומנהלת פרויקטים
        </h2>
        <p className="text-md md:text-2xl mb-5">
          מתמחה ביצירת חללים ייחודיים, בעלי השראה ועיצוב עכשווי, עם דגש על
          חדשנות ופונקציונליות.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
          {/* כפתור פרויקטים */}
          <a
            href="#services"
            className="relative inline-block px-4 py-2 text-sm font-bold text-black border-2 border-black transition hover:bg-[#6B4226] hover:text-white"
          >
            {/* בורדר המשכי */}
            <span className="absolute -bottom-1 -right-1 w-full h-full border-b-2 border-r-2 border-black transition-transform duration-300 hover:translate-x-1 hover:translate-y-1"></span>

            {/* טקסט */}
            <span className="relative z-10">צפו בפרוייקטים</span>
          </a>

          {/* כפתור צרו קשר */}
          <a
            href="#contact"
            className="relative inline-block px-4 py-2 text-sm font-bold text-black border-2 border-black transition hover:bg-[#6B4226] hover:text-white"
          >
            {/* בורדר המשכי */}
            <span className="absolute -bottom-1 -right-1 w-full h-full border-b-2 border-r-2 border-black transition-transform duration-300 hover:translate-x-1 hover:translate-y-1"></span>

            {/* טקסט */}
            <span className="relative z-10">צרו קשר</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

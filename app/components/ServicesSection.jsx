import React from "react";

// ייבוא התמונות
import PermitsImg from "../../public/images/permitsImg.png";
import TenantsImg from "../../public/images/model.png";
import DesignImg from "../../public/images/interior-design.png";
import SharedPlanImg from "../../public/images/shared-plan.png";
import KitchenImg from "../../public/images/kitchen.png";

// נתונים של השירותים
const services = [
  {
    title: "היתרים",
    description:
      "שירותי עריכת והכנת גרמושקא להיתרי בנייה, כולל פרטי תוכניות מדויקים המותאמים לדרישות הרשויות המקומיות.",
    image: PermitsImg,
    pdf: "/pdfs/romano.pdf",
  },
  {
    title: "שינויי דיירים",
    description:
      "ניהול תהליכי שינויי דיירים, כולל תכנון ושדרוגים מותאמים אישית לצורכי הדיירים.",
    image: TenantsImg,
    pdf: "/pdfs/tenants-example.pdf",
  },
  {
    title: "תכנון",
    description:
      "תכנון עיצוב פנים, כולל התאמה פונקציונלית ויצירת חוויית משתמש ייחודית לפרויקטים.",
    image: DesignImg,
    pdf: "/pdfs/design-example.pdf",
  },
  {
    title: "תשריט בית משותף",
    description:
      "הכנה ועריכה של תשריטים לבית משותף, עם חלוקה מפורטת של שטחים ודירות, בהתאמה לחוקי התכנון והבנייה.",
    image: SharedPlanImg,
    pdf: "/pdfs/shared-plan-example.pdf",
  },
  {
    title: "מטבחים",
    description:
      "תכנון מטבח מותאם אישית, עם פתרונות אחסון פרקטיים ועיצוב אסתטי המותאם ללקוח.",
    image: KitchenImg,
    pdf: "/pdfs/kitchen-example.pdf",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white w-4/5 mx-auto font-rubik py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* כותרת הסקשן */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-secular text-[#6B4226]">
            השירותים שאני מספקת
          </h2>
          <p className="text-gray-600 mt-1">
            מגוון פתרונות אדריכליים, מותאמים אישית לצרכים שלכם
          </p>
        </div>

        {/* רשת הקופסאות */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* קופסאות השירותים */}
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-lg p-6 text-center flex flex-col justify-between h-full"
            >
              {/* תמונה */}
              <div className="mb-4">
                <img
                  src={service.image.src}
                  alt={service.title}
                  className="h-14 w-14 mx-auto object-contain"
                />
              </div>
              {/* כותרת */}
              <h3 className="text-xl font-bold text-[#6B4226] mb-4">
                {service.title}
              </h3>
              {/* כותרת משנה */}
              <p className="text-gray-600 flex-grow">{service.description}</p>
              {/* כפתור לצפייה ב-PDF */}
              <a
                href={service.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6B8E23] text-white font-bold py-2 mt-6 px-4 rounded-lg hover:bg-[#556B2F] transition"
              >
                צפה בדוגמה
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

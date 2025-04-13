import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const subjectsOnDemand = [
  {
    name: "Computer Science",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/computer-science.gif?updatedAt=1732474210127",
    color: "from-celeste to-celeste-dark",
    alt: "Computer Science and programming concepts visualization",
    description: "Programming, algorithms, data structures, and software engineering principles",
    bookTrailLink: "/book-trial"
  },
  {
    name: "ICT",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/ict.gif?updatedAt=1732474210051",
    color: "from-celeste-dark to-night",
    alt: "Information and Communication Technology concepts",
    description: "Digital literacy, information systems, networking, and IT infrastructure",
    bookTrailLink: "/book-trial"
  },
  {
    name: "Business Studies",
    image: "https://ik.imagekit.io/studytomy/Subjects_On_Demand/business.gif?updatedAt=1732474210023",
    color: "from-night to-celeste",
    alt: "Business concepts and management visualization",
    description: "Economics, management, marketing, finance, and entrepreneurship",
    bookTrailLink: "/book-trial"
  }
];

const SubjectsOnDemand = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @property --angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
      }
      @keyframes gradient-rotate {
        0% { --angle: 0deg; }
        100% { --angle: 360deg; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .swiper-slide {
        height: auto !important;
        display: flex;
      }
      .swiper-slide > div {
        height: 100%;
        width: 100%;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const SubjectCard = ({ subject, index }: { subject: typeof subjectsOnDemand[0], index: number }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full flex flex-col"
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-lg group-hover:shadow-xl transition-all duration-500">
        {/* Animated gradient border */}
        <div className="absolute inset-0 z-0 rounded-2xl p-[2px] bg-gradient-to-r opacity-75 group-hover:opacity-100 transition-all duration-500" 
          style={{
            background: `linear-gradient(var(--angle, 0deg), ${subject.color.split(' ')[0].replace('from-', '')}, ${subject.color.split(' ')[1].replace('to-', '')})`,
            animation: 'gradient-rotate 3s linear infinite'
          }}
        >
          <div className="absolute inset-0 bg-white rounded-xl" />
        </div>
        
        {/* Card content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Subject icon */}
          <motion.div 
            className="subject-icon mb-6 h-36 flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br from-night/5 to-celeste/10"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative group-hover:animate-float p-4">
              <img 
                src={subject.image} 
                alt={subject.alt}
                className="w-24 h-24 object-contain relative z-10"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-celeste/20 blur-xl rounded-full transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Subject name */}
          <h3 className="text-2xl font-bold text-center mb-3 gradient-text">
            {subject.name}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-center mb-5 text-sm flex-grow">
            {subject.description}
          </p>

          {/* CTA Button */}
          <div className="mt-auto text-center">
            <motion.a 
              href={subject.bookTrailLink}
              className="inline-block px-6 py-2.5 rounded-full text-sm font-medium
                       bg-gradient-to-r from-celeste to-celeste-dark
                       text-night shadow-lg shadow-celeste/30
                       hover:shadow-celeste/50 transition-all duration-300
                       transform hover:-translate-y-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Assistance
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-night/5 via-white to-celeste/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-celeste/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-celeste/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Academic Expertise On Demand
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Specialized assistance in these subjects and many more available upon request
          </p>
        </motion.div>
        
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            className="subjects-carousel !overflow-visible pb-12 px-4"
          >
            {subjectsOnDemand.map((subject, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <SubjectCard subject={subject} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subjectsOnDemand.map((subject, index) => (
              <SubjectCard key={index} subject={subject} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SubjectsOnDemand; 
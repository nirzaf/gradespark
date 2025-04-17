import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Award, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/testimonials.css';
import TestimonialsBackground from '../common/TestimonialsBackground';

interface Testimonial {
  id: number;
  student_id: string;
  name: string;
  gender: 'male' | 'female';
  country: string;
  syllabus: string;
  comments: string;
  image_url: string;
  created_at: string;
  subject: string;
  is_active: boolean;
  university?: string; // Keeping for data compatibility but not displaying it
  rating?: number;
  service_used?: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  // Generate stars based on rating
  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <motion.div
      className="px-4 h-full"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="testimonial-card bg-gradient-to-br from-night/30 via-night/50 to-night/70 backdrop-blur-lg p-6 rounded-xl flex flex-col h-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] border border-celeste/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="testimonial-badge absolute -top-3 -right-3 bg-celeste text-night text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-3">
          {testimonial.service_used || testimonial.subject}
        </div>

        <div className="flex items-center mb-4">
          <div className="relative avatar-glow">
            <img
              src={testimonial.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=fff&bold=true`}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-celeste shadow-[0_0_15px_rgba(160,235,235,0.5)]"
            />
            <div className="absolute -bottom-2 -right-2 bg-celeste text-night text-xs font-bold px-2 py-0.5 rounded-full">
              {testimonial.syllabus}
            </div>
          </div>
          <div className="ml-auto">
            <Quote className="rotating-icon w-10 h-10 text-celeste opacity-50" />
          </div>
        </div>

        <div className="flex mb-3">
          {renderStars(testimonial.rating)}
        </div>

        <div className="text-white flex-grow flex flex-col">
          <p className="testimonial-quote mb-4 text-sm leading-relaxed flex-grow italic">"{testimonial.comments}"</p>
          <div className="mt-auto pt-4 border-t border-white/10">
            <h6 className="font-semibold text-celeste">{testimonial.name}</h6>
            <div className="flex flex-col">
              <span className="text-xs text-white/80">{testimonial.syllabus} Student</span>
              <span className="text-xs text-celeste/80">{testimonial.subject}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Custom slider arrows
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <motion.div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-gradient-to-r from-celeste/20 to-celeste/30 hover:from-celeste/30 hover:to-celeste/40 p-2 rounded-full backdrop-blur-sm transition-all duration-300 border border-celeste/30"
    onClick={onClick}
    whileHover={{ scale: 1.1, x: 3 }}
    whileTap={{ scale: 0.95 }}
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </motion.div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <motion.div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-gradient-to-l from-celeste/20 to-celeste/30 hover:from-celeste/30 hover:to-celeste/40 p-2 rounded-full backdrop-blur-sm transition-all duration-300 border border-celeste/30"
    onClick={onClick}
    whileHover={{ scale: 1.1, x: -3 }}
    whileTap={{ scale: 0.95 }}
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </motion.div>
);

// Stats component to display above testimonials
const TestimonialStats = () => {
  const stats = [
    { icon: Star, value: "4.9/5", label: "Student Rating" },
    { icon: Award, value: "1000+", label: "Assignments Completed" },
    { icon: Trophy, value: "98%", label: "Success Rate" },
    { icon: Users, value: "50K+", label: "Happy Students" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-gradient-to-br from-night/30 via-night/40 to-night/50 backdrop-blur-lg p-3 md:p-4 rounded-lg border border-celeste/20 flex flex-col items-center text-center shadow-lg hover:shadow-celeste/10 transition-all duration-300"
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className="bg-gradient-to-br from-celeste/20 to-celeste/10 p-2 md:p-3 rounded-full mb-2 md:mb-3 shadow-inner">
            <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-celeste" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5 md:mb-1">{stat.value}</h3>
          <p className="text-xs text-celeste/80 uppercase tracking-wider">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default function Testimonials() {
  // Static testimonials data instead of fetching from Supabase
  const [isLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      student_id: "1",
      name: "Sarah Johnson",
      gender: "female",
      country: "USA",
      syllabus: "Graduate",
      comments: "The assistance I received with my dissertation was exceptional. The writer understood my requirements perfectly and delivered a well-researched paper that helped me secure an A grade.",
      image_url: "",
      created_at: "2025-03-15",
      subject: "Psychology",
      is_active: true,
      university: "Stanford University",
      rating: 5,
      service_used: "Dissertation Help"
    },
    {
      id: 2,
      student_id: "2",
      name: "Michael Chen",
      gender: "male",
      country: "Canada",
      syllabus: "Undergraduate",
      comments: "I was struggling with my programming assignment until I found Grade Spark Academy. The expert helped me understand complex concepts and delivered a working solution before my deadline.",
      image_url: "",
      created_at: "2025-03-20",
      subject: "Computer Science",
      is_active: true,
      university: "University of Toronto",
      rating: 5,
      service_used: "Programming Help"
    },
    {
      id: 3,
      student_id: "3",
      name: "Emma Williams",
      gender: "female",
      country: "UK",
      syllabus: "Master's",
      comments: "The quality of research and attention to detail in my literature review was impressive. The writer's expertise in my field was evident, and I received excellent feedback from my professor.",
      image_url: "",
      created_at: "2025-03-25",
      subject: "Literature",
      is_active: true,
      university: "Oxford University",
      rating: 4,
      service_used: "Literature Review"
    },
    {
      id: 4,
      student_id: "4",
      name: "David Patel",
      gender: "male",
      country: "Australia",
      syllabus: "PhD",
      comments: "Meeting tight deadlines seemed impossible until I worked with Grade Spark Academy. Their team helped me complete my research paper with thorough analysis and proper citations, reducing my stress significantly.",
      image_url: "",
      created_at: "2025-04-01",
      subject: "Economics",
      is_active: true,
      university: "University of Melbourne",
      rating: 5,
      service_used: "Research Paper"
    },
    {
      id: 5,
      student_id: "5",
      name: "Sophia Rodriguez",
      gender: "female",
      country: "Spain",
      syllabus: "Undergraduate",
      comments: "As an international student, I was worried about my essay quality. Grade Spark Academy provided exceptional support with my business case study, helping me achieve the highest grade in my class!",
      image_url: "",
      created_at: "2025-04-05",
      subject: "Business Administration",
      is_active: true,
      university: "IE Business School",
      rating: 5,
      service_used: "Case Study"
    },
    {
      id: 6,
      student_id: "6",
      name: "James Wilson",
      gender: "male",
      country: "New Zealand",
      syllabus: "Master's",
      comments: "The statistical analysis support I received for my research methodology was outstanding. The expert not only helped with the calculations but also explained the concepts clearly so I could defend my work confidently.",
      image_url: "",
      created_at: "2025-04-10",
      subject: "Statistics",
      is_active: true,
      university: "University of Auckland",
      rating: 5,
      service_used: "Statistical Analysis"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '0',
          autoplaySpeed: 4000,
        }
      }
    ]
  };

  if (isLoading) {
    return <div className="py-20 text-center text-white">Loading testimonials...</div>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 relative overflow-hidden"
    >
      {/* Animated background */}
      {isMounted && <TestimonialsBackground />}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-celeste font-medium mb-2 uppercase tracking-wider">Student Success Stories</h5>
          <h2 className="testimonial-heading text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Join thousands of students who have achieved academic excellence with our expert assistance
          </p>
        </motion.div>

        {/* Stats section */}
        <TestimonialStats />

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
          <motion.div
            className="testimonial-badge bg-gradient-to-r from-night/40 to-night/60 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-celeste/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs text-celeste whitespace-nowrap font-medium">100% Satisfaction Guarantee</span>
          </motion.div>
          <motion.div
            className="testimonial-badge bg-gradient-to-r from-night/40 to-night/60 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-celeste/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs text-celeste whitespace-nowrap font-medium">Verified Student Reviews</span>
          </motion.div>
          <motion.div
            className="testimonial-badge bg-gradient-to-r from-night/40 to-night/60 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-celeste/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs text-celeste whitespace-nowrap font-medium">Expert Academic Support</span>
          </motion.div>
        </div>

        <div className="relative testimonial-carousel">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
}